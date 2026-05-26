// ============================================
// Scroll Reveal
// ============================================

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

document.querySelectorAll(
  '.section-label, .section-title, .section-intro, ' +
  '.hire-card, .hire-proof, .writing-card, .music-card, ' +
  '.contact-heading, .contact-note, .contact-links, .contact-social'
).forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ============================================
// Nav scroll effect
// ============================================

const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}, { passive: true });

// ============================================
// Mobile menu toggle
// ============================================

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const isOpen = navLinks.classList.contains('open');
  const spans = navToggle.querySelectorAll('span');
  if (isOpen) {
    spans[0].style.transform = 'rotate(45deg) translate(3px, 3px)';
    spans[1].style.transform = 'rotate(-45deg) translate(0px, 0px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  }
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.transform = '';
  });
});

// ============================================
// About Modal
// ============================================

const aboutBtn = document.getElementById('about-btn');
const modal = document.getElementById('about-modal');
const modalClose = document.getElementById('modal-close');

aboutBtn.addEventListener('click', () => {
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('open');
  document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ============================================
// Hero parallax on scroll
// ============================================

const heroContent = document.querySelector('.hero-content');
if (heroContent) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY < window.innerHeight) {
      heroContent.style.transform = `translateY(${scrollY * 0.12}px)`;
      heroContent.style.opacity = 1 - scrollY / (window.innerHeight * 0.8);
    }
  }, { passive: true });
}
