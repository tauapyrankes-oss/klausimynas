# Klausimynas svetainei

Statinis klausimynas psichoterapeutės svetainei. Atsakymai siunčiami į Supabase lentelę
`klausimynas_atsakymai` (anoniminis raktas gali tik įrašyti, skaityti negali).
Šaltinis ir generavimas: `~/Desktop/claude/psichoterapija-svetaine/` (`build_deploy.py`).

`.github/workflows/keepalive.yml` kas 3 dienas pinguoja duomenų bazę, kad nemokamas
Supabase projektas neužmigtų.

---

# Kalbėk! – anglų kalba su AI mokytoja (`kalba/`)

Kalbėjimo programėlė, kurioje mokomasi nuo **A1+ iki B1**: 54 pamokos, balso mokytoja „Ema“
(Gemini Live). Kita pamoka atsirakina tik tada, kai AI patvirtina, kad ankstesnė išmokta.
Plačiau: [`kalba/AGENTS.md`](kalba/AGENTS.md), metodika – [`kalba/docs/RESEARCH.md`](kalba/docs/RESEARCH.md),
užduotys Codex'ui – [`kalba/codex/README.md`](kalba/codex/README.md).

## Kaip įsidiegti iPhone
1. GitHub → *Settings → Pages*: šaltinis `main` šaka, `/ (root)`. Programėlė bus adresu
   `https://<vartotojas>.github.io/klausimynas/kalba/`.
2. Atidaryk šį adresą **Safari** → *Bendrinti* → **„Pridėti prie pagrindinio ekrano“**.
3. Programėlėje: *Nustatymai* → įvesk nemokamą raktą iš https://aistudio.google.com/apikey →
   „Rasti modelius“ (automatiškai parinks naujausią Live modelį, pirmenybė 3.8) → leisk mikrofoną.

## Kūrėjams
```bash
cd kalba
python3 -m http.server 8000      # http://localhost:8000
node tools/validate.mjs          # kurso patikra
node tools/smoke-test.mjs        # naršyklės testas su imituotu Gemini Live
```
