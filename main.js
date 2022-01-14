let spans = document.querySelectorAll(".skills .line span")
let section = document.querySelector(".skills")
let pspan =  document.querySelectorAll(".skills .progress span[data-widths]")
window.onscroll = function ()
{
    if (window.scrollY >= section.offsetTop + 50)
    {
        spans.forEach(element => {
            element.style.width = element.getAttribute("data-width")
        });
    }
    };