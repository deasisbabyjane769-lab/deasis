// ===== Cool Hover & Animation Effects =====

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all effects
  initializeAnimations();
  initializeHoverEffects();
  initializeParticles();
  initializeScrollEffects();
  initializeMouseTracking();
  initializeFlashlight();
});

// ===== 1. PAGE ENTRANCE ANIMATIONS =====
function initializeAnimations() {
  // Animate hero on page load
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.animation = 'slideInUp 0.8s ease-out';
  }

  // Stagger animate cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
  });

  // Animate section titles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach(title => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideInDown 0.6s ease-out';
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(title);
  });
}

// ===== 2. ADVANCED HOVER EFFECTS =====
function initializeHoverEffects() {
  // Hover effect for cards
  const cards = document.querySelectorAll('.card, .profile-card, .form-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      card.style.transform = 'translateY(-12px) scale(1.02)';
      card.style.boxShadow = '0 40px 80px rgba(0, 102, 255, 0.4)';
      createHoverGlow(e);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
      card.style.boxShadow = '0 20px 40px rgba(0, 102, 255, 0.15)';
    });
  });

  // Hover effect for buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      btn.style.transform = 'translateY(-4px) scale(1.12)';
      btn.style.boxShadow = '0 15px 40px rgba(0, 102, 255, 0.6)';
      createButtonGlow(e, btn);
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translateY(0) scale(1)';
      btn.style.boxShadow = '0 4px 20px rgba(0, 102, 255, 0.4)';
    });
  });

  // Hover effect for nav links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-2px)';
      link.style.letterSpacing = '0.5px';
    });

    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
      link.style.letterSpacing = 'normal';
    });
  });

  // Hover effect for timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(12px) scale(1.02)';
      item.style.background = 'linear-gradient(135deg, rgba(255, 51, 102, 0.25), rgba(0, 102, 255, 0.25))';
    });

    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0) scale(1)';
      item.style.background = 'linear-gradient(135deg, rgba(255, 51, 102, 0.15), rgba(0, 102, 255, 0.15))';
    });
  });
}

// ===== 3. PARTICLE GLOW EFFECTS =====
function createHoverGlow(event) {
  const rect = event.target.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const glow = document.createElement('div');
  glow.className = 'hover-glow';
  glow.style.position = 'absolute';
  glow.style.left = x + 'px';
  glow.style.top = y + 'px';
  glow.style.width = '40px';
  glow.style.height = '40px';
  glow.style.background = 'radial-gradient(circle, rgba(0, 102, 255, 0.6), transparent)';
  glow.style.borderRadius = '50%';
  glow.style.pointerEvents = 'none';
  glow.style.animation = 'glowPulse 0.8s ease-out forwards';
  glow.style.filter = 'blur(10px)';

  event.target.style.position = 'relative';
  event.target.style.overflow = 'hidden';
  event.target.appendChild(glow);

  setTimeout(() => glow.remove(), 800);
}

function createButtonGlow(event, btn) {
  const rect = btn.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const glow = document.createElement('div');
  glow.style.position = 'absolute';
  glow.style.left = x + 'px';
  glow.style.top = y + 'px';
  glow.style.width = '60px';
  glow.style.height = '60px';
  glow.style.background = 'radial-gradient(circle, rgba(255, 51, 102, 0.8), transparent)';
  glow.style.borderRadius = '50%';
  glow.style.pointerEvents = 'none';
  glow.style.animation = 'glowExpand 0.6s ease-out forwards';
  glow.style.filter = 'blur(15px)';

  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(glow);

  setTimeout(() => glow.remove(), 600);
}

