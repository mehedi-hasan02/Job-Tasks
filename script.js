const dailyQus = document.querySelector('.daily-qus');
if (dailyQus) {
    dailyQus.addEventListener('click', () => {
        window.location.href = 'blog.html';
    });
}

const back = document.querySelector('#back-btn');
if (back) {
    back.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

