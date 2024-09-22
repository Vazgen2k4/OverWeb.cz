addEventListener('DOMContentLoaded', main);

async function main(document, event) {
    
    setupNavBar();
    setupPortfolio();
    setupSkills();
    setupFooter();
    setupButtons();
    setupSound();
    
    AOS.init({
        duration: 900, 
    });
    
    await setupLocalyzation();
    setupTypingAnimation();
    
    // Debug mode (mail refresh)
    (()=>{
       document.querySelector('.footer__form-input[name="mail_form"]').value = ''; 
    })();
}