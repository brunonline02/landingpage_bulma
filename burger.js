// Burger-Menü für die Bulma-Navbar. Diese Datei nicht verändern.
// Einbinden ganz unten im body:  <script src="burger.js"></script>
// Der Burger braucht  data-target="ID des Menüs",  das Menü braucht genau diese id.
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.navbar-burger').forEach((burger) => {
        burger.addEventListener('click', () => {
            const menue = document.getElementById(burger.dataset.target);
            burger.classList.toggle('is-active');
            menue.classList.toggle('is-active');
        });
    });
});
