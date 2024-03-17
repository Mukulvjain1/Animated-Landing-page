function cursorAnimationEffect() {
  const cursor = document.querySelector("#cursor");
  const page1Content = document.querySelector("#page1-content");
  page1Content.addEventListener("mousemove", (event) => {
    // cursor.style.left=event.x +"px"
    // cursor.style.top=event.y +"px"
    //these can be used but for better animation we can use library in my case i am using gsap library
    gsap.to(cursor, {
      x: event.x,
      y: event.y,
    });
  });
  // This eventlistner monitors mouse movement simultaneously. In the arrow function, the parameter 'event' captures mouse movement data. While 'event' can be replaced with any valid variable name (e.g., "sjkadbkjs sddhfjsd d sddjbsdkg jsd g sdghs"), it's advisable to use meaningful parameter names. Logging the event provides values like mouse movements along the x and y axis, enabling precise tracking of the cursor's position.
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 1,
    });
  });
}
cursorAnimationEffect();
