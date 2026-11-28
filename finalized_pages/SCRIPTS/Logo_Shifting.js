//https://www.w3schools.com/jsref/met_document_queryselector.asp
//https://www.tutorialpedia.org/blog/change-image-source-on-click-css-html/
//https://youtu.be/MY03bt_0JQI?si=T7D0ZdLRLhHKsUz4
const Toggle = document.querySelector('.input-mode');
const mavImage = document.getElementById('maverick_logo');

Toggle.addEventListener('change', () => {
    const Dark = Toggle.checked;
if (mavImage) {
    mavImage.src = Dark ? 'Logo/Fitness_Mavericks.png' : 'Logo/Fitness_Mavericks_Valge.png'
}
});