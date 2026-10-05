# Įtraukia į Xcode projektą: MainViewController + WidgetBridgePlugin (App taikinys),
# App Group entitlements ir valdiklio plėtinį KalbekWidget. Kartojamas saugiai (idempotentiškas).
# Paleidimas: gem install xcodeproj && ruby scripts/add-ios-widget.rb
Encoding.default_external = Encoding::UTF_8
require 'xcodeproj'

root = File.expand_path('../ios/App', __dir__)
project = Xcodeproj::Project.open(File.join(root, 'App.xcodeproj'))
app = project.targets.find { |t| t.name == 'App' } or abort('Nėra App taikinio')
app_group = project.main_group.find_subpath('App', false)

# 1) Nauji Swift failai App taikinyje
%w[MainViewController.swift WidgetBridgePlugin.swift ActivityBridgePlugin.swift].each do |name|
  next if app_group.files.any? { |f| f.path == name }
  ref = app_group.new_reference(name)
  app.source_build_phase.add_file_reference(ref)
end
unless app_group.files.any? { |f| f.path == 'App.entitlements' }
  app_group.new_reference('App.entitlements')
end
app.build_configurations.each do |c|
  c.build_settings['CODE_SIGN_ENTITLEMENTS'] = 'App/App.entitlements'
  c.build_settings['CODE_SIGN_STYLE'] = 'Automatic'
end

# 2) Valdiklio plėtinys
widget = project.targets.find { |t| t.name == 'KalbekWidget' }
unless widget
  widget = project.new_target(:app_extension, 'KalbekWidget', :ios, '17.0', nil, :swift)
  group = project.main_group.find_subpath('KalbekWidget', true)
  group.set_source_tree('<group>')
  group.set_path('KalbekWidget')
  swift = group.new_reference('KalbekWidget.swift')
  group.new_reference('Info.plist')
  group.new_reference('KalbekWidget.entitlements')
  widget.source_build_phase.add_file_reference(swift)
  %w[WidgetKit SwiftUI].each do |fw|
    widget.frameworks_build_phase.add_file_reference(project.frameworks_group.new_file("System/Library/Frameworks/#{fw}.framework", :sdk_root))
  end
  widget.build_configurations.each do |c|
    s = c.build_settings
    s['PRODUCT_BUNDLE_IDENTIFIER'] = 'lt.kalbek.app.widget'
    s['PRODUCT_NAME'] = '$(TARGET_NAME)'
    s['INFOPLIST_FILE'] = 'KalbekWidget/Info.plist'
    s['CODE_SIGN_ENTITLEMENTS'] = 'KalbekWidget/KalbekWidget.entitlements'
    s['CODE_SIGN_STYLE'] = 'Automatic'
    s['IPHONEOS_DEPLOYMENT_TARGET'] = '17.0'
    s['SWIFT_VERSION'] = '5.0'
    s['TARGETED_DEVICE_FAMILY'] = '1,2'
    s['MARKETING_VERSION'] = '1.0'
    s['CURRENT_PROJECT_VERSION'] = '1'
    s['GENERATE_INFOPLIST_FILE'] = 'YES'
    s['INFOPLIST_KEY_CFBundleDisplayName'] = 'Kalbėk!'
    s['LD_RUNPATH_SEARCH_PATHS'] = ['$(inherited)', '@executable_path/Frameworks', '@executable_path/../../Frameworks']
    s['SKIP_INSTALL'] = 'YES'
    s['APPLICATION_EXTENSION_API_ONLY'] = 'YES'
  end
  # Įdėti plėtinį į programėlę
  embed = app.new_copy_files_build_phase('Embed Foundation Extensions')
  embed.symbol_dst_subfolder_spec = :plug_ins
  bf = embed.add_file_reference(widget.product_reference)
  bf.settings = { 'ATTRIBUTES' => ['RemoveHeadersOnCopy'] }
  app.add_dependency(widget)
end

# 3) Bendras Live Activity modelis (Shared/) abiem taikiniams + valdiklio asset katalogas
widget = project.targets.find { |t| t.name == 'KalbekWidget' }
shared = project.main_group.find_subpath('Shared', true)
shared.set_source_tree('<group>')
shared.set_path('Shared')
unless shared.files.any? { |f| f.path == 'LessonActivityAttributes.swift' }
  ref = shared.new_reference('LessonActivityAttributes.swift')
  app.source_build_phase.add_file_reference(ref)
  widget.source_build_phase.add_file_reference(ref)
end
wgroup = project.main_group.find_subpath('KalbekWidget', true)
unless wgroup.files.any? { |f| f.path == 'Assets.xcassets' }
  assets = wgroup.new_reference('Assets.xcassets')
  widget.resources_build_phase.add_file_reference(assets)
end
widget.build_configurations.each do |c|
  c.build_settings['ASSETCATALOG_COMPILER_GLOBAL_ACCENT_COLOR_NAME'] = nil
end

project.save
puts 'Xcode projektas atnaujintas: App + KalbekWidget (+ Live Activity, Shared, Assets)'
