// Fixed Action Buttons Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create the WhatsApp button element
    const whatsappButton = document.createElement('a');
    whatsappButton.className = 'whatsapp-button';
    whatsappButton.href = 'https://wa.me/994501234567'; // Replace with your actual WhatsApp number
    whatsappButton.target = '_blank'; // Open in new tab
    whatsappButton.innerHTML = `
        <img src="assets/whatsapp-logo.png" alt="WhatsApp">
    `;
    
    // Create the back to top button element
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = `
        <svg class="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
    `;
    
    // Append the buttons to the body
    document.body.appendChild(whatsappButton);
    document.body.appendChild(backToTopButton);
    
    // Show/hide the back to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
        // Smooth scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
