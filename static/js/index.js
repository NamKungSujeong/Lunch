//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

var t_dropdown = document.getElementsByClassName("toggle-dropdown-btn");
var i;

for (i = 0; i < t_dropdown.length; i++) {
  t_dropdown[i].addEventListener("click", function () {
    this.classList.toggle("t_active");
    var t_dropdownContent = this.nextElementSibling;
    if (t_dropdownContent.style.display === "block") {
      t_dropdownContent.style.display = "none";
    } else {
      t_dropdownContent.style.display = "block";
    }
  });
}

//토클 메뉴

const iconMenu = document.querySelector(".icon");
const toggleMenu = document.querySelector(".toggle-menu");

iconMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("d-none");
});

// Modal 창 구현
const modal = document.querySelector(".modal");
const btnModal = document.querySelectorAll(".popup");

for (let i = 0; i < btnModal.length; i++) {
  btnModal[i].addEventListener("click", (e) => {
    modal.style.display = "flex";
  });
}

// X 부분 클릭하면 창 닫기
const closeBtn = modal.querySelector(".close-area");
closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
  tot = 0;
  pay = 0;

  $("#total").empty();
  $("#payment").empty();
  $(".lists").empty();
  document.body.classList.remove("stop-scroll");
});

// Modal 창 외의 부분 클릭 했을 떄 창 닫기
modal.addEventListener("click", (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains("modal-overlay")) {
    modal.style.display = "none";
    tot = 0;
    pay = 0;
    $("#total").empty();
    $("#payment").empty();
    $(".lists").empty();
    document.body.classList.remove("stop-scroll");
  }
});

// 카드 숨기기

function changeStyle() {
  let retry = document.querySelector(".retry");
  var element = document.getElementById("myDiv");

  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }

  var random = document.querySelector(".random");
  if (random.style.display === "flex") {
    random.style.display = "none";
  } else {
    random.style.display = "flex";
    retry.style.display = "block";
  }
}

// 서치 기능
function search() {
  const searchbox = document.getElementById("search-item").value.toUpperCase();
  const storeitems = document.getElementById("product-list");
  const product = document.querySelectorAll(".card");
  const pname = storeitems.getElementsByTagName("p");

  for (var i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName("p")[0];

    if (match) {
      let textvalue = match.textContent || match.innerHTML;

      if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
        product[i].style.display = "";
      } else {
        product[i].style.display = "none";
      }
    }
  }
}
