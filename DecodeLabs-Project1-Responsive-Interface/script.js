// Functionality to toggle the responsive menu layout on mobile screens
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Simple interactivity action for the Blueprint CTA button
function showAlert() {
    alert("Welcome Architect! You are now viewing the 2025 Responsive Core Interface. Clean code has been successfully verified.");
}