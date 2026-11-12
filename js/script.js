// N. Rajeshkumar Portfolio interactions
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".site-navbar");
  const backToTop = document.getElementById("backToTop");
  const year = document.getElementById("year");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("main section[id]");

  if (year) year.textContent = new Date().getFullYear();

  const handleScroll = () => {
    const scrolled = window.scrollY > 40;
    navbar?.classList.toggle("scrolled", scrolled);
    backToTop?.classList.toggle("visible", window.scrollY > 450);

    let current = "home";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 150) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  };
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Close the mobile navigation after a menu item is selected.
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const navCollapse = document.getElementById("mainNav");
      if (navCollapse?.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
      }
    });
  });

  // Front-end demo validation only. Connect a backend to actually receive messages.
  const contactForm = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  contactForm?.addEventListener("submit", event => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    feedback.textContent = "Thanks! The form is ready to connect to an email or backend service.";
    contactForm.reset();
  });
});
