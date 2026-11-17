# MARKET AI – první kompletní návrh aplikace

Toto je samostatná vývojová verze. Původní funkční web `market-ai-app` zůstává nedotčený.

## Co tato verze obsahuje
- Úvodní průvodce pro začátečníka (zobrazí se při prvním otevření).
- Přehled, AI Radar, Portfolio, Učení a Účet.
- Responzivní tmavé rozhraní vhodné pro iPhone.
- Pokus o načtení aktuálních cen BTC, ETH a SOL v EUR přes veřejné CoinGecko API.
- Detail aktiva, vysvětlení ukázkového signálu a ukázkový nákupní formulář.
- PWA manifest a jednoduchý service worker.

## Důležitá omezení
Toto je frontendový prototyp, nikoli produkční investiční služba.
- Radar a signály jsou demonstrační. Nejde o živou AI analýzu ani investiční doporučení.
- Akciová data nejsou připojena.
- Nákupní formulář nic nekupuje a neodesílá pokyny.
- Portfolio, účty a notifikace nejsou připojené.
- Veřejné API může mít limity a jeho podmínky je nutné prověřit před komerčním provozem.

## Co je potřeba pro skutečné nákupy v aplikaci
1. Vybrat brokera, který poskytuje oficiální API pro klientské obchodování a podporuje požadované země.
2. Uzavřít smlouvu a splnit požadavky brokera, KYC/AML a případně regulatorní povinnosti.
3. Vybudovat backend; tajné klíče nesmí být v `app.js` ani v prohlížeči.
4. Implementovat autentizaci, bezpečné ukládání tokenů, potvrzení objednávek, limity a auditní log.
5. Připojit licencovaný zdroj cen a zpráv a analytický systém s dohledatelnými vstupy, časem aktualizace a řízením rizika.
6. Právně posoudit, zda personalizované signály a automatizace představují investiční poradenství nebo jinou regulovanou službu v cílových zemích.

## Nasazení
Nahraj obsah ZIP do kořenové složky samostatného veřejného GitHub repozitáře a v Settings → Pages nastav:
- Source: Deploy from a branch
- Branch: main
- Folder: /(root)

Nepřepisuj zatím původní repozitář `market-ai-app`.
