// Select the carousel element and its child elements
const carousel = document.querySelector('.carousel');
const img = document.querySelector('.carousel-img');
const text = document.querySelector('.testimonial-text');
const author = document.querySelector('.testimonial-author');
const job = document.querySelector('.testimonial-job');
const btnLeft = document.querySelector('.btn--left');
const btnRight = document.querySelector('.btn--right');
const dots = document.querySelectorAll('.dot');

// Define the carousel data
const carouselData = [
  {
    img: 'maria.jpg',
    testimonial: {
      text: 'Hi, I\'m Maria1. I\'m a software developer and a passionate learner.',
      author: 'Maria de Almeida',
      job: 'Senior developer'
    }
  },
  {
    img: 'john.jpg',
    testimonial: {
      text: 'Hi, I\'m John. I\'m a designer and a creative thinker.',
      author: 'John Doe',
      job: 'UI/UX Designer'
    }
  },
  {
    img: 'jane.jpg',
    testimonial: {
      text: 'Hi, I\'m Jane. I\'m a writer and a storyteller.',
      author: 'Jane Smith',
      job: 'Technical Writer'
    }
  },
  {
    img: 'bob.jpg',
    testimonial: {
      text: 'Hi, I\'m Bob. I\'m a developer and a problem solver.',
      author: 'Bob Johnson',
      job: 'Software Engineer'
    }
  }
];
// Initialize the current index of the carousel
let currentIndex = 0;

// Function to update the carousel
const updateCarousel = async () => {
  try {
    if (carouselData.length === 0)
      return false;

    // Get the current carousel data
    const { img: imgUrl, testimonial } = carouselData[currentIndex];

    // Set the image source and wait for it to load
    img.src = imgUrl;
    await new Promise(resolve => {
      img.onload = resolve;
    });
    /* This line of code is creating a new Promise and waiting for it to resolve before continuing execution. Here's what's happening:

new Promise(resolve => { ... }): This creates a new Promise. The resolve function is a callback that will be called when the Promise is resolved.
img.onload = resolve;: This sets the onload event handler of the img element to the resolve function. When the image is fully loaded, the onload event will be triggered, and the resolve function will be called.
await: This keyword is used to wait for the Promise to resolve before continuing execution. When the resolve function is called (i.e., when the image is fully loaded), the Promise will be resolved, and the code will continue executing.
In essence, this line of code is waiting for the image to be fully loaded before continuing execution. This ensures that the image is displayed correctly before updating the text and other elements.

Here's a step-by-step example of what happens:

The code sets the src attribute of the img element to a new URL.
The img element starts loading the new image.
The code creates a new Promise and sets the onload event handler of the img element to the resolve function.
The code waits for the Promise to resolve using the await keyword.
When the image is fully loaded, the onload event is triggered, and the resolve function is called.
The Promise is resolved, and the code continues executing.
The text and other elements are updated.
By using this technique, we can ensure that the image is fully loaded before updating the other elements, which can help prevent issues like flickering or incorrect layout.*/

    // Update the text, author, and job elements
    text.textContent = testimonial.text;
    author.textContent = testimonial.author;
    job.textContent = testimonial.job;

    // Update the dots to reflect the current index
    dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
  }
  // Log any errors that occur during the update process
  catch (error) {
    console.error("Error updating carousel", error);
  }

};


/* Suppose carouselData has 4 items, and currentIndex is 0.

currentIndex - 1 = -1
-1 + 4 = 3 (wrap around to the end of the array)
3 % 4 = 3 (resulting index is 3, which is the last item in the array)

Now, suppose currentIndex is 3 (the last item in the array).

currentIndex - 1 = 2
2 + 4 = 6
6 % 4 = 2 (resulting index is 2, which is the second-to-last item in the array) */

// Function to handle left click
const handleLeftClick = async () => {
  try {
    // Calculate the new index by subtracting 1 from the current index and wrapping around to the end of the array if necessary
    currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;

    // Update the carousel with the new index
    await updateCarousel();
  }

  catch (error) {
    // Log any errors that occur during the right click handling process
    console.error('Error handling left click:', error);
  }
};

const handleRightClick = async () => {
  try {
    // Calculate the new index by adding 1 to the current index and wrapping around to the beginning of the array if necessary
    currentIndex = (currentIndex + 1) % carouselData.length;
    await updateCarousel();
  }
  catch (error) {
    console.error('Error handling right click:', error);
  }
};

// Automatically change the testimonial every 5 seconds
setInterval(handleRightClick, 5000)
btnLeft.addEventListener('click', handleLeftClick);
btnRight.addEventListener('click', handleRightClick);
updateCarousel();