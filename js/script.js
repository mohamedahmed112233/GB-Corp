let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

document.querySelector('#login-btn').onclick = () =>{
  document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>{
  document.querySelector('.login-form-container').classList.remove('active');
}


window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  };

};

document.querySelector('.home').onmousemove = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    let speed = elm.getAttribute('data-speed');

    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;

    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;

  });

};


document.querySelector('.home').onmouseleave = (e) =>{

  document.querySelectorAll('.home-parallax').forEach(elm =>{

    elm.style.transform = `translateX(0px) translateY(0px)`;

  });

};

var swiper = new Swiper(".vehicles-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 20,
  loop:true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function showAlert1(){
  var email = document.getElementById("sub_email").value.trim();
  if(email === "" || email === null){
    alert("Please enter an email to subscribe");
  }else{
    alert("Your email: "+ email +" is subscribed successfully");

  }
}
function showAlert2(){
  var name = document.getElementById("c_name").value.trim();
  var email = document.getElementById("c_email").value.trim();
  var tel = document.getElementById("c_tel").value.trim();
  var msg = document.getElementById("c_msg").value.trim();

  if(name === "" && email === "" && tel === "" && msg === ""){
    alert("All the fields are empty");
  }else if(name === "" && email === "" && tel === ""){
    alert("Three Fields are empty, please fill them");
  }else if(name === "" && email === "" && msg === ""){
    alert("Three Fields are empty, please fill them");
  }else if(name === "" && tel === "" && msg === ""){
    alert("Three Fields are empty, please fill them");
  }else if(email === "" && tel === "" && msg === ""){
    alert("Three Fields are empty, please fill them");
  }else if(name === "" && email === ""){
    alert("Two Fields are empty, please fill them");
  }else if(name === "" && tel === ""){
    alert("Two Fields are empty, please fill them");
  }else if(name === "" && msg === ""){
    alert("Two Fields are empty, please fill them");
  }else if(email === "" && tel === ""){
    alert("Two Fields are empty, please fill them");
  }else if(email === "" && msg === ""){
    alert("Two Fields are empty, please fill them");
  }else if(tel === "" && msg === ""){
    alert("Two Fields are empty, please fill them");
  }else if(name === ""){
    alert("The name is empty");
  }else if(email === ""){
    alert("The email is empty");
  }else if(tel === ""){
    alert("The phone is empty");
  }else if(msg === ""){
    alert("The message is empty");
  }else{
    alert("Message sent successfully");
  }
  
}