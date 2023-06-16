document.addEventListener('DOMContentLoaded', function(event) {
	function handleScroll() {
	    var scroll = window.pageYOffset || document.documentElement.scrollTop;
	    var header = document.querySelector('.header');
	    if (scroll > 1) {
	        header.classList.add('scroll');
	    } else {
	        header.classList.remove('scroll');
	    }
	}
	handleScroll();
	window.addEventListener('scroll', handleScroll); 
	document.querySelector('.header__burger').addEventListener('click', function(event) {
	    var headerBurger = document.querySelector('.header__burger');
	    var menu = document.querySelector('.menu');
	    var body = document.querySelector('body');
	    headerBurger.classList.toggle('active');
	    menu.classList.toggle('active');
	    body.classList.toggle('lock');
	});

	var menuLinks = document.querySelectorAll('.menu__link');
	menuLinks.forEach(function(link) {
	    link.addEventListener('click', function(event) {
	        var headerBurger = document.querySelector('.header__burger');
	        var menu = document.querySelector('.menu');
	        var body = document.querySelector('body');
	        headerBurger.classList.remove('active');
	        menu.classList.remove('active');
	        body.classList.remove('lock');
	    });
	});

	var questionsTop = document.querySelectorAll('.questions__top');
	if(questionsTop){
		questionsTop.forEach(function(questionsTop) {
		    questionsTop.addEventListener('click', function(event) {
		    		questionsTop.classList.toggle('active');
		        slideToggle(questionsTop.nextElementSibling);
		    });
		});		
	}

	function slideToggle(element) {
	  var target = element.style;
	  target.transition = 'all 0.3s ease-in-out';
	  if (target.maxHeight) {
	    target.maxHeight = null;
	    element.classList.remove('active');
	  } else {
	    target.maxHeight = element.scrollHeight + 'px';
	    element.classList.add('active');
	  }
	}

  const calcsel = document.querySelectorAll(".calculate__sel");
  if(calcsel){
	  function disableRequiredInputs() {
	    var elements = document.querySelectorAll("[data-content]:not(.target) [required]");
	    for (var i = 0; i < elements.length; i++) {
	      elements[i].disabled = true;
	    }
	    var elements1 = document.querySelectorAll(".target[data-content] [required]");
	    for (var i = 0; i < elements1.length; i++) {
	      elements1[i].disabled = false;
	    }
	  }
	  disableRequiredInputs();
	  calcsel.forEach(function (calcsel) {
	    calcsel.addEventListener("click", function (event) {
	      const dataSel = this.parentNode.querySelectorAll("[data-tab].active");
	      for (let j = 0; j < dataSel.length; j++) {
	        dataSel[j].classList.remove("active");
	      }
	      this.classList.add("active");
	      const target = this.parentNode.parentNode.querySelectorAll("[data-content].target");
	      for (let j = 0; j < target.length; j++) {
	        target[j].classList.remove("target");
	      }
	      const dataTab = this.getAttribute("data-tab");
	      const dataId = document.querySelector(`[data-content="${dataTab}"]`);
	      if (dataId !== null) {
	        dataId.classList.add("target");
	      }
	      disableRequiredInputs();
	    });
	  });  	
  }

  if(document.querySelector('.reviews__swiper')){
      new Swiper('.reviews__swiper', {
        speed: 600,
        spaceBetween: 0,
        slidesPerView: 1,
        loop:true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
      });
   }
});