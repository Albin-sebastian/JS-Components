// Select all accordion items
const accordionItems = document.querySelectorAll('.accordion-item');

// Loop through each accordion item
accordionItems.forEach((item) => {

  // Select the accordion summary,text and icon within the current item
  const accordionSummery = item.querySelector('.accordion-summery');
  const icon = item.querySelector('.icon');
  const txt = item.querySelector('.txt');

  // Add an event listener to the current item
  item.addEventListener('click', () => {
    // Check if the accordion summary is already shown
    if (accordionSummery.classList.contains('show')) {
      // If it's shown, hide it and rotate the icon back to 0 degrees
      accordionSummery.classList.remove('show');

      icon.style.transform = 'rotate(0deg)';
      txt.style.color = "black";
    } else {
      // If it's not shown, show it and rotate the icon to 180 degrees
      accordionSummery.classList.add('show');
      icon.style.transform = 'rotate(180deg)';
      txt.style.color = "green";
    }
  });
});