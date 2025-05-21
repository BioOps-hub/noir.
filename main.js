// main.js
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Show loading screen for 3 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        mainContent.style.opacity = '1';
        
        // Remove loading screen after fade out
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 3000);

    // Navigation highlight effect
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textShadow = `0 0 10px ${getComputedStyle(document.documentElement)
                .getPropertyValue('--purple-accent')}`;
        });
        link.addEventListener('mouseleave', () => {
            link.style.textShadow = 'none';
        });
    });
});
