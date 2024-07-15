gsap.from("#section1 div #image1,#image3,#image4", {
  top: -300,
  duration: 2,
});
gsap.from("#section1 div #image5,#image2", {
  bottom: -300,
  duration: 2,
});

gsap.from("#section2", {
  bottom: 300,
  duration: 2,
  scrollTrigger: {
    trigger: "#section2",
    scroller: "body",
    markers: true,
     start: "top 60%",
    backgroundColor : "red"
  },
});

