console.log("Hello to all developers.");

let body = document.querySelector(".js-body");
let header = document.querySelector(".js-header");
let header__button = document.querySelector(".js-headerButton");
let header__myName = document.querySelector(".js-myName");
let header__themeButton = document.querySelector(".js-themeButton");
let header__themeName = document.querySelector(".js-themeName");
let section = document.querySelector(".js-section");
let section__interestingItem = document.querySelector(".js-interestingItem");
let linkUpAbout = document.querySelector(".js-linkAbout");
let linkUpCourses = document.querySelector(".js-linkCourses");
let linkUpFreeTime = document.querySelector(".js-linkFreeTime");
let table = document.querySelector(".js-table");
let table__header = document.querySelector(".js-tableHeader");
let table__cell2012 = document.querySelector(".js-tableCell2012");
let table__cell2013 = document.querySelector(".js-tableCell2013");
let table__cell2014 = document.querySelector(".js-tableCell2014");
let table__cell2023 = document.querySelector(".js-tableCell2023");
let table__row2012_1 = document.querySelector(".js-tableRow2012-1");
let table__row2012_2 = document.querySelector(".js-tableRow2012-2");
let table__row2012_3 = document.querySelector(".js-tableRow2012-3");
let table__row2012_4 = document.querySelector(".js-tableRow2012-4");
let table__row2012_5 = document.querySelector(".js-tableRow2012-5");
let table__row2013 = document.querySelector(".js-tableRow2013");
let table__row2014 = document.querySelector(".js-tableRow2014");
let table__row2023 = document.querySelector(".js-tableRow2023");
let sectionFreeTime = document.querySelector(".js-freeTime");

header__button.addEventListener("click", () => {
    header__myName.remove();
    header__button.remove();
});

header__themeButton.addEventListener("click", () => {
    body.classList.toggle("body--dark");
    header__themeName.innerText = body.classList.contains("body--dark") ? "Jasne" : "Ciemne";
    header.classList.toggle("header--dark");
    section.classList.toggle("section--dark");
    section__interestingItem.classList.toggle("section__interestingItem--dark");
    table.classList.toggle("table--dark");
    table__header.classList.toggle("table__header--dark");
    table__cell2012.classList.toggle("table__cell--headerDark");
    table__cell2013.classList.toggle("table__cell--headerDark");
    table__cell2014.classList.toggle("table__cell--headerDark");
    table__cell2023.classList.toggle("table__cell--headerDark");
    table__row2012_1.classList.toggle("table__row--dark");
    table__row2012_2.classList.toggle("table__row--dark");
    table__row2012_3.classList.toggle("table__row--dark");
    table__row2012_4.classList.toggle("table__row--dark");
    table__row2012_5.classList.toggle("table__row--dark");
    table__row2013.classList.toggle("table__row--dark");
    table__row2014.classList.toggle("table__row--dark");
    table__row2023.classList.toggle("table__row--dark");
    table__row.classList.toggle("table__row--dark");
    linkUpAbout.classList.toggle("linkUP--dark");
    linkUpCourses.classList.toggle("linkUP--dark");
    linkUpFreeTime.classList.toggle("linkUP--dark");
    sectionFreeTime.classList.toggle("section--dark");
});

