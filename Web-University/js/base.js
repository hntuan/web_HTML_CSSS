
// ----------tabs ----------
const tabs = document.querySelectorAll('.tab_item')
const panes = document.querySelectorAll('.tab_pane')

const tabActive = document.querySelector('.tab_item.active')
const line = document.querySelector('.tabs .line')

function activeLine(tabActive) {
    line.style.left = tabActive.offsetLeft + 'px'
    line.style.width = tabActive.offsetWidth + 'px'
}
activeLine(tabActive)

tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function(){
        activeLine(this)
        document.querySelector('.tab_pane.active').classList.remove('active')
        pane.classList.add('active')
        document.querySelector('.tab_item.active').classList.remove('active')
        this.classList.add('active')
    }
})

// -----------banner------------
var defaultWidth = document.querySelector(".banner").clientWidth;
var changeSlide = document.querySelector(".banner_slide");
var countSlide = document.querySelectorAll(".banner_slide img").length;
var change = 0;
var preBtn = function () {
    if (change != 0) {
        change -= defaultWidth;
        changeSlide.style.marginLeft = "-" + change + "px";
    } else {
        change = (countSlide - 1) * defaultWidth;
        changeSlide.style.marginLeft = "-" + change + "px";
    }
};
var nextBtn = function () {
    if (change < (countSlide - 1) * defaultWidth) {
        change += defaultWidth;
        changeSlide.style.marginLeft = "-" + change + "px";
    } else {
        change = 0;
        changeSlide.style.marginLeft = "-" + change + "px";
    }
};
setInterval(nextBtn, 4000);

// header scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector(".list-menu");
    header.classList.toggle("sticky",window.scrollY > 0); 
})