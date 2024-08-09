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
  img.src = carouselData[currentIndex].img;
  text.textContent = `${carouselData[currentIndex].testimonial.text}`;
  author.textContent = `${carouselData[currentIndex].testimonial.author}`;
  job.textContent = `${carouselData[currentIndex].testimonial.job}`
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  })
  //dots.forEach((dot, index) => {
  // dot.classList.toggle('active', index === currentIndex);});
  // This uses the toggle method to add or remove the active class based on the condition index === currentIndex.
};
;

const handleLeftClick = () => {
  if (currentIndex === 0) {
    currentIndex = carouselData.length - 1;
  } else {
    currentIndex--;
  }
  updateCarousel();
}
const handleRightClick = () => {
  if (currentIndex === carouselData.length - 1) {
    currentIndex = 0
  }
  else {
    currentIndex++;
  }
  updateCarousel();
}



btnLeft.addEventListener('click', handleLeftClick);
btnRight.addEventListener('click', handleRightClick);
updateCarousel();