"use strict";
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiar = document.getElementById("copy");
const textEncriptado = document.getElementById("texto-encriptado");
const containertText = document.getElementById("container-text");
const containerNoneText = document.getElementById("container-none-text");
const input = document.querySelector("#input-text");

encriptar.addEventListener("click", () => {
  if (!input.value) {
    alert("ingrese un texto no sea imbecil");
  } else {
  }
});

desencriptar.addEventListener("click", () => {});

copiar.addEventListener("click", () => {});
