// script.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('toggle-button');
    const letter = document.querySelector('.letter');

    button.addEventListener('click', () => {
        if (letter.classList.contains('open')) {
            letter.classList.remove('open');
            button.textContent = 'Open Letter';
        } else {
            letter.classList.add('open');
            button.textContent = 'Close Letter';
        }
    });
});
