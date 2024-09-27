// script.js
document.addEventListener('DOMContentLoaded', () => {
    const formElements = document.querySelectorAll('.input-group, button');
    formElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, index * 100);
         });
     });
