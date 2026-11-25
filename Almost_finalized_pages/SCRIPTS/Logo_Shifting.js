//https://www.w3schools.com/jsref/met_document_queryselector.asp
//https://www.tutorialpedia.org/blog/change-image-source-on-click-css-html/
const Toggle = document.querySelector('.input-mode');
const mavImage = document.getElementById('maverick_logo');

Toggle.addEventListener('change', () => {
    const Dark = Toggle.checked;
if (mavImage) {
    mavImage.src = Dark ? '/Almost_finalized_pages/Logo/Fitness_Mavericks.png' : '/Almost_finalized_pages/Logo/Fitness_Mavericks_Valge.png'
}
});