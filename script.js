document.addEventListener('DOMContentLoaded', () => {
    // Плавний скрол до якорів
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Тут можна додати логіку для відкриття мобільного меню, якщо знадобиться
    // наприклад, перемикання класу .active для навігації
});