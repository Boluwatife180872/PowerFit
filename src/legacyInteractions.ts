export function initializeLegacyInteractions(): () => void {
  const cleanups: Array<() => void> = [];
  const timeouts: number[] = [];

  const addListener = <T extends Element | Window | Document>(
    target: T | null,
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ) => {
    if (!target) return;
    target.addEventListener(type, listener, options);
    cleanups.push(() => target.removeEventListener(type, listener, options));
  };

  const addTimeout = (id: number) => {
    timeouts.push(id);
  };

  const clearAllTimeouts = () => {
    timeouts.forEach((id) => window.clearTimeout(id));
    timeouts.length = 0;
  };

  // Loading Screen
  const loadingScreen = document.getElementById('loadingScreen');
  addListener(window, 'load', () => {
    const first = window.setTimeout(() => {
      if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        const second = window.setTimeout(() => {
          loadingScreen.style.display = 'none';
        }, 500);
        addTimeout(second);
      }
    }, 1500);
    addTimeout(first);
  });

  // Navigation
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  addListener(window, 'scroll', handleScroll);

  const handleHamburger = () => {
    hamburger?.classList.toggle('active');
    navMenu?.classList.toggle('active');
  };
  addListener(hamburger, 'click', handleHamburger);

  navLinks.forEach((link) => {
    addListener(link, 'click', () => {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
    });
  });

  addListener(document, 'click', (event) => {
    if (!navbar) return;
    if (!navbar.contains(event.target as Node)) {
      hamburger?.classList.remove('active');
      navMenu?.classList.remove('active');
    }
  });

  // Hero Buttons
  const startJourneyBtn = document.getElementById('startJourneyBtn');
  const watchVideoBtn = document.getElementById('watchVideoBtn');
  addListener(startJourneyBtn, 'click', () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  });
  addListener(watchVideoBtn, 'click', () => {
    openModal('https://www.youtube.com/embed/dQw4w9WgXcQ');
  });

  // Scroll Animations
  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  const animateElements = document.querySelectorAll(
    '.feature-card, .program-card, .trainer-card, .pricing-card'
  );
  animateElements.forEach((el) => observer.observe(el));

  const fadeElements = document.querySelectorAll('.section-header, .contact-item');
  fadeElements.forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });

  cleanups.push(() => observer.disconnect());

  // Program Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const programCards = document.querySelectorAll('.program-card');

  filterBtns.forEach((btn) => {
    addListener(btn, 'click', function (this: Element) {
      const filter = this.getAttribute('data-filter');

      filterBtns.forEach((b) => b.classList.remove('active'));
      this.classList.add('active');

      programCards.forEach((card) => {
        const category = card.getAttribute('data-category');

        if (filter === 'all' || category === filter) {
          card.classList.remove('hidden');
          const id = window.setTimeout(() => {
            (card as HTMLElement).style.display = 'block';
          }, 10);
          addTimeout(id);
        } else {
          card.classList.add('hidden');
          const id = window.setTimeout(() => {
            if (card.classList.contains('hidden')) {
              (card as HTMLElement).style.display = 'none';
            }
          }, 300);
          addTimeout(id);
        }
      });
    });
  });

  // Pricing Toggle
  const pricingToggle = document.getElementById('pricingToggle');
  const monthlyPrices = document.querySelectorAll('.monthly-price');
  const yearlyPrices = document.querySelectorAll('.yearly-price');
  const monthlyPeriods = document.querySelectorAll('.monthly-period');
  const yearlyPeriods = document.querySelectorAll('.yearly-period');

  addListener(pricingToggle, 'click', function (this: Element) {
    this.classList.toggle('active');
    const isYearly = this.classList.contains('active');

    if (isYearly) {
      monthlyPrices.forEach((price) => ((price as HTMLElement).style.display = 'none'));
      yearlyPrices.forEach((price) => ((price as HTMLElement).style.display = 'inline'));
      monthlyPeriods.forEach((period) => ((period as HTMLElement).style.display = 'none'));
      yearlyPeriods.forEach((period) => ((period as HTMLElement).style.display = 'inline'));
    } else {
      monthlyPrices.forEach((price) => ((price as HTMLElement).style.display = 'inline'));
      yearlyPrices.forEach((price) => ((price as HTMLElement).style.display = 'none'));
      monthlyPeriods.forEach((period) => ((period as HTMLElement).style.display = 'inline'));
      yearlyPeriods.forEach((period) => ((period as HTMLElement).style.display = 'none'));
    }
  });

  // Contact Form
  const contactForm = document.getElementById('contactForm') as HTMLFormElement | null;
  if (contactForm) {
    addListener(contactForm, 'submit', function (event) {
      event.preventDefault();

      const submitBtn = this.querySelector('.form-submit-btn') as HTMLButtonElement | null;
      if (!submitBtn) return;
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;

      const sendingTimeout = window.setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        submitBtn.style.background = '#28a745';

        const resetTimeout = window.setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.background = '';
          submitBtn.disabled = false;
          this.reset();
          showNotification('Thank you! Your message has been sent successfully.', 'success');
        }, 2000);
        addTimeout(resetTimeout);
      }, 1500);
      addTimeout(sendingTimeout);
    });
  }

  const formInputs = document.querySelectorAll(
    '.form-group input, .form-group select, .form-group textarea'
  );
  formInputs.forEach((input) => {
    addListener(input, 'blur', function (this: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
      if (this.value.trim() !== '') {
        this.classList.add('has-value');
      } else {
        this.classList.remove('has-value');
      }
    });

    addListener(input, 'input', function (this: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) {
      if (this.value.trim() !== '') {
        this.classList.add('has-value');
      } else {
        this.classList.remove('has-value');
      }
    });
  });

  // Modal
  const modal = document.getElementById('videoModal');
  const closeBtn = document.querySelector('.modal-close');
  addListener(closeBtn, 'click', closeModal);
  addListener(window, 'click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  addListener(document, 'keydown', (event) => {
    if ((event as KeyboardEvent).key === 'Escape') {
      closeModal();
    }
  });

  // Back to Top
  const backToTopBtn = document.getElementById('backToTop');
  addListener(window, 'scroll', () => {
    if (!backToTopBtn) return;
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  addListener(backToTopBtn, 'click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Counter Animation
  const counters = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const animateCounters = () => {
    if (hasAnimated) return;

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.getAttribute('data-target') || '0', 10);
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.textContent = Math.floor(current).toString();
          window.requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCounter();
    });

    hasAnimated = true;
  };

  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = window.setTimeout(animateCounters, 1000);
          addTimeout(id);
        }
      });
    },
    { threshold: 0.5 }
  );

  const heroSection = document.getElementById('home');
  if (heroSection) {
    heroObserver.observe(heroSection);
  }
  cleanups.push(() => heroObserver.disconnect());

  // Smooth Scrolling
  const navAnchors = document.querySelectorAll('a[href^="#"]');
  navAnchors.forEach((link) => {
    addListener(link, 'click', function (event) {
      event.preventDefault();
      const targetId = (this as HTMLAnchorElement).getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = (targetSection as HTMLElement).offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  // Parallax Effect
  const handleParallax = () => {
    const heroBackground = document.querySelector('.hero-background') as HTMLElement | null;
    if (heroBackground) {
      const speed = window.pageYOffset * 0.5;
      heroBackground.style.transform = `translateY(${speed}px)`;
    }
  };
  addListener(window, 'scroll', handleParallax);

  // Lazy Loading (optional)
  const images = document.querySelectorAll('img[data-src]');
  if (images.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observerInstance.unobserve(img);
        }
      });
    });
    images.forEach((img) => imageObserver.observe(img));
    cleanups.push(() => imageObserver.disconnect());
  }

  // Performance optimization (light debounce)
  let scrollTimeout: number | undefined;
  const originalScrollHandler = window.onscroll;
  window.onscroll = () => {
    if (scrollTimeout) {
      window.clearTimeout(scrollTimeout);
    }
    scrollTimeout = window.setTimeout(() => {
      if (originalScrollHandler) {
        originalScrollHandler.call(window);
      }
    }, 10);
  };
  cleanups.push(() => {
    if (scrollTimeout) {
      window.clearTimeout(scrollTimeout);
    }
    window.onscroll = originalScrollHandler || null;
  });

  // Add loading states
  const buttons = document.querySelectorAll('.btn, .pricing-btn, .program-btn');
  buttons.forEach((btn) => {
    addListener(btn, 'click', function (this: Element) {
      if (!this.classList.contains('loading')) {
        this.classList.add('loading');
        const id = window.setTimeout(() => {
          this.classList.remove('loading');
        }, 1000);
        addTimeout(id);
      }
    });
  });

  const loadingStyles = document.createElement('style');
  loadingStyles.textContent = `
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
  document.head.appendChild(loadingStyles);
  cleanups.push(() => {
    if (loadingStyles.parentNode) {
      loadingStyles.parentNode.removeChild(loadingStyles);
    }
  });

  return () => {
    clearAllTimeouts();
    cleanups.forEach((fn) => fn());
  };
}

function openModal(videoUrl: string) {
  const modal = document.getElementById('videoModal');
  if (!modal) return;
  const iframe = modal.querySelector('iframe');
  if (iframe) {
    iframe.src = videoUrl;
  }
  modal.setAttribute('aria-hidden', 'false');
  (modal as HTMLElement).style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  if (!modal) return;
  const iframe = modal.querySelector('iframe');
  if (iframe) {
    iframe.src = '';
  }
  modal.setAttribute('aria-hidden', 'true');
  (modal as HTMLElement).style.display = 'none';
  document.body.style.overflow = 'auto';
}

function showNotification(message: string, type: 'info' | 'success' = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#667eea'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: all 0.3s ease;
    `;

  document.body.appendChild(notification);

  window.setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);

  window.setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    window.setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}
