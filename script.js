async function loadComponents() {
    try {
        // Fetch and insert the header
        const headerResponse = await fetch('../components/header.html');
        const headerHtml = await headerResponse.text();
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHtml;
            // Initialize mobile menu after header is loaded
                initMobileMenu();
        }

        // Fetch and insert the footer
        const footerResponse = await fetch('../components/footer.html');
        const footerHtml = await footerResponse.text();
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHtml;
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}


loadComponents();

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
}



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
