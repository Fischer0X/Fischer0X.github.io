// Initialize Lucide Icons
lucide.createIcons();

// --- Dark Mode Logic ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme
if (localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    if (htmlElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// --- Sticky Navbar ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('bg-white/80', 'dark:bg-slate-950/80', 'backdrop-blur-md', 'shadow-sm', 'py-2');
        nav.classList.remove('py-4');
    } else {
        nav.classList.remove('bg-white/80', 'dark:bg-slate-950/80', 'backdrop-blur-md', 'shadow-sm', 'py-2');
        nav.classList.add('py-4');
    }
});

// --- Scroll Reveal Animation ---
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => revealOnScroll.observe(el));

// --- Dynamic Projects (Easy to Modify) ---
const projects = [
    {
        name: "Security XSS Scanner",
        desc: "Automated vulnerability detection for modern web apps built with C++ and WinAPI.",
        tech: ["C++", "Cybersecurity", "Networking"],
        demo: "#",
        github: "#"
    },
    {
        name: "Chess Syria Platform",
        desc: "A custom chess engine and platform for the Syrian community with free analysis.",
        tech: ["React", "Node.js", "Socket.io"],
        demo: "#",
        github: "#"
    }
];

// يمكنك إضافة كود هنا لتوليد البطاقات تلقائياً إذا أردت