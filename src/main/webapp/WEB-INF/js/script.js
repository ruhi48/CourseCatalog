// Basic Example: Get Course ID from URL (for course-details.html)
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('courseId');
    if (courseId) {
        console.log('Course ID:', courseId);
        // Dynamically load course details based on courseId
    }
});
