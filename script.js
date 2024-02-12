document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const mainImage = document.getElementById('mainImage');
    const title = document.querySelector('h1'); // Get the h1 element

    yesBtn.addEventListener('click', () => {
        mainImage.src = "your_new_gif.gif"; // Change this to your chosen GIF's URL
        title.textContent = "You've made the koala very happy!"; // Change the h1 text
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    });

    const moveButton = () => {
        const newX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const newY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
    };

    noBtn.addEventListener('mouseover', moveButton);
    noBtn.addEventListener('focus', moveButton); // For keyboard navigation
});
