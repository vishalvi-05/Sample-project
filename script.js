// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Back to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if (document.documentElement.scrollTop > 200) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
};

function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

