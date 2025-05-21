// main.js
document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const searchInput = document.getElementById('search-input');

    // Show loading screen for 3 seconds
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        mainContent.style.opacity = '1';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000);
    }, 3000);

    // Focus search input when typing starts
    document.addEventListener('keypress', (e) => {
        if (e.target !== searchInput) {
            searchInput.focus();
        }
    });

    // Handle search
    const searchButton = document.querySelector('.search-button');
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            // Implement search functionality
            console.log('Searching for:', query);
        }
    });

    // Handle enter key in search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
});
