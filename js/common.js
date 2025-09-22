const header = document.getElementById("main-header");
const navLinks = document.getElementById("selected");
const navBtn = document.querySelector(".nav-btn");
const logo = document.getElementById("logo");
const logoimg = document.getElementById("logoimg");
const divider = document.getElementById("divider");
const menuToggleColor = document.getElementById("menuToggle");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // On scroll → white background
    header.classList.remove("bg-transparent");
    header.classList.add("bg-white", "shadow-md");

    logo.classList.remove("text-white");
    logo.classList.add("text-black");
    menuToggleColor.classList.remove("text-white");
    menuToggleColor.classList.add("text-black");

    divider.classList.remove("bg-white");
    divider.classList.add("bg-black");

    logoimg.setAttribute("src", "./assets/img/logoBlack.svg");

    navLinks.classList.add("text-black", "hover:text-blue-600");
    navLinks.classList.remove("text-white", "hover:text-blue-400");

    navBtn.classList.add(
      "border-black",
      "text-black",
      "hover:bg-black",
      "hover:text-white"
    );
    navBtn.classList.remove(
      "border-white",
      "text-white",
      "hover:bg-white",
      "hover:text-black"
    );
  } else {
    // Default → dark background
    header.classList.remove("bg-white", "shadow-md");
    header.classList.add("bg-transparent");

    logo.classList.remove("text-black");
    logo.classList.add("text-white");
    menuToggleColor.classList.remove("text-black");
    menuToggleColor.classList.add("text-white");

    divider.classList.remove("bg-black");
    divider.classList.add("bg-white");

    logoimg.setAttribute("src", "./assets/img/logowhite.svg");

    navLinks.classList.add("text-white", "hover:text-blue-400");
    navLinks.classList.remove("text-black", "hover:text-blue-600");

    navBtn.classList.add(
      "border-white",
      "text-white",
      "hover:bg-white",
      "hover:text-black"
    );
    navBtn.classList.remove(
      "border-black",
      "text-black",
      "hover:bg-black",
      "hover:text-white"
    );
  }
});


  const menuToggle = document.getElementById('menuToggle');
  const menuClose = document.getElementById('menuClose');
  const mobileMenu = document.getElementById('mobileMenu');
  const backdrop = document.getElementById('backdrop');

  // Open drawer
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.remove('-translate-x-full');
    backdrop.classList.remove('hidden');
  });

  // Close drawer
  const closeMenu = () => {
    mobileMenu.classList.add('-translate-x-full');
    backdrop.classList.add('hidden');
  };

  menuClose.addEventListener('click', closeMenu);

  // Close on outside click
  document.addEventListener('click', (event) => {
    const isInsideMenu = mobileMenu.contains(event.target) || menuToggle.contains(event.target);
    if (!isInsideMenu && !mobileMenu.classList.contains('-translate-x-full')) {
      closeMenu();
    }
  });