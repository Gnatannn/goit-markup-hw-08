(() => {
    const refs = {
        openMenuBtn: document.querySelector(".menu-open-button"),
        closeMenuBtn: document.querySelector(".menu-close-button"),
        menu: document.querySelector(".mob-menu"),
        body: document.querySelector(".body"),
        // moboverlay: document.querySelector(".mob-overlay"),
    };
    
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
    
    function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("no-scroll");
    // refs.moboverlay.classList.toggle("is-opening");
  }
})();