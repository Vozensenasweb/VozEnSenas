        // Page Navigation Logic
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(p => p.classList.remove('active'));
            
            // Show target page
            document.getElementById(pageId).classList.add('active');
            
            // Update Nav Links
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(l => l.classList.remove('active'));
            const activeLink = document.getElementById('link-' + pageId);
            if(activeLink) activeLink.classList.add('active');

            // Scroll to top
            window.scrollTo(0,0);
        }

        // Modal Logic
        function openModal(modalId) {
            document.getElementById(modalId).style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }

        function closeModal(modalId) {
            document.getElementById(modalId).style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        function closeModalOnBackdrop(event) {
            if (event.target.classList.contains('modal-backdrop')) {
                event.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        }

        // Dark Mode Logic
        function toggleDarkMode() {
            const html = document.documentElement;
            const icon = document.getElementById('dark-mode-icon');
            
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                icon.innerText = 'dark_mode';
            } else {
                html.classList.add('dark');
                icon.innerText = 'light_mode';
            }
        }

        // Initialize first page
        window.onload = () => {
            showPage('home');
        };