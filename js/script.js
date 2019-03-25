
var BtnWriteUS = document.querySelector(".write-us");
var PopUpWriteUs = document.querySelector(".modal-write-us");
var closeWriteUs = document.querySelector(".close");
var FormWriteUs = document.querySelector(".modal-write-us form");
var yourName = document.querySelector("[name=name]");
var yourEmail = document.querySelector("[name=email]");
var yourText = document.querySelector("[name=textarea]");

BtnWriteUS.addEventListener("click", function(evt) {
    evt.preventDefault();
    PopUpWriteUs.classList.add("modal-show");
    yourName.focus();
});

closeWriteUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    PopUpWriteUs.classList.remove("modal-show");
    PopUpWriteUs.classList.remove("modal-error");
});

FormWriteUs.addEventListener("submit", function(evt) {
    if (!yourName.value || !yourEmail.value|| !yourText.value) {
        evt.preventDefault();
        PopUpWriteUs.classList.add("modal-error");
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (PopUpWriteUs.classList.contains("modal-show")) {
            PopUpWriteUs.classList.remove("modal-show");
            PopUpWriteUs.classList.remove("modal-error");
        }
    }
});