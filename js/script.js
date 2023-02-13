{
    const welcome = () => {
        console.log("Hello to all developers.");
    };
    
    const removeMyName = () => {
        const myName = document.querySelector(".js-myName");
        const removeButton = document.querySelector(".js-headerButton");
        myName.remove();
        removeButton.remove();
    };

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const header = document.querySelector(".js-header");
        const themeName = document.querySelector(".js-themeName");
        const section = document.querySelector(".js-section");
        const interestingItem = document.querySelector(".js-interestingItem");
        const linkUpAbout = document.querySelector(".js-linkAbout");
        const linkUpCourses = document.querySelector(".js-linkCourses");
        const linkUpFreeTime = document.querySelector(".js-linkFreeTime");
        const table = document.querySelector(".js-table");
        const tableHeader = document.querySelector(".js-tableHeader");
        const tableCell2012 = document.querySelector(".js-tableCell2012");
        const tableCell2013 = document.querySelector(".js-tableCell2013");
        const tableCell2014 = document.querySelector(".js-tableCell2014");
        const tableCell2023 = document.querySelector(".js-tableCell2023");
        const tableRow2012n1 = document.querySelector(".js-tableRow2012-1");
        const tableRow2012n2 = document.querySelector(".js-tableRow2012-2");
        const tableRow2012n3 = document.querySelector(".js-tableRow2012-3");
        const tableRow2012n4 = document.querySelector(".js-tableRow2012-4");
        const tableRow2012n5 = document.querySelector(".js-tableRow2012-5");
        const tableRow2013 = document.querySelector(".js-tableRow2013");
        const tableRow2014 = document.querySelector(".js-tableRow2014");
        const tableRow2023 = document.querySelector(".js-tableRow2023");
        const sectionFreeTime = document.querySelector(".js-freeTime");
        const sectionFreeTimeParagraph = document.querySelector(".js-sectionFreeTimeParagraph");

        body.classList.toggle("body--dark");
        themeName.innerText = body.classList.contains("body--dark") ? "Jasne" : "Ciemne";
        header.classList.toggle("header--dark");
        section.classList.toggle("section--dark");
        interestingItem.classList.toggle("section__interestingItem--dark");
        table.classList.toggle("table--dark");
        tableHeader.classList.toggle("table__header--dark");
        tableCell2012.classList.toggle("table__cell--headerDark");
        tableCell2013.classList.toggle("table__cell--headerDark");
        tableCell2014.classList.toggle("table__cell--headerDark");
        tableCell2023.classList.toggle("table__cell--headerDark");
        tableRow2012n1.classList.toggle("table__row--dark");
        tableRow2012n2.classList.toggle("table__row--dark");
        tableRow2012n3.classList.toggle("table__row--dark");
        tableRow2012n4.classList.toggle("table__row--dark");
        tableRow2012n5.classList.toggle("table__row--dark");
        tableRow2013.classList.toggle("table__row--dark");
        tableRow2014.classList.toggle("table__row--dark");
        tableRow2023.classList.toggle("table__row--dark");
        linkUpAbout.classList.toggle("linkUP--dark");
        linkUpCourses.classList.toggle("linkUP--dark");
        linkUpFreeTime.classList.toggle("linkUP--dark");
        sectionFreeTime.classList.toggle("section--dark");
        sectionFreeTimeParagraph.classList.toggle("section--dark");
    };
    
    const init = () => {
        const themeButton = document.querySelector(".js-themeButton");
        const removeButton = document.querySelector(".js-headerButton");
        themeButton.addEventListener("click", toggleBackground);
        removeButton.addEventListener("click", removeMyName);
        welcome();
    };

    init();
}