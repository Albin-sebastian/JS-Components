// Select all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');
console.log(accordionItems);
// Add event listener to each accordion item
accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Get the accordion summary and icon
    const summary = item.querySelector('.accordion-summery');
    const icon = item.querySelector('.icon');
    const txt = item.querySelector('.txt');
    // Check if the accordion summary is already shown
    if (summary.classList.contains('show')) {
      // If it's shown, hide it and rotate the icon back to 0 degrees
      summary.classList.remove('show');
      icon.style.transform = 'rotate(0deg)';
      txt.classList.remove('green');
    } else {
      // If it's not shown, show it and rotate the icon to 180 degrees
      // Also, close all other accordions
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherSummary = otherItem.querySelector('.accordion-summery');
          const otherIcon = otherItem.querySelector('.icon');
          otherSummary.classList.remove('show');
          otherIcon.style.transform = 'rotate(0deg)';
        }
      });
      summary.classList.add('show');
      icon.style.transform = 'rotate(180deg)';
      txt.classList.add('green');
    }
  });
});