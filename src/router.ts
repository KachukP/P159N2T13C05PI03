import "./pages/welcome/welcome";
import "./pages/interactions/win";
import "./pages/interactions/lose";
import "./pages/interactions/tie";
import "./pages/welcome/round";

const routes: Record<string, string> = {
  "/": "welcome-page",
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