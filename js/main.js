window.addEventListener("load", function () {
    const preloader = document.getElementById("page-preloader");
    preloader.classList.add("preloader-fadeout");
    setTimeout(() => preloader.remove(), 600);
});

// mobile submenu
document.querySelectorAll(".submenu-toggle").forEach(btn => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();

        const submenu = this.parentElement.querySelector(".submenu");

        submenu.style.display =
            submenu.style.display === "block" ? "none" : "block";
    });
});