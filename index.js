const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const navDots = document.querySelectorAll('.nav-dot');

    let currentSlideIndex = 0;

    function showSlide(n) {
      slides.forEach((slide, index) => {
        slide.classList.remove('active');
        navDots[index].classList.remove('active');
      });

      currentSlideIndex = (n + slides.length) % slides.length;
      slides[currentSlideIndex].classList.add('active');
      navDots[currentSlideIndex].classList.add('active');
    }

    function nextSlide() {
      showSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
      showSlide(currentSlideIndex - 1);
    }

    // Обработка кликов на навигационные точки
    navDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
      });
    });

    // Обработка кликов на кнопки "Предыдущее" и "Следующее"
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Автоматическая смена слайдов(можно за коментировать)
    setInterval(nextSlide, 3000);