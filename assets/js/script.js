
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      // Remove active class from all links
      navLinks.forEach(l => l.classList.remove("active"));
      // Add active class to the clicked link
      this.classList.add("active");
    });
  });
});




// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn1");
var btn2 = document.getElementById("openModalBtn2");
var btn3 = document.getElementById("openModalBtn3");
var btn4 = document.getElementById("openModalBtn4");
var btn5 = document.getElementById("openModalBtn5");
var btn6 = document.getElementById("openModalBtn6");
// var btn7 = document.getElementById("openModalBtn7");
// var btn8 = document.getElementById("openModalBtn8");
// var btn9 = document.getElementById("openModalBtn9");
// var btn10 = document.getElementById("openModalBtn10");
// var btn11 = document.getElementById("openModalBtn11");
// var btn12 = document.getElementById("openModalBtn12");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}
function openModal() {
  modal.style.display = 'block';
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
btn2.onclick = function () {
  openModal();
}
btn3.onclick = function () {
  openModal();
}
btn4.onclick = function () {
  openModal();
}
btn5.onclick = function () {
  openModal();
}
btn6.onclick = function () {
  openModal();
}
btn7.onclick = function () {
  openModal();
}
btn8.onclick = function () {
  openModal();
}
btn9.onclick = function () {
  openModal();
}

btn10.onclick = function () {
  openModal();
}
btn11.onclick = function () {
  openModal();
}
btn12.onclick = function () {
  openModal();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



$('.footer-images').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});

$('.customers').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  margin: 20,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);


new Swiper('.testimonials-slide', {
  speed: 600,
  loop: true,
  margin: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

AOS.init({
  once: true
})






var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeSentence(sentence, element, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    document.querySelector(element).append(letters[i]);
    i++;
  }
}

async function deleteSentence(element) {
  const sentence = document.querySelector(element).innerHTML;
  const letters = sentence.split("");
  while (letters.length > 0) {
    await waitForMs(200);
    letters.pop();
    document.querySelector(element).innerHTML = letters.join("");
  }
}


async function sentenceLoop(sentenceList, element) {
  let i = 0;
  while (true) {
    await typeSentence(sentenceList[i], element);
    await waitForMs(1500);
    await deleteSentence(element);
    await waitForMs(500);
    i++;
    if (i >= sentenceList.length) {
      i = 0;
    }
  }
}

sentenceLoop(sentences, "#text");




const scriptURL = ''
const form = document.forms['formName']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => alert("Thank you! your form is submitted successfully."))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
