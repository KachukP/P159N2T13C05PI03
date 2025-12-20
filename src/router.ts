import "./pages/scenes/welcome";
import "./pages/scenes/round";
import "./pages/interactions/play";
import "./pages/interactions/win";
import "./pages/interactions/lose";
import "./pages/interactions/tie";

const routes: Record<string, string> = {
    "/": "welcome-page",
    "/play": "play-page",
    "/round": "round-page",
    "/win": "win-page",
    "/lose": "lose-page",
    "/tie": "tie-page",
};

export function goTo(path: string) {
    history.pushState({}, "", path);
    renderRoute(path);
};

function renderRoute(path: string) {
    const app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = "";
    const tag = routes[path];
    if(tag){
        app.appendChild(document.createElement(tag));
    };
};

export function initRouter() {
    renderRoute(location.pathname);
    window.onpopstate = () => renderRoute(location.pathname);
};