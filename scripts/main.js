addEventListener('DOMContentLoaded', main);

function main(document, event) {
    setupSound();
    setupNavBar();
    setupPortfolio();
    setupSkills();
    setupFooter();
    setupButtons();
    
    AOS.init({});
}