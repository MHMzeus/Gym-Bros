    const Toggle = document.querySelector('.input-mode');
    const mavImage = document.querySelector('.logo-ala img');

    Toggle.addEventListener('change', () => {
        const Dark = Toggle.checked;

    if (mavImage) {
        mavImage.src = Dark ? '/Almost_finalized_pages/Logo/Fitness_Mavericks.png' : '/Almost_finalized_pages/Logo/Fitness_Mavericks_Valge.png'

    }
    });