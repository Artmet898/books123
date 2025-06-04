alert ('Поздравляю - ты здоров!')
// Функция для показа промокода
function showPromo() {
    alert("Ваш промокод: HEALTH2023");
}

// Переключение темы (добавить в header)
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.createElement('button');
    themeBtn.textContent = '🌙 Темная тема';
    themeBtn.id = 'theme-toggle';
    document.querySelector('header').appendChild(themeBtn);
    
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeBtn.textContent = document.body.classList.contains('dark-theme') 
            ? '☀️ Светлая тема' 
            : '🌙 Темная тема';
    });
});