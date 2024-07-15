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
    study: "View Case Study  &#8594;"
  },
  {
    title: "Powered by advance",
    subtitle: "NASA",
    description: "algorithms",
    id:"ABC 873",
    comming:"Comming Soon",
    study: "View Case Study  &#8594;"
  },
  {
    title: "The Mext Big",
    subtitle: "BlockChain",
    description: "Revolution",
    id:"ABC 467",
    comming:"Comming Soon",
    study: "View Case Study  &#8594;"
  },
  {
    title: "25M+ Downloads",
    description: "On Oppstore & google playstore",
    id:"ABC 983",
    comming:"Comming Soon",
    study: "View Case Study  &#8594;"
  },

  {
    title: "Developing ERP Solution for",
    subtitle:"Text Headline",
    description: "in frniture industry",
    id:"ABC 986",
    comming:"Comming Soon",
    study: "View Case Study  &#8594;"
  },
  {
    title: "Solution for",
    subtitle:"Text Headline",
    description: "in frniture industry",
    id:"ABC 326",
    comming:"Comming Soon",
    study: "View Case Study  &#8594;"
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
        document.querySelector("#title").innerText =  path.style.strokeMiterlimit =`${240 * index}`;
        document.querySelector(".left-section h2").innerText = content.subtitle;
        document.querySelector(".left-section p").innerText = content.description;
        document.querySelector(".left-section h3").innerText = content.id;
       if(index % 2 == 0){
        document.querySelector("#btn").innerText = content.comming;
       }else{
        document.querySelector("#btn").innerText = content.study;
       }
      },
      onEnterBack: () => {
        document.querySelector("#title").innerText = content.title;
        document.querySelector(".left-section h2").innerText = content.subtitle;
        document.querySelector(".left-section p").innerText = content.description;
        document.querySelector(".left-section h3").innerText = content.id;
       if(index % 2 == 0){
        document.querySelector("#btn").innerText = content.comming;
       }else{
        document.querySelector("#btn").innerText = content.study;
       }
      },
    }
  });
});


