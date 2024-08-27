document.addEventListener('DOMContentLoaded', function() {
    // Get all the blog title buttons
    const blogTitles = document.querySelectorAll('.blog-title');

    blogTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            // Toggle the expanded class on the content div
            const content = this.nextElementSibling;
            content.classList.toggle('expanded');

            // Optionally, you could also toggle a class on the title button
            this.classList.toggle('active');
        });
    });
});
