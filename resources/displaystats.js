


function initApp() {




// premiere table = Wwinrate ----------------------------------------------------------------------------------
const tableWinrate = document.querySelectorAll("table")[0].querySelector("tbody");

// trier par pick  + prendre top 5
const topPick = [...stats]
.sort((a,b) => b.pick - a.pick)
.slice(0,10);

topPick.forEach(p => {

const tr = document.createElement("tr");

const color =
p.winrate > 50 ? "#1bbe15" :
p.winrate < 50 ? "#ed0707" :"white";

tr.innerHTML = `
<td><img src="../images/stocks/${capitalize(p.perso)}HeadSSBU.webp"></td>
<td style="color:${color};">${p.winrate}</td>
<td>${p.pick.toFixed(2)}</td>
`;

tableWinrate.appendChild(tr);
});


// deuxieme table = gsp peak ------------------------------------------------------------------ 
const tableGSP = document.querySelectorAll("table")[1].querySelector("tbody");



// trier par gsp en mode le goat en premier et le gros nullos en dernier
const sortedGSP = [...stats]
.filter(p => p.gsp > 0)
.sort((a,b) => b.gsp - a.gsp);
sortedGSP.forEach(p => {
const tr = document.createElement("tr");
tr.innerHTML = `
<td><img src="../images/stocks/${capitalize(p.perso)}HeadSSBU.webp"></td>
<td>${formatGSP(p.gsp)}</td>
`;

tableGSP.appendChild(tr);
});

function formatGSP(gsp){
return gsp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function capitalize(str){
return str.charAt(0).toUpperCase() + str.slice(1);
}


// CHARGER PROFIL ------------------------------------------------------------------------- CEST LA CE QUE TU CHERCHES !!!!!!!!!!!
// HEADER
document.title = `ZAAQ: ${profile.name}'s Profile`;
document.getElementById("main-img").src =
`../images/smash_characters/${(profile.main)}.png`;

document.getElementById("country-img").src =
`../images/assets_HUD/${profile.country}.png`;

document.getElementById("profile-text").innerHTML = `
<b>${profile.name}</b><br>
${profile.swcode}
`;


// ELITE BOX
document.getElementById("elite-box").innerHTML = `
<p><strong>Smash Elite</strong></p>
<p>
GSP 
<img src="../images/stocks/${capitalize(profile.main)}HeadSSBU.webp">
${profile.gspacc}
</p>
<p>TOP: ${profile.top} World</p>
`;


// UTILS
function capitalize(str){
return str.charAt(0).toUpperCase() + str.slice(1);
}














const bar = document.getElementById("winrate-bar");

// 1. trier par pick rate
const sorted = [...stats].sort((a,b) => b.pick - a.pick);

// 2. top 5
const top5 = sorted.slice(0,10);

// 3. somme des top 5
const totalTop5 = top5.reduce((sum, p) => sum + p.pick, 0);

// 4. calcul "autres"
const others = 100 - totalTop5;

// couleurs (tu peux custom)
const colors = [
"#eee136",
"#2b4a8b",
"#f9c5d0",
"#fa9e2d",
"#e44457",
"#e63820",
"#ff0000",
"#293b77",
"#f4efdd",
"#a9a977",
];

// 5. créer segments
top5.forEach((p, index) => {

const div = document.createElement("div");
div.className = "segment";
div.style.width = p.pick + "%";
div.style.backgroundColor = colors[index];

div.title = `${p.perso} (${p.pick.toFixed(2)}%)`;

// 🔥 IMAGE
const img = document.createElement("img");
img.src = `../images/stocks/${capitalize(p.perso)}HeadSSBU.webp`;

div.appendChild(img);

bar.appendChild(div);
});

// 6. segment "autres"
if (others > 0) {
const div = document.createElement("div");
div.className = "segment";
div.style.width = others + "%";
div.style.backgroundColor = "#636e72";
div.title = `Autres (${others.toFixed(2)}%)`;

// 🔥 TEXTE
const span = document.createElement("span");
span.textContent = "others";
span.className = "segment-text";

div.appendChild(span);

bar.appendChild(div);
}





//----------------------------------------------------------------

//            TRAITEMENT DE LHISTORIQUE DES TOURNOIS

//----------------------------------------------------------------


const container = document.getElementById("articles");

tournois.forEach(t => {

const article = document.createElement("div");
article.className = "article " + t.classe;

article.innerHTML = `
<img src="../images/assets_HUD/${t.place}.png">
<img src="../images/smash_characters/${t.perso}.png">
<span><h2 style="color:black;">${t.date}</h2></span>
`;

container.appendChild(article);

});}



// LISTE DES UTILISATEUR !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const container = document.getElementById("users-list");

users.forEach(u => {
    const link = document.createElement("a");
    link.href = `resources/users/user.html?user=${u.id}`;
    link.className = "user";

    link.innerHTML = `
        <img src="resources/images/smash_characters/${u.main}.png" alt="${u.main}">
        
        <div>
            <h2>${u.name}</h2>
            <p>${u.gspacc}</p>
        </div>

        <img src="resources/images/assets_HUD/${u.country}.png" alt="${u.country}" style="height:40px;">
    `;

    container.appendChild(link);
});










// POUR LA RECHERCHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE


const input = document.getElementById("search-input");
const btn = document.getElementById("search-btn");

function searchUser() {
    const value = input.value.trim().toLowerCase();

    if (!value) return;

    window.location.href = `resources/users/user.html?user=${value}`;
}

// clic bouton
btn.addEventListener("click", searchUser);

// touche entrée
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchUser();
    }
});




