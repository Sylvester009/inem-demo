const menuBtn = document.getElementById('menu_btn');
        const navLinks = document.getElementById('nav_links');
        
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav_items a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
        
        // Scroll to Top Button
        const toTop = document.getElementById('to-top');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                toTop.classList.add('show');
            } else {
                toTop.classList.remove('show');
            }
        });
        
        toTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });