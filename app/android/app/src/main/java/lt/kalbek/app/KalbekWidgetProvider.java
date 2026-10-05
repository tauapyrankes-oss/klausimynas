package lt.kalbek.app;

import android.app.PendingIntent;
import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.widget.RemoteViews;
import org.json.JSONObject;

/** Pagrindinio ekrano valdiklis: dienų serija, kita pamoka, kartojimui laukiantys žodžiai. */
public class KalbekWidgetProvider extends AppWidgetProvider {

    @Override
    public void onUpdate(Context ctx, AppWidgetManager mgr, int[] ids) {
        updateAll(ctx, mgr, ids);
    }

    static void updateAll(Context ctx, AppWidgetManager mgr, int[] ids) {
        JSONObject d;
        try {
            d = new JSONObject(ctx.getSharedPreferences(WidgetBridgePlugin.PREFS, Context.MODE_PRIVATE).getString("widget", "{}"));
        } catch (Exception e) {
            d = new JSONObject();
        }
        int streak = d.optInt("streak", 0);
        boolean done = d.optBoolean("doneToday", false);
        int words = d.optInt("wordsDue", 0);
        String next = d.optString("nextIcon", "👋") + " " + d.optString("nextTitle", "Pradėk pirmą pamoką");

        for (int id : ids) {
            RemoteViews v = new RemoteViews(ctx.getPackageName(), R.layout.kalbek_widget);
            v.setTextViewText(R.id.widget_streak, "🔥 " + streak);
            v.setTextViewText(R.id.widget_status, done ? "Šiandien jau mokeisi ✓" : "Ema laukia 🙂");
            v.setTextViewText(R.id.widget_next, next);
            v.setTextViewText(R.id.widget_words, words > 0 ? "🔁 " + words + " žodž. kartoti" : "");
            v.setOnClickPendingIntent(R.id.widget_root, open(ctx, "kalbek://lesson", 1));
            v.setOnClickPendingIntent(R.id.widget_words, open(ctx, "kalbek://sprint", 2));
            mgr.updateAppWidget(id, v);
        }
    }

    private static PendingIntent open(Context ctx, String url, int code) {
        Intent i = new Intent(Intent.ACTION_VIEW, Uri.parse(url), ctx, MainActivity.class);
        i.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        return PendingIntent.getActivity(ctx, code, i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    }
}
