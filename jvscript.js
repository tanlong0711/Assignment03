"use strict";
const submit = document.getElementById("submit-info");
submit.addEventListener("click", function () {
  // Lay gia tri cua input va chuyen sang in thuong
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  //Lay element cua the p hien thi loi

  //Dieu kien de la mot email
  const checkEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //Dung match de kiem tra voi email vua nhap
  const check = emailValue.match(checkEmail);
  const content = document.querySelector("#personal-info .section-content");
  const input = document.querySelector("#personal-info .section-input");
  const errorEmail = document.querySelector("#personal-info p");
  if (check) {
    content.classList.remove("hide");
    input.classList.add("hide");
  } else {
    errorEmail.textContent = "Vui lòng nhập đúng email";
    errorEmail.style.color = "red";
    errorEmail.style.fontWeight = "700";
  }
});
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.classList.remove("hide");
}
function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".view-more");
  viewMore.classList.add("hide");
}

const viewMore = document.querySelector("#interest .view-more");
viewMore.addEventListener("click", function () {
  if (viewMore.classList.value.includes("view-more")) {
    document
      .querySelector("#interest .job-content-icon")
      .classList.remove("hide");
    document.querySelector("#interest button").classList.remove("hide");
    document
      .querySelector("#interest .view-more")
      .classList.remove("view-more");
    document.querySelector("#interest button").textContent = "▲View Less";
    document.querySelector("#interest").classList.add("hhhh");
  } else {
    document.querySelector("#interest .job-content-icon").classList.add("hide");
    document.querySelector("#interest button").classList.add("view-more");
    document.querySelector("#interest button").classList.add("hide");
    document.querySelector("#interest button").textContent = "▼View More";
    document.querySelector("#interest").classList.remove("hhhh");
  }
});

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  console.log(parentElement);
  const viewMore = parentElement.querySelector(".job-content");
  const buttonMore = parentElement.querySelector(".btn");

  if (element.classList.value.includes("view-more")) {
    viewMore.classList.remove("hide");
    buttonMore.classList.remove("hide");
    buttonMore.classList.remove("view-more");
    buttonMore.textContent = "▲View Less";
    parentElement.classList.add("hhhh");
  } else {
    viewMore.classList.add("hide");
    buttonMore.classList.add("hide");
    buttonMore.classList.add("view-more");
    buttonMore.textContent = "▼View More";
    parentElement.classList.remove("hhhh");
  }
}
