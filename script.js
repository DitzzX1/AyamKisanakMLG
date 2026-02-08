/* FADE UP */
const faders = document.querySelectorAll(".fade-up");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });
faders.forEach(el => observer.observe(el));

/* JAM OPERASIONAL (07.00 - 22.00 SETIAP HARI) */
const openStatus = document.getElementById("openStatus");

const now = new Date();
const hour = now.getHours();

if (hour >= 7 && hour < 22) {
  openStatus.textContent = "🟢 Buka sekarang (07.00 - 22.00)";
  openStatus.className = "open-status open";
} else {
  openStatus.textContent = "🔴 Tutup • Buka jam 07.00";
  openStatus.className = "open-status closed";
}

/* NAVBAR ACTIVE */
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function setActiveNav() {
  let index = sections.length;

  while (--index && sections[index].getBoundingClientRect().top > 100) {}

  navLinks.forEach(link => link.classList.remove("active"));

  const id = sections[index].id;
  const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
  if (activeLink) activeLink.classList.add("active");
}

setActiveNav();
window.addEventListener("scroll", setActiveNav);


/* ORDER WHATSAPP AUTO */
document.querySelectorAll(".menu-list li").forEach(item => {
  item.addEventListener("click", () => {
    const menu = item.dataset.menu;
    const price = item.dataset.price;
    const text = `Halo Ayam Kisanak, saya mau pesan:\n- ${menu} (${price})`;
    window.open(`https://wa.me/6281252631983?text=${encodeURIComponent(text)}`);
  });
});
