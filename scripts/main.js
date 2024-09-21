addEventListener('DOMContentLoaded', main);

async function main(document, event) {
    
    setupNavBar();
    setupPortfolio();
    setupSkills();
    setupFooter();
    setupButtons();
    
    AOS.init({
        duration: 900, 
    });
    
    await setupLocalyzation();
    setupTypingAnimation();
}