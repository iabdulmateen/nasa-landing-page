function setHidden(el, hidden) {
  if (!el) return;
  el.hidden = hidden;
}

function setExpanded(btn, expanded) {
  if (!btn) return;
  btn.setAttribute("aria-expanded", expanded ? "true" : "false");
}

// Desktop: Explore dropdown
const exploreBtn = document.querySelector(".explore-btn");
const explorePanel = document.getElementById("explore-panel");

function closeExplore() {
  setHidden(explorePanel, true);
  setExpanded(exploreBtn, false);
}

function toggleExplore() {
  if (!explorePanel) return;
  const nextHidden = !explorePanel.hidden ? true : false;
  setHidden(explorePanel, nextHidden);
  setExpanded(exploreBtn, !nextHidden);
}

if (exploreBtn) {
  exploreBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleExplore();
  });
}

// Mobile: Menu open/close
const burgerBtn = document.querySelector(".menu-burger");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");

function openMobileMenu() {
  setHidden(mobileMenu, false);
  setExpanded(burgerBtn, true);
  document.body.classList.add("no-scroll");
}

function closeMobileMenu() {
  setHidden(mobileMenu, true);
  setExpanded(burgerBtn, false);
  document.body.classList.remove("no-scroll");
}

if (burgerBtn) burgerBtn.addEventListener("click", () => (mobileMenu?.hidden ? openMobileMenu() : closeMobileMenu()));
if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMobileMenu);
if (mobileMenu)
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) closeMobileMenu();
  });

// Global close behaviors
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeExplore();
    closeMobileMenu();
  }
});

document.addEventListener("click", (e) => {
  if (!explorePanel || explorePanel.hidden) return;
  const target = e.target;
  if (target instanceof Node && !explorePanel.contains(target) && !exploreBtn?.contains(target)) {
    closeExplore();
  }
});
