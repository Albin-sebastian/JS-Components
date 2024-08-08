// Select all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add event listener to each accordion item
accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    // Get the accordion summary, icon, and text elements
    const summary = item.querySelector('.accordion-summery');
    const icon = item.querySelector('.icon');
    const txt = item.querySelector('.txt');

    // Toggle the accordion summary visibility and icon rotation
    summary.classList.toggle('show');
    icon.classList.toggle('rotate');
    txt.classList.toggle('green');

    // Close all other accordions
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherSummary = otherItem.querySelector('.accordion-summery');
        const otherIcon = otherItem.querySelector('.icon');
        const otherTxt = otherItem.querySelector('.txt');
        otherSummary.classList.remove('show');
        otherIcon.classList.remove('rotate');
        otherTxt.classList.remove('green');
      }
    });
  });
});