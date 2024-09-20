function generateClassName(length) {
    let chars = 'abcdefghijklmnopqrstuvwxyz';
    let className = '';

    for (let i = 0; i < length; i++) {
        className += chars[Math.floor(Math.random() * chars.length)];
    }

    return className;
}


const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 633) {
        navbar.classList.add('backdrop-blur-xl');navbar.classList.add('bg-white');navbar.classList.add('bg-opacity-5');
    } else {
        navbar.classList.remove('backdrop-blur-xl');navbar.classList.remove('bg-white');navbar.classList.remove('bg-opacity-5');
    }
})
