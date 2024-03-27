function cursorAnimationEffect() {
  const cursor = document.querySelector("#cursor");
  const page1Content = document.querySelector("#page1-content");
  page1Content.addEventListener("mousemove", (event) => {
    // cursor.style.left=event.x +"px"
    // cursor.style.top=event.y +"px"
    //these can be used but for better animation we can use library in my case i am using gsap library
    gsap.to(cursor, {
      x: event.x,
      y: event.y
    });
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0
      });
    }, 100);
  });
  // This eventlistner monitors mouse movement simultaneously. In the arrow function, the parameter 'event' captures mouse movement data. While 'event' can be replaced with any valid variable name (e.g., "sjkadbkjs sddhfjsd d sddjbsdkg jsd g sdghs"), it's advisable to use meaningful parameter names. Logging the event provides values like mouse movements along the x and y axis, enabling precise tracking of the cursor's position.
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0
    });
  });
}


cursorAnimationEffect();


function page2Animation(){
  gsap.from (".elem h1",{
    y:120,
    stagger:0.2,
    duration:1,
    scrollTrigger:{
      trigger:'page2',
      scroller:"#main",
      start:"top 36%",
      // markers:true,
      scrub:2
    }
  })
}


function locomotiveScroll(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



}


locomotiveScroll()