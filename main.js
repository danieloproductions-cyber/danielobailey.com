// Scroll reveal
const revealTargets = document.querySelectorAll(
  '.latest-box, .section-label, .section-title, .section-intro, ' +
  '.hire-card, .hire-proof, .writing-card, .music-card, ' +
  '.contact-heading, .contact-note, .contact-links, .contact-social'
);

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );
  revealTargets.forEach((el) => {
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    setMenu(!navLinks.classList.contains('open'));
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });
}

// About modal
const aboutBtn = document.getElementById('about-btn');
const modal = document.getElementById('about-modal');
const modalClose = document.getElementById('modal-close');

if (aboutBtn && modal && modalClose) {
  const openModal = () => {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
    modalClose.focus();
  };
  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    aboutBtn.focus();
  };

  aboutBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (modal.classList.contains('open')) closeModal();
      else setMenu(false);
    }
    // keep keyboard focus inside the open dialog
    if (e.key === 'Tab' && modal.classList.contains('open')) {
      const focusable = modal.querySelectorAll('a[href], button');
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}
