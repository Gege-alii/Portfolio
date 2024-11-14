document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  });

   document.addEventListener("DOMContentLoaded", function () {
    new Typed("#intro-text", {
      strings: ["Gehan Ali", "Full Stack Developer"],
      typeSpeed: 100,       
      backSpeed: 60,       
      loop: true,          
      backDelay: 1500,    
      startDelay: 500,     
    });
  });

  gsap.registerPlugin(ScrollTrigger);
  if (window.innerWidth > 768) {
    gsap.from(".service-item", {
        scrollTrigger: {
            trigger: ".service-item",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3
    });
}
  // Button click event for CV download
  document.querySelector('.btn').addEventListener('click', function() {
    window.location.href = 'GehanAli.Cv.pdf';  
  });


  $(document).ready(function() {
    const imageWrapper = $(".image-wrapper");

    imageWrapper.on("mouseenter", function() {
        gsap.to($(this), { rotationY: 10, rotationX: 10, duration: 0.4, ease: "power2.out" });
    });

    imageWrapper.on("mouseleave", function() {
        gsap.to($(this), { rotationY: 0, rotationX: 0, duration: 0.4, ease: "power2.out" });
    });
});


// slider

  const projects = [
    {
      number: "01",
      title: "E-commerce",
      description1: "- Website of E-commerce products with the ability of adding them to cart and real Checkout using Angular Components. ",
      description2: " using : HTML, bootstrap, Typescript, Angular.",
      image: "proj1.png",
      icon1:"",
      icon2:"https://cartshop-eosin.vercel.app"
    },
    {
      number: "02",
      title: "Yummy Website",
      description1: "-using an API of food recipes to show it and its ingredients ",
      description2: "using : bootstrap, Javascript, API.",
      image: "proj2.png",
      icon1:"",
      icon2:"https://gehanali.github.io/EXAM-YUMMY/"
    },
    {
      number: "03",
      title: "Weather App",
      description1: "-weather App to check the weather conditions of any city for the following 5 days",
      description2: "using: HTML, CSS, bootstrap, Angular, Weather API.",
      image: "proj3.png",
      icon1:"",
      icon2:"https://ng-weather-app.vercel.app/"
    },
    {
      number: "04",
      title: "Movie App",
      description1: "- The Movie App uses the Movie Database (TMDb) API to provide movie details and browsing by categories. It includes a responsive image slider for showcasing movie posters and a modern, engaging UI.",
      description2: "using: HTML, CSS, bootstrap, Javascript.",
      image: "proj4.png",
      icon1:"",
      icon2:"https://gege-alii.github.io/movie_app/"
    },
    {
      number: "05",
      title: "E-commerce-NG",
      description1: "- This e-commerce project is a simple online store platform that displays products from the Fake Store API. Users can browse a curated selection of items, specifically focused on categories like women's clothing with a complete User registration and login functionality.",
      description2: "using: HTML, CSS, bootstrap, Angular.",
      image: "proj5.png",
      icon1:"",
      icon2:"https://products-shop-zmfj.vercel.app/home"
    },
    {
      number: "06",
      title: "E-commerce-php",
      description1: "- This PHP-based e-commerce platform is designed for a clothing store and supports both Arabic and English users. It enables account registration, login, product browsing, cart management, and CRUD operations on user accounts. The bilingual interface enhances accessibility for a diverse audience.",
      description2: "using: HTML, CSS, bootstrap, PHP",
      image: "proj6.png",
      icon1:"",
      icon2:"https://github.com/Gege-alii/phpcommerce/tree/master"
    },
    {
      number: "07",
      title: "Interior Design",
      description1: "-Interior Design Landing Page.",
      description2: "using: HTML, CSS, bootstrap",
      image: "proj7.png",
      icon1:"",
      icon2:"https://gege-alii.github.io/Landing_page_2/  "
    },
    {
      number: "08",
      title: "To-Do List Application",
      description1: "-A simple to-do list application that allows users to add, edit, delete, and mark tasks as completed. The application is built using HTML, CSS, and JavaScript and stores tasks using localStorage to maintain persistence even after page reloads.",
      description2: "using: HTML, CSS, JavaScript",
      image: "proj8.png",
      icon1:"",
      icon2:"https://gege-alii.github.io/to_do_list/"
    },
    {
      number: "09",
      title: "Landing Page",
      description1: "- Responsive Website using Bootstrap.",
      description2: "using: HTML, CSS, bootstrap, AOS Library.",
      image: "proj9.png",
      icon1:"",
      icon2:"https://gege-alii.github.io/bootstrap/  "
    },
    {
      number: "10",
      title: "Landing Page-JQ",
      description1: "- Responsive WebPage using JQuery.",
      description2: "using: HTML, CSS, bootstrap, Javascript, jQuery",
      image: "proj10.png",
      icon1:"",
      icon2:"https://gege-alii.github.io/Jquery/"
    },
  ];

  let currentProject = 0;
  function showProject(index) {
    const projectInfo = document.getElementById("projectInfo");
    const projectImage = document.getElementById("projectImage");

    projectInfo.style.opacity = "0";
    projectImage.style.opacity = "0";
    projectInfo.style.transform = "translateX(-20px)";
    projectImage.style.transform = "translateX(-20px)";

    setTimeout(() => {
        const project = projects[index];
        document.getElementById("projectNumber").textContent = project.number;
        document.getElementById("projectTitle").textContent = project.title;
        document.getElementById("projectDescription1").textContent = project.description1;
        document.getElementById("projectDescription2").textContent = project.description2;
        document.getElementById("icon1").href = project.icon1;
        document.getElementById("icon2").href = project.icon2;
        document.getElementById("projectImage").querySelector("img").src = project.image;

        projectInfo.style.opacity = "1";
        projectImage.style.opacity = "1";
        projectInfo.style.transform = "translateX(0)";
        projectImage.style.transform = "translateX(0)";
        AOS.refresh();
    }, 100);
}


  function nextSlide() {
    currentProject = (currentProject + 1) % projects.length;
    showProject(currentProject);
  }

  function prevSlide() {
    currentProject = (currentProject - 1 + projects.length) % projects.length;
    showProject(currentProject);
  }
 
  showProject(currentProject);
 
  let startX = 0;

  // For mobile touch events
  document.getElementById("projectImage").addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  document.getElementById("projectImage").addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    handleSwipe(startX, endX);
  });

  // For mouse events
  document.getElementById("projectImage").addEventListener("mousedown", (e) => {
    startX = e.clientX;
    console.log("Mouse down at:", startX);
  });

  document.getElementById("projectImage").addEventListener("mouseup", (e) => {
    const endX = e.clientX;
    console.log("Mouse down at:", startX);
    handleSwipe(startX, endX);
  });

  function handleSwipe(startX, endX) {
    const threshold = 50; 
    if (endX - startX > threshold) {
      prevSlide();
    } else if (startX - endX > threshold) {
      nextSlide();
    }
  }



  // navigation links

  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    function updateActiveLink() {
      let scrollPosition = window.scrollY + 60; 
      document.querySelectorAll('section').forEach(function (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const sectionId = section.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active'); 
            if (link.getAttribute('href').includes(sectionId)) {
              link.classList.add('active'); 
            }
          });
        }
      });
    }
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
  });




//  Contact

  emailjs.init("TbhJ3j8pn3Ie5EJj-");
  document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault();

const templateParams = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value
};

emailjs.send("service_d7y4wen", "template_wm52def", templateParams)
.then(function(response) {
    Swal.fire({
          icon: 'success',
          title: 'Message sent!',
          text: 'Your message was sent successfully Thanks for contact me. I\'ll respond you shortly',
          showConfirmButton: false,
          timer: 3000
        });
  document.getElementById("contactForm").reset();
}, function(error) {
  console.error("Failed to send message:", error);
  Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to send message. Please try again.'
    });
});
});

  