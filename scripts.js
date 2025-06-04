// Smooth scrolling handled by CSS scroll-behavior

// Skill tooltip functionality
const skills = document.querySelectorAll('.skill');
const tooltip = document.getElementById('skill-tooltip');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', e => {
    const desc = e.target.getAttribute('data-desc');
    if (!desc) return;
    tooltip.textContent = desc;
    tooltip.style.opacity = '1';
    moveTooltip(e);
  });
  skill.addEventListener('mousemove', e => {
    moveTooltip(e);
  });
  skill.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });
});

function moveTooltip(e) {
  const padding = 15;
  let x = e.clientX + padding;
  let y = e.clientY + padding;

  // Prevent tooltip from going outside viewport right edge
  if (x + tooltip.offsetWidth > window.innerWidth) {
    x = e.clientX - tooltip.offsetWidth - padding;
  }
  // Prevent tooltip from going outside viewport bottom edge
  if (y + tooltip.offsetHeight > window.innerHeight) {
    y = e.clientY - tooltip.offsetHeight - padding;
  }
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

// View more projects button (demo)
document.getElementById('view-more-btn').addEventListener('click', () => {
  alert('More projects will be added soon!');
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    confirmationMessage.style.display = "block";
    form.reset();
  });
});
