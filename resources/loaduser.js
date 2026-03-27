// récupérer ?user=xxx dans l'URL
const params = new URLSearchParams(window.location.search);
const user = params.get("user");

// sécurité
if (!user) {
    document.body.innerHTML = "Error ! Uh... what exactly are you looking for ? because... bon connard y'a pas d'id là comment je suis censé trouver une page ? t'as surement recherché un truc vide t'es sacrément con";
    throw new Error("No user specified");
}

// créer script dynamiquement





const script = document.createElement("script");
script.src = `${user}/data.js`;

script.onload = () => {
    if (typeof profile === "undefined") {
        document.body.innerHTML = "Error ! To be honest, I don't even know how you caused that; it's the old error checking system, so you're not supposed to encounter it... if that's the case, I can't help you because I don't even know how you got there... but congratulations, I suppose!";
        return;
    }

    initApp(); 
};

script.onerror = () => {
    document.body.innerHTML = "Error ! This profile does not exist. This happens if you searched for a skilled Sonic player.";
};

document.body.appendChild(script);