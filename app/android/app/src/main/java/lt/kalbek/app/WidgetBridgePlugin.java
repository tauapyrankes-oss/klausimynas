package lt.kalbek.app;

import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Context;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/** JS → valdiklis: išsaugo duomenis ir atnaujina visus „Kalbėk!“ valdiklius. */
@CapacitorPlugin(name = "WidgetBridge")
public class WidgetBridgePlugin extends Plugin {
    static final String PREFS = "kalbek_widget";

    @PluginMethod
    public void update(PluginCall call) {
        Context ctx = getContext();
        ctx.getSharedPreferences(PREFS, Context.MODE_PRIVATE)
            .edit()
            .putString("widget", call.getData().toString())
            .apply();
        AppWidgetManager mgr = AppWidgetManager.getInstance(ctx);
        int[] ids = mgr.getAppWidgetIds(new ComponentName(ctx, KalbekWidgetProvider.class));
        KalbekWidgetProvider.updateAll(ctx, mgr, ids);
        call.resolve();
    }
}
