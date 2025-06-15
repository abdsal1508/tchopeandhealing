// Appointment Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to your server here
            console.log('Appointment form submitted');
            
            // Close the appointment modal
            const appointmentModalEl = document.getElementById('appointmentModal');
            const appointmentModal = bootstrap.Modal.getInstance(appointmentModalEl);

            appointmentModal.hide();
            
            // Show success modal
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            
            // Reset the form
            this.reset();
        });
    }

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real application, you would send the form data to your server here
            console.log('Contact form submitted');
            
            // Show success message
            const formContainer = document.getElementById('formContainer');
            const successMessage = document.getElementById('successMessage');
            
            if (formContainer && successMessage) {
                formContainer.classList.add('d-none');
                successMessage.classList.remove('d-none');
            }
        });
    }

    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current nav item based on page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Newsletter subscription form
function subscribeNewsletter(form) {
    event.preventDefault();
    
    // In a real application, you would send the form data to your server here
    console.log('Newsletter subscription submitted');
    
    // Show success message
    const emailInput = form.querySelector('input[type="email"]');
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (emailInput && submitButton) {
        emailInput.disabled = true;
        submitButton.disabled = true;
        submitButton.innerHTML = 'Subscribed!';
        submitButton.classList.remove('btn-primary');
        submitButton.classList.add('btn-success');
    }
}

// Filter blog posts by category
function filterBlogPosts(category) {
    const blogPosts = document.querySelectorAll('.blog-post');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active filter button
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-category') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Show/hide blog posts based on category
    blogPosts.forEach(post => {
        if (category === 'all' || post.getAttribute('data-category') === category) {
            post.style.display = 'block';
        } else {
            post.style.display = 'none';
        }
    });
}
