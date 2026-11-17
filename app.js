const $ = (s)=>document.querySelector(s);
const $$ = (s)=>[...document.querySelectorAll(s)];
let selectedAsset = null;
const demoAssets = [
 {id:"bitcoin",name:"Bitcoin",symbol:"BTC",icon:"₿",signal:"SLEDOVAT",wait:true,reason:"Sledujeme vývoj ceny a sílu trendu. Před závěrem je nutné ověřit aktuální data a volatilitu.",risk:"Vysoká volatilita; cena může rychle klesnout.",score:"—"},
 {id:"ethereum",name:"Ethereum",symbol:"ETH",icon:"Ξ",signal:"VYČKAT",wait:true,reason:"Ukázkový scénář: čekáme na potvrzení trendu a širší situace na trhu.",risk:"Výrazné cenové výkyvy a technická rizika.",score:"—"},
 {id:"solana",name:"Solana",symbol:"SOL",icon:"◎",signal:"SLEDOVAT",wait:true,reason:"Ukázkový scénář: zajímavé aktivum k dalšímu sledování, nikoli pokyn k nákupu.",risk:"Vyšší volatilita a rizika blockchainového ekosystému.",score:"—"}
];
const tour = [
 ["Vítej v MARKET AI","Investování nemusí být složité. Aplikace ti vysvětlí trh běžnou řečí a pomůže ti zorientovat se."],
 ["AI Radar hledá souvislosti","Radar bude sledovat akcie, kryptoměny, ceny, trendy a důležité zprávy. Každý signál dostane vysvětlení."],
 ["Uvidíš důvody i rizika","Neukážeme jen zelené tlačítko. Uvidíš také, co se může pokazit a co by změnilo analytický názor."],
 ["Rozhodnutí zůstává na tobě","Před nákupem zkontroluješ aktivum, částku, poplatky a pokyny brokera. Nikdy neslibujeme zisk."]
];
let tourIndex=0;
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
function go(page){$$(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+page));$$(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.page===page));window.scrollTo({top:0,behavior:"smooth"})}
$$(".nav-item").forEach(b=>b.addEventListener("click",()=>go(b.dataset.page)));
$$("[data-goto]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.goto)));
function cardHTML(a,price,change){return `<article class="asset-card"><div class="asset-top"><div class="coin-id"><div class="coin-icon">${a.icon}</div><div><div class="coin-name">${a.name}</div><div class="coin-symbol">${a.symbol}</div></div></div><span class="signal ${a.wait?"wait":""}">${a.signal}</span></div><div class="price">${price||"—"}</div><div class="change ${change&&change.startsWith("-")?"down":""}">${change||"Cena se načítá"}</div><svg class="mini-chart" viewBox="0 0 300 40" preserveAspectRatio="none"><path d="M0 27 C25 24 35 31 60 20 S95 27 120 16 S155 24 180 14 S220 20 245 10 S275 18 300 6" fill="none" stroke="#6fa8ff" stroke-width="2.5" stroke-linecap="round"/></svg><div class="card-foot"><span>Analýza: ukázková</span><button class="text-link" data-asset="${a.id}">Proč sledovat? →</button></div></article>`}
function renderDemo(){const html=demoAssets.map(a=>cardHTML(a,"Demo režim","Nejde o živý signál")).join("");$("#radarCards").innerHTML=html;$("#allRadar").innerHTML=demoAssets.map(a=>`<article class="radar-row"><div><div class="coin-name">${a.icon} ${a.name} <span class="coin-symbol">${a.symbol}</span></div><p>${a.reason}</p><p><b>Riziko:</b> ${a.risk}</p></div><button class="text-link" data-asset="${a.id}">Detail →</button></article>`).join("");bindAssets()}
function bindAssets(){$$("[data-asset]").forEach(b=>b.addEventListener("click",()=>openAsset(b.dataset.

async function loadCrypto() {
  try {
    const response = await fetch(
      "https://xeeyyjbhawpyvpvmvmjr.supabase.co/functions/v1/market-data"
    );

    if (!response.ok) throw new Error("API error");

    const result = await response.json();

    if (!result.success) throw new Error("Market data unavailable");

    $("#cryptoStatus").textContent = "Živá data · CoinGecko";

    const assets = {
      bitcoin: result.assets.BTC,
      ethereum: result.assets.ETH,
      solana: result.assets.SOL
    };

    demoAssets.forEach(a => {
      const data = assets[a.id];
      if (!data || data.price === null) return;

      const price = new Intl.NumberFormat("cs-CZ", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 2
      }).format(data.price);

      const change = (data.change_24h * 100).toFixed(2);

      const card = document.querySelector(
        `#radarCards [data-asset="${a.id}"]`
      )?.closest(".asset-card");

      if (!card) return;

      card.querySelector(".price").textContent = price;

      const changeElement = card.querySelector(".change");

      if (changeElement) {
        changeElement.textContent =
          (change >= 0 ? "+" : "") + change + " % za 24 h";

        changeElement.classList.toggle("down", change < 0);
      }
    });

  } catch (error) {
    $("#cryptoStatus").textContent = "Data nedostupná";
    console.error("MARKET AI:", error);
  }
}

  try {
    const response = await fetch(
      "https://xeeyyjbhawpyvpvmvmjr.supabase.co/functions/v1/market-data"
    );

    if (!response.ok) throw new Error("API error");

    const result = await response.json();

    if (!result.success) throw new Error("Market data unavailable");

    $("#cryptoStatus").textContent = "Živá data · CoinGecko";

    const assets = {
      bitcoin: result.assets.BTC,
      ethereum: result.assets.ETH,
      solana: result.assets.SOL
    };

    demoAssets.forEach(a => {
      const data = assets[a.id];
      if (!data || data.price === null) return;

      const price = new Intl.NumberFormat("cs-CZ", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 2
      }).format(data.price);

      const change = (data.change_24h * 100).toFixed(2);

      const card = document.querySelector(
        `#radarCards [data-asset="${a.id}"]`
      )?.closest(".asset-card");

      if (!card) return;

      card.querySelector(".price").textContent = price;

      const changeElement = card.querySelector(".change");

      if (changeElement) {
        changeElement.textContent =
          (change >= 0 ? "+" : "") + change + " % za 24 h";

        changeElement.classList.toggle("down", change < 0);
      }
    });

  } catch (error) {
    $("#cryptoStatus").textContent = "Data nedostupná";
    console.error("MARKET AI:", error);
  }
}


function openAsset(id){selectedAsset=demoAssets.find(a=>a.id===id);if(!selectedAsset)return;$("#assetDetail").innerHTML=`<div class="coin-id"><div class="coin-icon">${selectedAsset.icon}</div><div><div class="coin-name">${selectedAsset.name}</div><div class="coin-symbol">${selectedAsset.symbol}</div></div></div><div class="price">${selectedAsset.signal}</div><p class="muted">${selectedAsset.reason}</p><div class="section-heading"><h3>Proč tento signál?</h3></div><p class="muted">${selectedAsset.reason}</p><div class="section-heading"><h3>Na jaké riziko dát pozor?</h3></div><p class="muted">${selectedAsset.risk}</p><p class="eyebrow" style="margin-top:18px">STAV: DEMONSTRAČNÍ ANALÝZA · NEJDE O DOPORUČENÍ</p>`;$("#assetModal").classList.add("show")}
$("#closeAsset").addEventListener("click",()=>$("#assetModal").classList.remove("show"));
$("#buyDemo").addEventListener("click",()=>{$("#assetModal").classList.remove("show");$("#orderAsset").textContent=selectedAsset?selectedAsset.name:"—";$("#orderModal").classList.add("show");updateAmount()});
$("#closeOrder").addEventListener("click",()=>$("#orderModal").classList.remove("show"));
function updateAmount(){const v=Math.max(0,Number($("#amount").value)||0);$("#orderAmount").textContent=v.toLocaleString("cs-CZ")+" €"}
$("#amount").addEventListener("input",updateAmount);
$("#confirmDemo").addEventListener("click",()=>{$("#orderModal").classList.remove("show");showToast("Ukázka dokončena. Žádný nákup nebyl proveden.")});
function renderTour(){const t=tour[tourIndex];$("#tourCount").textContent=`VÍTEJ V MARKET AI · ${tourIndex+1}/${tour.length}`;$("#tourTitle").textContent=t[0];$("#tourText").textContent=t[1];$("#tourProgress").style.width=((tourIndex+1)/tour.length*100)+"%";$("#prevTour").style.visibility=tourIndex===0?"hidden":"visible";$("#nextTour").textContent=tourIndex===tour.length-1?"Začít používat":"Pokračovat"}
function startTour(){tourIndex=0;renderTour();$("#tourModal").classList.add("show")}
$("#nextTour").addEventListener("click",()=>{if(tourIndex<tour.length-1){tourIndex++;renderTour()}else{$("#tourModal").classList.remove("show");localStorage.setItem("marketai_tour_seen","1")}});
$("#prevTour").addEventListener("click",()=>{if(tourIndex>0){tourIndex--;renderTour()}});
$("#skipTour").addEventListener("click",()=>{$("#tourModal").classList.remove("show");localStorage.setItem("marketai_tour_seen","1")});
$("#restartTour").addEventListener("click",startTour);
$("#helpBtn").addEventListener("click",()=>showToast("Otevři Učení pro jednoduchá vysvětlení."));
$("#todayLabel").textContent=new Intl.DateTimeFormat("cs-CZ",{weekday:"long",day:"numeric",month:"long"}).format(new Date()).toUpperCase();
renderDemo();loadCrypto();if(!localStorage.getItem("marketai_tour_seen"))startTour();
if("serviceWorker" in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
