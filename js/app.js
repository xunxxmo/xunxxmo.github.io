function handleIntersection(entries, className) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(className);
    } else {
      entry.target.classList.remove(className);
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  handleIntersection(entries, 'show');
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 如果你有其他类似的效果，可以创建另一个观察者
const observer2 = new IntersectionObserver((entries) => {
  handleIntersection(entries, 'show2');
});

const hidden2Elements = document.querySelectorAll('.hidden2');
hidden2Elements.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
  handleIntersection(entries, 'fade-out');
});

const fadeElements = document.querySelectorAll('.fade-in');
fadeElements.forEach((el) => observer3.observe(el));

const observer4 = new IntersectionObserver((entries) => {
  handleIntersection(entries, 'fade-out');
});

const fade2Elements = document.querySelectorAll('.fade-in2');
fade2Elements.forEach((el) => observer4.observe(el));

const observer5 = new IntersectionObserver((entries) => {
  handleIntersection(entries, 'fade-out');
});

const fade3Elements = document.querySelectorAll('.fade-in3');
fade3Elements.forEach((el) => observer5.observe(el));
