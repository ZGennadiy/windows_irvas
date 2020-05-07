const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        content.forEach((item) => {
            item.style.display = 'none';
        });

        tabs.forEach((item) => item.classList.remove(activeClass));
    };

    const showTabContent = (i = 0) => {
        content[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', ({ target }) => {
        const classNameWithoutDot = tabSelector.replace(/\./, '');
        if (target &&
            target.classList.contains(classNameWithoutDot) ||
            target.parentNode.classList.contains(classNameWithoutDot)) {
            tabs.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

export default tabs;