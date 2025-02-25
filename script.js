document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('centerButton');
    const { animate } = window.Motion;
    
    button.addEventListener('click', () => {
        animate("#centerButton", { rotate: 360 }, { duration: 1 });
    });
}); 