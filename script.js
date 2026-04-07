const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

faders.forEach(fade => observer.observe(fade));

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        // Close all other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});

// Typing Animation Enhancement
const typingText = document.querySelector('.typing-text');
const cursor = document.querySelector('.cursor');

if (typingText) {
    // Restart typing animation on hover
    typingText.parentElement.addEventListener('mouseenter', () => {
        typingText.style.animation = 'none';
        cursor.style.animation = 'none';
        
        setTimeout(() => {
            typingText.style.animation = 'typing 3.5s steps(7, end) forwards, blink 0.75s step-end infinite';
            cursor.style.animation = 'cursorBlink 1s step-end infinite';
        }, 10);
    });
}

// Design Process Scroll Animations
const processSteps = document.querySelectorAll('.process-step');

const processObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const step = entry.target;
            const stepNumber = parseInt(step.getAttribute('data-step'));
            
            // Sequential reveal with delay based on step number
            setTimeout(() => {
                step.classList.add('visible');
            }, (stepNumber - 1) * 200);
            
            // Unobserve after revealing to prevent re-animation
            processObserver.unobserve(step);
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
});

processSteps.forEach(step => {
    processObserver.observe(step);
});
