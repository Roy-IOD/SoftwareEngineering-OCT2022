window.addEventListener('DOMContentLoaded', event => {


    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };


    navbarShrink();

    document.addEventListener('scroll', navbarShrink);


    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

 
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


fetch('https://api.spaceflightnewsapi.net/v3/reports?_limit=5')
    .then((response) => response.json())
    .then(json => {
    json.forEach(user => {
        const template = document.getElementById("news-template").content.cloneNode(true);
        template.querySelector('.news-title').innerText = user.title;
        template.querySelector('.news-content').innerText = user.summary;
        document.querySelector('#news-list').appendChild(template);
    });
});    


function sendMessage() {
    alert("Form Submitted");
};