// ===== 3.5 HOVER FLASHLIGHT EFFECT =====
function initializeFlashlight() {
  // Create flashlight element
  const flashlight = document.createElement('div');
  flashlight.id = 'flashlight';
  flashlight.style.position = 'fixed';
  flashlight.style.width = '200px';
  flashlight.style.height = '200px';
  flashlight.style.borderRadius = '50%';
  flashlight.style.pointerEvents = 'none';
  flashlight.style.zIndex = '9999';
  flashlight.style.background = 'radial-gradient(circle, rgba(0, 102, 255, 0.5) 0%, rgba(255, 51, 102, 0.3) 40%, transparent 70%)';
  flashlight.style.boxShadow = '0 0 50px rgba(0, 102, 255, 0.8), inset 0 0 40px rgba(0, 102, 255, 0.5)';
  flashlight.style.filter = 'blur(30px)';
  flashlight.style.opacity = '0';
  flashlight.style.transition = 'opacity 0.3s ease';
  flashlight.style.display = 'none';
  document.body.appendChild(flashlight);

  let mouseX = 0;
  let mouseY = 0;
  let isOverElement = false;

  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Update flashlight position
    flashlight.style.left = (mouseX - 100) + 'px';
    flashlight.style.top = (mouseY - 100) + 'px';

    // Show flashlight when over interactive elements
    const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
    const isInteractive = hoveredElement && (
      hoveredElement.closest('.card') ||
      hoveredElement.closest('.btn') ||
      hoveredElement.closest('.profile-card') ||
      hoveredElement.closest('.timeline-item') ||
      hoveredElement.closest('input') ||
      hoveredElement.closest('textarea') ||
      hoveredElement.closest('.nav-links')
    );

    if (isInteractive) {
      flashlight.style.display = 'block';
      flashlight.style.opacity = '1';
      isOverElement = true;
    } else {
      flashlight.style.opacity = '0';
      if (isOverElement) {
        setTimeout(() => {
          flashlight.style.display = 'none';
        }, 300);
      }
      isOverElement = false;
    }
  });

  // Hide flashlight when mouse leaves window
  document.addEventListener('mouseleave', () => {
    flashlight.style.opacity = '0';
    flashlight.style.display = 'none';
  });

  // Add pulse effect to flashlight
  const pulseStyle = document.createElement('style');
  pulseStyle.textContent = `
    @keyframes flashlightPulse {
      0%, 100% {
        box-shadow: 0 0 50px rgba(0, 102, 255, 0.8), inset 0 0 40px rgba(0, 102, 255, 0.5);
      }
      50% {
        box-shadow: 0 0 80px rgba(0, 102, 255, 1), inset 0 0 60px rgba(255, 51, 102, 0.6);
      }
    }
    
    #flashlight {
      animation: flashlightPulse 2s ease-in-out infinite !important;
    }
  `;
  document.head.appendChild(pulseStyle);
}

// ===== 4. SCROLL ANIMATION EFFECTS =====
function initializeScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
      }
    });
  }, observerOptions);

  // Observe all elements
  document.querySelectorAll('.card, .section, .profile-card').forEach(el => {
    observer.observe(el);
  });
}

// ===== 5. MOUSE TRACKING EFFECT =====
function initializeMouseTracking() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    // Move background glow
    const heroBefore = document.querySelector('.hero::before');
    hero.style.setProperty('--mouse-x', x + '%');
    hero.style.setProperty('--mouse-y', y + '%');

    // Subtle parallax effect
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    parallaxElements.forEach(el => {
      const speed = el.getAttribute('data-parallax');
      el.style.transform = `translateY(${(y - 50) * speed}px)`;
    });
  });
}

// ===== 6. SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== 7. DYNAMIC COLOR SHIFT ON SCROLL =====
window.addEventListener('scroll', () => {
  const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  
  // Update nav background opacity based on scroll
  const nav = document.querySelector('nav');
  if (nav) {
    const opacity = Math.min(scrollPercent / 50, 1);
    nav.style.background = `rgba(10, 14, 39, ${0.95 + opacity * 0.05})`;
  }

  // Add subtle rotation to cards on scroll
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    const rotation = (scrollPercent * (index % 2 === 0 ? 0.5 : -0.5));
    card.style.transform = `perspective(1000px) rotateY(${rotation}deg)`;
  });
});

// ===== 8. INPUT FIELD ANIMATIONS =====
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
  input.addEventListener('focus', (e) => {
    e.target.style.transform = 'scale(1.02)';
    e.target.style.transition = 'all 0.3s ease';
    e.target.parentElement.style.animation = 'slideIn 0.3s ease-out';
  });

  input.addEventListener('blur', (e) => {
    e.target.style.transform = 'scale(1)';
  });

  // Add floating label effect
  input.addEventListener('input', (e) => {
    if (e.target.value) {
      e.target.style.background = 'rgba(15, 20, 50, 0.8)';
    } else {
      e.target.style.background = 'rgba(15, 20, 50, 0.6)';
    }
  });
});

// ===== 9. ADD CSS ANIMATIONS DYNAMICALLY =====
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInDown {
    from {
      opacity: 0;
      transform: translateY(-40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes glowPulse {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes glowExpand {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(3);
      opacity: 0;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  /* Smooth transitions for all elements */
  * {
    transition: box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease;
  }

  /* Hover glow effect */
  .hover-glow {
    pointer-events: none !important;
  }

  /* Smooth link transitions */
  a {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }

  /* Button smooth animation */
  .btn {
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }
`;
document.head.appendChild(style);

// ===== 10. SHOW ELEMENTS ON LOAD =====
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  setTimeout(() => {
    document.body.style.animation = 'fadeIn 0.6s ease-out forwards';
  }, 100);
});

// Add fade-in animation
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(fadeInStyle);
