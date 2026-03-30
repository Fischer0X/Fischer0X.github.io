// Initialize Lucide Icons
lucide.createIcons();

// --- Dark Mode Logic ---
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

if (localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlElement.classList.add('dark');
}

themeToggle.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
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

// --- Scroll Reveal Animation (Fixed) ---
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // بمجرد أن يظهر العنصر، نتوقف عن مراقبته لتحسين الأداء
            revealOnScroll.unobserve(entry.target);
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px" // يعطي مرونة بسيطة في توقيت الظهور
});

revealElements.forEach(el => revealOnScroll.observe(el));

// --- Fix: إظهار العناصر الموجودة في أعلى الصفحة فوراً عند التحميل ---
window.addEventListener('load', () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // إذا كان العنصر داخل حدود الشاشة عند التحميل، أضف كلاس active فوراً
        if (rect.top < window.innerHeight) {
            el.classList.add('active');
        }
    });
});
    
// --- Dynamic Projects Data ---
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