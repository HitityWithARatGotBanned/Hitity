function openGame(url) {
    var win = window.open("about:blank", "_blank");
    if (win) {
        var iframe = win.document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "100vw";
        iframe.style.height = "100vh";
        iframe.style.margin = "0";
        iframe.style.padding = "0";
        iframe.src = url;
        win.document.body.appendChild(iframe);
        win.document.body.style.margin = "0";
        win.document.body.style.padding = "0";
        win.document.body.style.overflow = "hidden";
    } else {
        alert("Please allow pop-ups for this site.");
    }
}

function toggleLeftNavbar() {
    document.body.classList.toggle('left-navbar-open');
}

function toggleDarkMode() {
    var bodyElement = document.body;
    bodyElement.classList.toggle("light-mode");
    for (let i = 1; i <= 30; i++) {
        var gameElement = document.getElementById(`game${i}`);
        if (gameElement) {
            gameElement.classList.toggle("light-mode");
        }
    }
    var sillyNavbarElement = document.getElementById("sillynavbar");
    if (sillyNavbarElement) {
        sillyNavbarElement.classList.toggle("light-mode");
    }

    var toggleLightDarkElement = document.getElementById("togglelightdark");
    if (toggleLightDarkElement) {
        toggleLightDarkElement.classList.toggle("light-mode");
    }
  
    var searchbarElement = document.getElementById("searchbar");
    if (searchbarElement) {
        searchbarElement.classList.toggle("light-mode");
    }
    
    var leftBoxElement = document.getElementById("leftnavbartoggle");
    if (leftBoxElement) {
        leftBoxElement.classList.toggle("light-mode");
    }

    var leftNavbarElement = document.getElementById("leftnavbar");
    if (leftNavbarElement) {
        leftNavbarElement.classList.toggle("light-mode");
    }
}
