AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(26, 35, 126, 0.95)';
    } else {
        nav.style.background = 'var(--primary-color)';
    }
});

AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50
    });

    // Animation smooth pour le scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animation de la navbar
    const nav = document.querySelector('.nav');
    const headerHeight = document.querySelector('.header-content').offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerHeight - 100) {
            nav.style.background = 'rgba(26, 35, 126, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            nav.style.background = 'transparent';
            nav.style.boxShadow = 'none';
        }
    });

    // Animation des skills au scroll
    const animateSkills = () => {
        const skills = document.querySelectorAll('.tech-item');
        skills.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            const skillBottom = skill.getBoundingClientRect().bottom;
            if (skillTop < window.innerHeight && skillBottom > 0) {
                skill.style.transform = 'translateY(0)';
                skill.style.opacity = '1';
            }
        });
    };

    window.addEventListener('scroll', animateSkills);
    document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.realization-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            // Désactive tous les boutons et active celui cliqué
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Affiche les cartes correspondant au filtre sélectionné
            cards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
function setProgress(circle, percent) {
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}

document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle-progress-path');
    const percentages = [90, 85, 80, 75];

    circles.forEach((circle, index) => {
        setTimeout(() => {
            setProgress(circle, percentages[index]);
        }, 300 * index);
    });
});