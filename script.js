document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('centerButton');
    
    button.addEventListener('click', () => {
        // Use the same pattern as in your example
        const { animate } = window.Motion;
        
        // Reset any previous transforms to ensure animation always runs
        button.style.transform = 'none';
        
        // Force a reflow
        void button.offsetWidth;
        
        // Animate with the same syntax as your example
        animate("#centerButton", { rotate: 360 }, { duration: 1 });
        
        console.log("Animation triggered");
    });
}); 