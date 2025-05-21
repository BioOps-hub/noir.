// main.js
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Show loading screen for 2 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        mainContent.style.opacity = '1';
        
        // Remove loading screen after fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 2000);
});
