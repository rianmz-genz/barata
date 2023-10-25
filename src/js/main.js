function toggleMenu() {
    const menu = document.getElementById('menu-list')
    if (menu.classList.contains('menu-list')) {
        menu.classList.remove('menu-list')
        menu.classList.add('block')
    } else {
        menu.classList.add('menu-list')
        menu.classList.remove('block')
    }
}