// Select all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Add event listener to each accordion item
accordionItems.forEach((item) => {
  item.addEventListener('click', async (e) => {
    // Get the accordion summary and icon
    const summary = item.querySelector('.accordion-summery');
    const icon = item.querySelector('.icon');
    const txt = item.querySelector('.txt');
    // Toggle the accordion summary visibility
    summary.classList.toggle('show');

    // Toggle the icon rotation
    icon.classList.toggle('rotate');

    txt.classList.toggle('green');
    // Use async/await to wait for the animation to finish
    await new Promise((resolve) => {
      setTimeout(resolve, 300);
    });
  });
});
