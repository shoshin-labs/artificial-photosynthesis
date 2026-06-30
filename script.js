document.querySelectorAll('[data-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      const original = button.textContent;
      button.textContent = 'Copied';
      window.setTimeout(() => {
        button.textContent = original;
      }, 1400);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  });
});

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

if (observer) {
  document.querySelectorAll('.primer-card, .utility-card, .map-card, .route-panel, .resource-card, .collection-card').forEach((node) => {
    node.classList.add('reveal-ready');
    observer.observe(node);
  });
}
