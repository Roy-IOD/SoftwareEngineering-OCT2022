//Navbar code
window.addEventListener('DOMContentLoaded', event => {
     const navbarShrink = function () {
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




//API Fetch
fetch('https://api.spaceflightnewsapi.net/v3/reports?_limit=10')
    .then((response) => response.json())
    .then(json => {
    json.forEach(user => {
        const template = document.getElementById("news-template").content.cloneNode(true);
        template.querySelector('.news-title').innerText = user.title;
        template.querySelector('.news-content').innerText = user.summary;
        template.querySelector('.news-url').innerHTML = user.url
        template.querySelector('.news-url').href = user.url
        document.querySelector('#news-list').appendChild(template);
    });
});    

//Form Submit 
function sendMessage() {
    alert("Form Submitted");
};


//Comment Section 
const post= document.getElementById("post");
post.addEventListener("click", function(){
    let commentBoxValue= document.getElementById("comment-box").value;
 
    let li = document.createElement("li");
    let text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("comment-content").appendChild(li);
    document.getElementById("comment-box").value="";
    });



const input = document.getElementById("comment-box");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("post").click();
  }
});


