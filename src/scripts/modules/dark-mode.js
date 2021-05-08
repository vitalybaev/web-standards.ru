function toggleDarkMode() {
    window.applyColorScheme(
        !document.querySelector('html').classList.contains(window.classNameDark),
        true
    );
}

const colorSchemeButton = document.querySelector('.scheme-switcher__button');
colorSchemeButton.addEventListener('click', () => {
    toggleDarkMode();
});
