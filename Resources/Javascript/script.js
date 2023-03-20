//setting up variables to select DOM elements

let webBackground = document.getElementById('body');
let button = document.getElementById('button');
let projectsSection = document.querySelector('#projects');
let skillsSection = document.querySelector('#skills');
let menuIcon = document.querySelector('#menuIcon');
let navMenu = document.querySelector('#navMenu');
let navMenuCalled = 0;


//------------------------Functions---------------------------//

//-------Operate the Nav Menu-------//
const operateNav = () => {
    navMenuCalled++; //increment navMenuCalled when menu button clicked
    if (navMenuCalled % 2 === 0){ //if navMenuCalled is even, open the menu. Otherwise close the menu
        return navMenu.style.width = '0%'; //side-bar dissappears when menu button clicked
    } else {
        return navMenu.style.width = '26%'; //side-bar appears when menu button clicked
    }
}

const hideNav = () => {
    menuIcon.style.display = 'none';
}

const bristolify = () => {
    wipeColor();
    changeProjectSkillsSectionSize();
    setTimeout(setProjectsImage, 3000);
}

//Wipe the color from the site
const wipeColor = () => {
    webBackground.style.transitionDuration = '2.5s';
    webBackground.style.backgroundColor = 'white';
}

//Change the project/skills section proportions
const changeProjectSkillsSectionSize = () => {
    projectsSection.style.transitionDuration = '2.5s';
    projectsSection.style.flex = '6';
}

//set the background image for projects section
const setProjectsImage = () => {
    projectsSection.style.backgroundImage = "url('Resources/Images/CliftonSusBridge.jpeg')";
}

//----------------------Event Handlers------------------------//

menuIcon.addEventListener("click", operateNav);
button.addEventListener("click", bristolify);