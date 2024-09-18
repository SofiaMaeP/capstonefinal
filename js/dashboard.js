// dashboard.js

document.addEventListener('DOMContentLoaded', function() {
    const contentBox = document.getElementById('content-box');
    const links = document.querySelectorAll('.links-container a');

    links.forEach(link => {
        // Skip the logout link
        if (link.getAttribute('data-content') !== 'logout') {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const contentFile = this.getAttribute('data-content') + '.html';
                
                fetch(contentFile)
                    .then(response => response.text())
                    .then(data => {
                        contentBox.innerHTML = data;
                    })
                    .catch(error => console.error('Error loading content:', error));
            });
        }
    });
});
