const divContainer = document.querySelector('box-flag');
const govnina = document.getElementById("sound")

divContainer.addEventListener('mouseover', e => {
if (e.target.classList.contains('line')) {
govnina.play()
}
});

divContainer.addEventListener('mouseout', e => {
if (e.target.classList.contains('line')) {
govnina.pause()
}
}); 