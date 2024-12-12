const currentUser = getFromLocalStorage('currentUser');
const ctaButton = document.getElementById('cta-button');

if (currentUser) {
    ctaButton.href = 'games.html';
} else {
    ctaButton.href = 'signup.html';
}