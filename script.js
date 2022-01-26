// DOM Elements
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');

const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeed = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const closeModal = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postButton = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const closePostModal = document.querySelector('.modal-header i');
const modalPostButton = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const closeSidebar = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
/* */

// Main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
};

const goToFeedPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'none';
    newsFeed.style.display = 'block';
};

const opacityChanger = x => {
    modalPostButton.style.opacity = x;
    modalFooterPlus.style.opacity = x;
};


middleContent.addEventListener('click', e => {
    if(e.target.classList[1] === 'main-btn'){
        goToLoginPage();
    }
    //console.log(e.target.classList[1])
});

btnTop.addEventListener('click', e => {
    const inputUser = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    if(inputUser.value !== "" && inputPassword != ""){
        goToFeedPage();
    }else {
        goToLoginPage();
        loginModal.style.display = 'block'
    }
});

//login page

closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginUserPassword = document.querySelector('.login-password');

    if(loginUserInfo.value !== "" && loginUserPassword.value !== ""){
        goToFeedPage();
    }
    else{
        loginModal.style.display = 'block'
    }
});

//News feed page
// Post modal
postButton.addEventListener('click', () => {
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display');
});

closePostModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if(modalInput.value !== "") {
        modalInput.value = "";
        opacityChanger(0.57);
    }
});

modalInput.addEventListener('keypress', e => {
    if(e.target.value !== ""){
        opacityChanger(1);
    }else {
        opacityChanger(0.57);
    }
});

modalInput.addEventListener('blur', e => {
    if(e.target.value !== ""){
        opacityChanger(0.57);
    }
});

//sidebar
user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
});

//dark mode
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2')
const lightText = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');
toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    
    Array.from(darkElements1).map(darkElem1 => darkElem1.classList.toggle('dark-1'));
    Array.from(darkElements2).map(darkElem2 => darkElem2.classList.toggle('dark-2'));
    Array.from(lightText).map(lightT => lightT.classList.toggle('light'));
    Array.from(borders).map(border => border.classList.toggle('border-color'));
    
});
