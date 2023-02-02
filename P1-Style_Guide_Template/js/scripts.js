// // var navigation1 = document.getElementById.bind("nav1");

// var navigation1 = function(id){
//     return document.getElementById("nav1");
// }

// function tester(){
//     document.getElementById("nav1").style.backgroundColor = "black";
//     document.getElementById("brand_identity").style.backgroundColor = "lightgray";
//     // console.log("sdfsdfds");
// }

// // const observer = new IntersectionObserver (entries => {
// //     entries.forEach(entry => {
// //         const intersecting = entry.isIntersecting
// //         entry.target.style.backgroundColor = intersecting ? "blue" : "orange"
// //       })
// //     })

// // observer.observe(document.getElementById("brand_identity"));

// const sections = [...document.querySelectorAll('[data-section]')]

// console.log(sections);

// const options = {
//     root: document.querySelector('[data-scroll-root]'),
//     rootMargin: '0px',
//     threshold: 0
//   }
  
// const callback = (entries, observer) => {
// entries.forEach((entry) => console.log(entry))
// }

// // const observer = new IntersectionObserver(callback, options)

// const targetEl = document.querySelector('[data-target]')

// const onIntersect = (entries) => {
//     entries.forEach((entry) => {
//       header.getElementById(entry).style.backgroundColor = "black";
//       console.log(entry);
//     })
// }

// /* Create the observer */
// const observer = new IntersectionObserver(onIntersect, options)

// /* Set our observer to observe each section */
// sections.forEach((section) => {
//   observer.observe(section)
//   console.log(section)
// })


// /* Javascript sources


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_backgroundcolor



// */