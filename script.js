// DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initializeLoadingScreen();
  initializeNavigation();
  initializeHeroAnimations();
  initializeScrollAnimations();
  initializeProgramFilters();
  initializePricingToggle();
  initializeContactForm();
  initializeModal();
  initializeBackToTop();
  initializeCounters();
  initializeSmoothScrolling();
});

// Loading Screen
function initializeLoadingScreen() {
  const loadingScreen = document.getElementById("loadingScreen");

  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.style.display = "none";
      }, 500);
    }, 1500);
  });
}

// Navigation
function initializeNavigation() {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
}

// Hero Animations
function initializeHeroAnimations() {
  const startJourneyBtn = document.getElementById("startJourneyBtn");
  const watchVideoBtn = document.getElementById("watchVideoBtn");

  startJourneyBtn.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({
      behavior: "smooth",
    });
  });

  watchVideoBtn.addEventListener("click", () => {
    openModal("https://www.youtube.com/embed/dQw4w9WgXcQ");
  });
}

// Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll(
    ".feature-card, .program-card, .trainer-card, .pricing-card"
  );
  animateElements.forEach((el) => {
    observer.observe(el);
  });

  // Add fade-in class to elements
  const fadeElements = document.querySelectorAll(
    ".section-header, .contact-item"
  );
  fadeElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
}

// Program Filters
function initializeProgramFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const programCards = document.querySelectorAll(".program-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Filter programs
      programCards.forEach((card) => {
        const category = card.getAttribute("data-category");

        if (filter === "all" || category === filter) {
          card.classList.remove("hidden");
          setTimeout(() => {
            card.style.display = "block";
          }, 10);
        } else {
          card.classList.add("hidden");
          setTimeout(() => {
            if (card.classList.contains("hidden")) {
              card.style.display = "none";
            }
          }, 300);
        }
      });
    });
  });
}

// Pricing Toggle
function initializePricingToggle() {
  const pricingToggle = document.getElementById("pricingToggle");
  const monthlyPrices = document.querySelectorAll(".monthly-price");
  const yearlyPrices = document.querySelectorAll(".yearly-price");
  const monthlyPeriods = document.querySelectorAll(".monthly-period");
  const yearlyPeriods = document.querySelectorAll(".yearly-period");

  pricingToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    const isYearly = this.classList.contains("active");

    if (isYearly) {
      monthlyPrices.forEach((price) => (price.style.display = "none"));
      yearlyPrices.forEach((price) => (price.style.display = "inline"));
      monthlyPeriods.forEach((period) => (period.style.display = "none"));
      yearlyPeriods.forEach((period) => (period.style.display = "inline"));
    } else {
      monthlyPrices.forEach((price) => (price.style.display = "inline"));
      yearlyPrices.forEach((price) => (price.style.display = "none"));
      monthlyPeriods.forEach((period) => (period.style.display = "inline"));
      yearlyPeriods.forEach((period) => (period.style.display = "none"));
    }
  });
}

// Contact Form
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    const submitBtn = this.querySelector(".form-submit-btn");
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
      submitBtn.style.background = "#28a745";

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = "";
        submitBtn.disabled = false;
        this.reset();

        // Show success message
        showNotification(
          "Thank you! Your message has been sent successfully.",
          "success"
        );
      }, 2000);
    }, 1500);
  });

  // Form validation and label animation
  const formInputs = document.querySelectorAll(
    ".form-group input, .form-group select, .form-group textarea"
  );

  formInputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value.trim() !== "") {
        this.classList.add("has-value");
      } else {
        this.classList.remove("has-value");
      }
    });

    input.addEventListener("input", function () {
      if (this.value.trim() !== "") {
        this.classList.add("has-value");
      } else {
        this.classList.remove("has-value");
      }
    });
  });
}

// Modal
function initializeModal() {
  const modal = document.getElementById("videoModal");
  const closeBtn = document.querySelector(".modal-close");

  closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}

function openModal(videoUrl) {
  const modal = document.getElementById("videoModal");
  const iframe = modal.querySelector("iframe");

  iframe.src = videoUrl;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const iframe = modal.querySelector("iframe");

  modal.style.display = "none";
  iframe.src = "";
  document.body.style.overflow = "auto";
}

// Back to Top Button
function initializeBackToTop() {
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Counter Animation
function initializeCounters() {
  const counters = document.querySelectorAll(".stat-number");
  let hasAnimated = false;

  const animateCounters = () => {
    if (hasAnimated) return;

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.getAttribute("data-target"));
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      updateCounter();
    });

    hasAnimated = true;
  };

  // Trigger counter animation when hero section is visible
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(animateCounters, 1000);
        }
      });
    },
    { threshold: 0.5 }
  );

  const heroSection = document.getElementById("home");
  if (heroSection) {
    heroObserver.observe(heroSection);
  }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
}

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === "success" ? "check-circle" : "info-circle"}"></i>
            <span>${message}</span>
        </div>
    `;

  // Add notification styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "#28a745" : "#667eea"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.3s ease;
    `;

  document.body.appendChild(notification);

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(400px)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 4000);
}

// Parallax Effect for Hero Background
function initializeParallax() {
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector(".hero-background");

    if (heroBackground) {
      const speed = scrolled * 0.5;
      heroBackground.style.transform = `translateY(${speed}px)`;
    }
  });
}

// Initialize parallax on load
window.addEventListener("load", initializeParallax);

// Lazy Loading for Images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Performance optimization
function optimizePerformance() {
  // Debounce scroll events
  let scrollTimeout;
  const originalScrollHandler = window.onscroll;

  window.onscroll = () => {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      if (originalScrollHandler) {
        originalScrollHandler();
      }
    }, 10);
  };
}

// Initialize performance optimizations
optimizePerformance();

// Add loading states for interactive elements
function addLoadingStates() {
  const buttons = document.querySelectorAll(".btn, .pricing-btn, .program-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (!this.classList.contains("loading")) {
        this.classList.add("loading");

        setTimeout(() => {
          this.classList.remove("loading");
        }, 1000);
      }
    });
  });
}

// Initialize loading states
addLoadingStates();

// Add CSS for loading states
const loadingStyles = `
    .btn.loading, .pricing-btn.loading, .program-btn.loading {
        pointer-events: none;
        opacity: 0.7;
    }
    
    .btn.loading::after, .pricing-btn.loading::after, .program-btn.loading::after {
        content: '';
        width: 16px;
        height: 16px;
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-left: 10px;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Inject loading styles
const styleSheet = document.createElement("style");
styleSheet.textContent = loadingStyles;
document.head.appendChild(styleSheet);
