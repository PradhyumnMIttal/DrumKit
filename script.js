function playsound(e)
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
}
function removeTransiton(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}
const keys = Array.from(document.querySelectorAll('.keys'))
keys.forEach((key) => key.addEventListener("transitionend", removeTransiton));
window.addEventListener('keydown', playsound);
