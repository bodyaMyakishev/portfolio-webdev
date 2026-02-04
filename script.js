document.addEventListener("DOMContentLoaded", () => {
  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: "smooth"
        });
      }
    });
  });

  // Phone Mask/Validation (Simplified)
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      // Allow only numbers and typical validation format chars (simplified behavior)
       let value = e.target.value.replace(/[^\d+]/g, "");
       e.target.value = value;
    });
  }

  // Scroll Animations using IntersectionObserver
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach(el => {
    observer.observe(el);
  });

  // Form Submission Mock
  const form = document.getElementById("booking-form");
  const modal = document.getElementById("success-modal");
  const closeModalBtn = document.getElementById("close-modal");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop actual submission
      
      // Simulate API call/processing
      const btn = form.querySelector("button[type='submit']");
      const originalText = btn.innerText;
      btn.innerText = "Отправка...";
      btn.disabled = true;

      setTimeout(() => {
        // Show success modal
        if (modal) {
            modal.classList.add("active");
        }
        
        // Reset form
        form.reset();
        btn.innerText = originalText;
        btn.disabled = false;
      }, 1000);
    });
  }

  if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });
    
    // Close on click outside
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
  }
});
