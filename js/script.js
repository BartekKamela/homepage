{
    const welcome = () => {
        console.log("Hello to all developers.");
    };
    
    const removeMyName = () => {
        const header__myName = document.querySelector(".js-myName");
        const header__button = document.querySelector(".js-headerButton");
        header__myName.remove();
        header__button.remove();
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const header = document.querySelector(".js-header");
        const header__themeName = document.querySelector(".js-themeName");
        const section = document.querySelector(".js-section");
        const section__interestingItem = document.querySelector(".js-interestingItem");
        const linkUpAbout = document.querySelector(".js-linkAbout");
        const linkUpCourses = document.querySelector(".js-linkCourses");
        const linkUpFreeTime = document.querySelector(".js-linkFreeTime");
        const table = document.querySelector(".js-table");
        const table__header = document.querySelector(".js-tableHeader");
        const table__cell2012 = document.querySelector(".js-tableCell2012");
        const table__cell2013 = document.querySelector(".js-tableCell2013");
        const table__cell2014 = document.querySelector(".js-tableCell2014");
        const table__cell2023 = document.querySelector(".js-tableCell2023");
        const table__row2012_1 = document.querySelector(".js-tableRow2012-1");
        const table__row2012_2 = document.querySelector(".js-tableRow2012-2");
        const table__row2012_3 = document.querySelector(".js-tableRow2012-3");
        const table__row2012_4 = document.querySelector(".js-tableRow2012-4");
        const table__row2012_5 = document.querySelector(".js-tableRow2012-5");
        const table__row2013 = document.querySelector(".js-tableRow2013");
        const table__row2014 = document.querySelector(".js-tableRow2014");
        const table__row2023 = document.querySelector(".js-tableRow2023");
        const sectionFreeTime = document.querySelector(".js-freeTime");
        const sectionFreeTimeParagraph = document.querySelector(".js-sectionFreeTimeParagraph");

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
        linkUpAbout.classList.toggle("linkUP--dark");
        linkUpCourses.classList.toggle("linkUP--dark");
        linkUpFreeTime.classList.toggle("linkUP--dark");
        sectionFreeTime.classList.toggle("section--dark");
        sectionFreeTimeParagraph.classList.toggle("section--dark");
    };
    
    const init = () => {
        const header__themeButton = document.querySelector(".js-themeButton");
        const header__button = document.querySelector(".js-headerButton");
        header__themeButton.addEventListener("click", toggleBackground);
        header__button.addEventListener("click", removeMyName);
        welcome();
    };

    init();
}