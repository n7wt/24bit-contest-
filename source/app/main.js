window.addEventListener("load", function() {

    
    var preloader = document.querySelector(".preloader");
    setTimeout(function() {
      preloader.querySelector(".preloader-text").classList.add("preloader-fade-out-text");
      preloader.querySelector(".preloader-text").classList.remove("preloader-fade-in-text");
    }, 2000);
  
    preloader.classList.add("show");
      
      setTimeout(function() {
        preloader.classList.remove("show");
      }, 2000);
      

    setTimeout(function() {
        preloader.style.display = "none";
      }, 2500);
  });


  
   
