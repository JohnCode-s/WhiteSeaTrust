document.addEventListener('DOMContentLoaded', () => {

  const imagesDiv = document.querySelectorAll(".img");
  let targets = document.querySelectorAll(".observer");
  

  imagesDiv.forEach((div) => {
    div.classList.add("hide");
  });

  function show(target) {
    const targetClass = target.getAttribute("class").split(" ")[2];
    //   now target that specific section
    const curSection = document.querySelector(`#${targetClass}`);
    curSection.parentNode.classList.add("fixed_left");
    curSection.classList.remove('hide');
  }

  function hide(target) {
    const targetClass = target.getAttribute("class").split(" ")[2];
    //   now target that specific section
    const curSection = document.querySelector(`#${targetClass}`);
    curSection.parentNode.classList.remove("fixed_left");
    curSection.classList.add('hide');
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
  

});