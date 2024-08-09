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
let currentIndex = 1;

const updateCarousel = () => {

  if (carouselData.length === 0)

    return;

  const { img: imgUrl, testimonial } = carouselData[currentIndex];
  img.src = imgUrl;
  text.textContent = testimonial.text;
  author.textContent = testimonial.author;
  job.textContent = testimonial.job;
  dots.forEach((dot, index) => dot.classList.toggle('active', index === currentIndex));
};


/* Suppose carouselData has 4 items, and currentIndex is 0.

currentIndex - 1 = -1
-1 + 4 = 3 (wrap around to the end of the array)
3 % 4 = 3 (resulting index is 3, which is the last item in the array)
Now, suppose currentIndex is 3 (the last item in the array).

currentIndex - 1 = 2
2 + 4 = 6
6 % 4 = 2 (resulting index is 2, which is the second-to-last item in the array) */

const handleLeftClick = () => {
  currentIndex = (currentIndex - 1 + carouselData.length) % carouselData.length;
  updateCarousel();
};

const handleRightClick = () => {
  currentIndex = (currentIndex + 1) % carouselData.length;
  updateCarousel();
};


btnLeft.addEventListener('click', handleLeftClick);
btnRight.addEventListener('click', handleRightClick);
updateCarousel();