let backgroundImage = document.querySelector(".parallax");
let parallax = document.querySelector(".parallax");
let tabs = document.querySelectorAll(".tab");

window.onload = function () 
{
    showTab('home');
};


//Refrencing StackOverflow
function showTab(tabId) 
{
    tabs.forEach(tab => 
    {
        tab.style.display = "none";
    });

    document.getElementById(tabId).style.display = "block";
}
// Gonna do parallax for extra points hehe:
// Refrencing freeCode.org:
window.addEventListener("scroll", () => 
{
    let value = window.scrollY;
//Yay i got it to line up
    parallax.style.transform = `translateY(${-value * 0.2}px)`;
});

//Change Image for each tab: