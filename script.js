// // GSAP ScrollTrigger animations
// gsap.registerPlugin(ScrollTrigger);

// const sections = document.querySelectorAll(".right-section section");
// const leftContent = document.getElementById("left-content");

// // left side content will be change
// sections.forEach((section, index) => {
//   ScrollTrigger.create({
//     trigger: section,
//     start: "top center",
//     end: "bottom center",
//     onEnter: () => updateLeftContent(index),
//     onEnterBack: () => updateLeftContent(index),
//   });
// });

// function updateLeftContent(index) {
//   leftContent.innerHTML = `
//     <h1 class="text-3xl font-bold">Section ${index + 1}</h1>
//     <p class="mt-4">Content for section ${index + 1}.</p>
//   `;
// }


// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate left section content change
const leftSectionContent = [
  {
    title: "Redefining",
    subtitle: "UX Strategy",
    description: "and UI design",
    id:"ABC 453",
    comming:"Comming Soon",
    study: "View Case Study ",
    left_color : "#1e1b4b",
    right_color: "#1c1917"

  },
  {
    title: "Powered by advance",
    subtitle: "NASA",
    description: "algorithms",
    id:"ABC 873",
    comming:"Comming Soon",
    study: "View Case Study ",
    left_color : "#2e1065",
    right_color: "#4c1d95"
  },
  {
    title: "The Mext Big",
    subtitle: "BlockChain",
    description: "Revolution",
    id:"ABC 467",
    comming:"Comming Soon",
    study: "View Case Study",
     left_color : "#2563eb",
    right_color: "#115e59"
  },
  {
    title: "25M+ Downloads",
    description: "On Oppstore & google playstore",
    id:"ABC 983",
    comming:"Comming Soon",
    study: "View Case Study ",
     left_color : "#a855f7",
    right_color: "#115e59"
  },

  {
    title: "Developing ERP Solution for",
    subtitle:"Text Headline",
    description: "in frniture industry",
    id:"ABC 986",
    comming:"Comming Soon",
    study: "View Case Study",
     left_color : "#2e1065",
    right_color: "#4c1d95"
  },
  {
    title: "Solution for",
    subtitle:"Text Headline",
    description: "in frniture industry",
    id:"ABC 326",
    comming:"Comming Soon",
    study: "View Case Study ",
     left_color : "#3b82f6",
    right_color: "#115e59"

  },
  {
    title: "Solution for",
    subtitle:"Text Headline",
    description: "in frniture industry",
    id:"ABC 326",
    comming:"Comming Soon",
    study: "View Case Study ",
     left_color : "#d946ef",
    right_color: "#7e22ce"
  }
];

leftSectionContent.forEach((content, index) => {
  gsap.to(".left-section", {
    scrollTrigger: {
      trigger: `.right-section section:nth-child(${index + 1})`,
      start: "top center",
      end: "bottom center",
      scrub: true,
      onEnter: () => {
        document.querySelector("#title").innerText = content.title;
        document.getElementById('Opaque_Ring').style.strokeDasharray = `${136 * index}, 1000`;
        document.getElementById('transring').style.backgroundColor = content.left_color
        document.querySelector('.left-section').style.backgroundColor = content.left_color
        document.querySelector('#section1').style.backgroundColor = content.right_color
        // document.querySelector(".left-section h2").innerText = content.subtitle;
        // document.querySelector(".left-section p").innerText = content.description;
       document.querySelector("#number").innerHTML = `
        <h3 data-aos="fade-right" id="Id" class="text-4xl font-bold">${content.id}</h3>
        <p id="comming" class="mt-4 w-36">We are the best webdevelopment Compnay in the world</p>`
        document.getElementById("logo").innerHTML = `
         <p data-aos="fade-up">${content.title}</p>
              <h2 data-aos="fade-up" id="title" class="text-5xl font-bold mb-4">${content.subtitle}</h2>
              <p data-aos="fade-up" class="text-right">${content.description}</p>`
       if(index % 2 == 0){
        document.querySelector("#allBtn").innerHTML = `
         <button data-aos="fade-right" id="btn">${content.comming}  &#8594;</button>
          <button>skip</button>`
       }else{
        document.querySelector("#allBtn").innerHTML = `
         <button data-aos="fade-right" id="btn">${content.study}  &#8594;</button>
          <button>skip</button>`
       }
      },
      onEnterBack: () => {
        document.querySelector("#title").innerText = content.title;
        document.getElementById('Opaque_Ring').style.strokeDasharray = `${136 * index}, 1000`;
        document.getElementById('transring').style.backgroundColor = content.left_color
        document.querySelector('.left-section').style.backgroundColor = content.left_color
        document.querySelector('#section1').style.backgroundColor = content.right_color
        // document.querySelector(".left-section h2").innerText = content.subtitle;
        // document.querySelector(".left-section p").innerText = content.description;
       document.querySelector("#number").innerHTML = `
        <h3 data-aos="fade-right" id="Id" class="text-4xl font-bold">${content.id}</h3>
        <p id="comming" class="mt-4 w-36">We are the best webdevelopment Compnay in the world</p>`
        document.getElementById("logo").innerHTML = `
         <p data-aos="fade-up">${content.title}</p>
              <h2 data-aos="fade-up" id="title" class="text-5xl font-bold mb-4">${content.subtitle}</h2>
              <p data-aos="fade-up" class="text-right">${title.description}</p>`
       if(index % 2 == 0){
        document.querySelector("#allBtn").innerHTML = `
         <button data-aos="fade-right" id="btn">${content.comming}  &#8594;</button>
          <button>skip</button>`
       }else{
        document.querySelector("#allBtn").innerHTML = `
         <button data-aos="fade-right" id="btn">${content.study}  &#8594;</button>
          <button>skip</button>`
       }
      },
    }
  });
});

var swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 7,
      spaceBetween: 10,
    }
  }
});
