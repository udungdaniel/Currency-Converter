// --- HAMBURGER MENU TOGGLE ---
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle menu open/close
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
});

// Optional: Dropdown toggle on mobile
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle("open");
        }
    });
});
