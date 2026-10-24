const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  mainNav.classList.toggle('open', !isOpen);
});
mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  mainNav.classList.remove('open');
}));
document.querySelectorAll('.play-demo').forEach(button => {
  button.addEventListener('click', () => {
    const container = button.closest('[data-video]');
    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(container.dataset.video)}?autoplay=1`;
    frame.title = 'Original Framedge and Avocado demonstration';
    frame.allow = 'autoplay; encrypted-media; picture-in-picture';
    frame.allowFullscreen = true;
    container.replaceChildren(frame);
  });
});
document.querySelector('#demo-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = 'Framedge demo request';
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
  window.location.href = `mailto:hello@framedge.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
