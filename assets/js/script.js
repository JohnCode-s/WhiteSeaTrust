document.addEventListener('DOMContentLoaded', () => {

  const imagesDiv = document.querySelectorAll(".img");
  let targets = document.querySelectorAll(".observer");
  
  if (getWidth() > 767) {
    imagesDiv.forEach((div) => {
      div.classList.add("hide");
    });
  } else {
    console.log("Not Running");
  }
  
  function show(target) {
    const targetClass = target.getAttribute("class").split(" ")[2];
    //   now target that specific section
    const curSection = document.querySelector(`#${targetClass}`);
    curSection.parentNode.classList.add("fixed_left");
    //if (curSection.classList.contains('hide')) {
      curSection.classList.remove("hide");
    //}else{
    //  curSection.classList.add("hide");
   // }
  }

  function hide(target) {
    const targetClass = target.getAttribute("class").split(" ")[2];
    //   now target that specific section
    const curSection = document.querySelector(`#${targetClass}`);
    curSection.parentNode.classList.remove("fixed_left");
    if (curSection.classList.contains("hide")) {
      curSection.classList.remove("hide");
    } else {
      curSection.classList.add("hide");
    }
  }

  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          // console.log(`${entry.target} is ${entry.isIntersecting} `);
          hide(entry.target);
        } else {
          // console.log(`${entry.target} is ${entry.isIntersecting} `);
          show(entry.target);
        }
      });
    },
    { root: null, threshold: 0 }
  );



  function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
  }


  if (getWidth() > 767) {
    console.log('Running');
    targets.forEach((target) => {
        observer.observe(target);
    });
  }else{
    console.log('Not Running');
  }
  
  const nav = document.querySelector(".navbar");
 
  window.onscroll = function () {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
      nav.classList.add('white');
      document.querySelector(".logo").classList.add("blue");
      document.querySelectorAll(".color").forEach((btn) => {
        btn.classList.add('blue');
      });      
    } else {
      nav.classList.remove('white');
      document.querySelector(".logo").classList.remove('blue');
       document.querySelectorAll(".color").forEach((btn) => {
         btn.classList.remove('blue');
       });
    }
  }
});