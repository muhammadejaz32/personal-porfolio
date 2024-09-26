var tabslinks = document.getElementsByClassName('tab-links');
var tabscontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tabslinks){
        tablink.classList.remove('active-link');
    }
    for(tabscontent of tabscontents){
       tabscontent.classList.remove('active-tabs');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tabs");

}
var openmenu = document.getElementById('openment');
var closemenu = document.getElementById('closemenu')
var sidemenu  =document.getElementById('sidemenu')
var logo = document.getElementById('logo');
function opnedmenu(){
    sidemenu.style.display = 'block';
    closemenu.style.display = 'none';
    logo.style.display = 'block';

}

function closedmenu(){
    sidemenu.style.display = 'none';
    closemenu.style.display = 'block';
    logo.style.display = 'none';
}