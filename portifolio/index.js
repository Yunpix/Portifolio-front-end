const botaoTema = document.querySelector('#theme-toggle');
const iconeTema = document.querySelector('#theme-icon');

botaoTema.addEventListener('click', () => {
    
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        iconeTema.textContent = "🌙"; 
    } else {
        iconeTema.textContent = "🌞"; 
    }
});