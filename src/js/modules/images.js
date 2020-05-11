const images= () => {
    const workSection = document.querySelector('.works');
    const imgPopup = document.createElement('div');
    const bigImage = document.createElement('img');

    imgPopup.classList.add('popup', 'd-none');
    imgPopup.appendChild(bigImage);
    workSection.appendChild(imgPopup);

    workSection.addEventListener('click', (event) => {
        event.preventDefault();
        const { target } = event;

        if (target && target.classList.contains('preview')) {
            imgPopup.classList.replace('d-none', 'd-flex');
            imgPopup.classList.add('justify-content-center', 'align-items-center');
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            bigImage.classList.add('big-image');
        }

        if (target && target.matches('div.popup')) {
            imgPopup.classList.replace('d-flex', 'd-none');
        }
    });
};

export default images;