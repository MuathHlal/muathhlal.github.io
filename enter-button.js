document.addEventListener('DOMContentLoaded', function() {
    const enterBtn = document.getElementById('enter-btn');
    
    // Add click event to button
    enterBtn.addEventListener('click', function() {
        // Add fade out animation
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        // Wait for fade out to complete before redirecting
        setTimeout(function() {
            window.location.href = 'store.html';
        }, 500); // Matches the 0.5s transition
    });
    
    // Fade in button when page loads
    setTimeout(function() {
        enterBtn.style.opacity = '1';
        enterBtn.style.transform = 'translateY(0)';
    }, 300);
});