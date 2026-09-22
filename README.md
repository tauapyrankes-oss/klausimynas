# Klausimynas svetainei

Statinis klausimynas psichoterapeutės svetainei. Atsakymai siunčiami į Supabase lentelę
`klausimynas_atsakymai` (anoniminis raktas gali tik įrašyti, skaityti negali).
Šaltinis ir generavimas: `~/Desktop/claude/psichoterapija-svetaine/` (`build_deploy.py`).

`.github/workflows/keepalive.yml` kas 3 dienas pinguoja duomenų bazę, kad nemokamas
Supabase projektas neužmigtų.
