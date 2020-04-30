//------------------NAV-------------------------------
let navLink = document.getElementById('navbarNav');
navLink.onclick = function (e) {
    console.log( document.querySelector('.active').className);
     document.querySelector(".active").className = "nav-item";
    console.log( document.querySelector('.nav-item').className);
     let parentLink = e.target.parentNode;
     parentLink.className = 'nav-item active';

}

// --------------Accordeons----------------------------

var accordionItem = document.getElementsByClassName('accordionItem');
var accordionHeading = document.getElementsByClassName('accordionItemHeading');
for (var i = 0, l = accordionHeading.length; i < l; i++) {
    accordionHeading[i].addEventListener('click', toggleItems);
}

function toggleItems(e) {
    var itemClass = this.parentNode.className;
    for (var i = 0, l = accordionItem.length; i < l; i++) {
        accordionItem[i].className = 'accordionItem closed';
    }
    if (itemClass == 'accordionItem closed') {
        this.parentNode.className = 'accordionItem openn';
    }
}

