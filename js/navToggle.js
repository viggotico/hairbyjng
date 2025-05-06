// definering variabler til de forskellige html elementer
const navElement = document.getElementById('nav');
const navLogoMobile = document.getElementById('nav-logo-mobile');
const navToggleElement = document.getElementById('nav-toggle');

// spørgsmålstegnet "?" fx i navElement?.classList bliver brugr til at tjekke om variablen er valid (om den er undefined/null eller ej)

// observerer når man klikker på navToggleElement html elementen
navToggleElement?.addEventListener('click', (e) => {
    // skifter class navnet "nav-active" mellem aktiv og ikke aktiv
    navElement?.classList.toggle('nav-active');
    navLogoMobile?.classList.toggle('nav-logo-mobile-hidden');
    navToggleElement?.classList.toggle('nav-toggle-invert');
    for (let i = 0; i < navToggleElement?.children.length; i++) {
        const element = navToggleElement?.children[i];
        element?.classList.toggle('nav-active');
    }

    e?.preventDefault();
});

// definering variabler til de forskellige html elementer
const navSubMenuLinks = document.getElementsByClassName('submenu-link');
const navSubMenus = document.getElementsByClassName('submenu');

// for loop som iterere alle navSubMenuLinks elementer
for (let i = 0; i < navSubMenuLinks?.length; i++) {
    // definerer variabler til de to forskellige submenu elementer
    const subMenuItem = navSubMenuLinks?.[i];
    const subMenu = navSubMenus?.[i];
    subMenuItem?.addEventListener('click', (e) => {
        // tjekker om siden er desktop media query
        if (window.innerWidth > 768) return;
        // skifter class navnet "nav-active" mellem aktiv og ikke aktiv
        subMenu?.classList.toggle('nav-active');
        subMenu?.children[0].classList.toggle('nav-active');
        e?.preventDefault();
    });
    // logik til når man trykker på undermenuens hovedpunkt
    subMenu?.addEventListener('click', (e) => {
        // tjekker om siden er mobile media query
        if (window.innerWidth <= 768) return;
        const children = e.target?.children;
        const isOnlyHoveredOnFirstItem = Array.from(children).some(el => {
            return !el.classList.contains('nav-active');
        });
        if (!isOnlyHoveredOnFirstItem) return;
        if (!e.target) return;
        const linkElement = e.target.parentElement?.firstElementChild;
        if (linkElement) linkElement.click();

        e?.preventDefault();
    });
}
