
var sc = document.getElementById('div1');
var next = document.getElementById('next');
var back = document.getElementById('back');

sc.addEventListener('wheel', (evt) => {
  sc.style.scrollBehavior = 'auto';
  sc.scrollLeft += evt.deltaY;

  evt.preventDefault();
});


next.addEventListener('click', () => {
  sc.style.scrollBehavior = 'smooth';
  sc.style.transition = 'scroll-left 2s ease-in-out';
  sc.scrollLeft += 215;

  // Clear the transition property after the animation is complete
  setTimeout(() => {
    sc.style.transition = '';
  }, 1800); // 0.8 seconds
});


back.addEventListener('click', () => {
  sc.style.scrollBehavior = 'smooth';
  sc.style.transition = 'scroll-left 2s ease-in-out';
  sc.scrollLeft -= 215;

  // Clear the transition property after the animation is complete
  setTimeout(() => {
    sc.style.transition = '';
  }, 1800); // 0.8 seconds
});







// var sc = document.getElementById('div1');
// var next = document.getElementById('next');
// var back = document.getElementById('back');


// sc.addEventListener('wheel', (evt) => {
  
//   sc.style.scrollBehavior = 'auto';
//   sc.scrollLeft += evt.deltaY;

//     evt.preventDefault();
 
// })


// next.addEventListener('click', () => {
  
//    sc.style.scrollBehavior = 'smooth';
//    sc.scrollLeft += 215;

// })


// back.addEventListener('click', () => {
  
//   sc.style.scrollBehavior = 'smooth';
//   sc.scrollLeft -= 215;

// })









// next.addEventListener('click', () => {
//   sc.style.transition = 'transform 0.3s ease-in-out';
//   sc.style.transform = 'translateX(-215px)';
// });

// back.addEventListener('click', () => {
//   sc.style.transition = 'transform 0.3s ease-in-out';
//   sc.style.transform = 'translateX(0)';
// });