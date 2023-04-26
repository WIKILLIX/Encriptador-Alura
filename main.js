"use strict";
const encriptar = document.getElementById("encriptar");
const desencriptar = document.getElementById("desencriptar");
const copiar = document.getElementById("copy");
const containertText = document.getElementById("container-text");
const containerNoneText = document.getElementById("container-none-text");
const input = document.querySelector("#input-text");
const listText = document.querySelector("#list-text");
const messageCopied = document.querySelector("#message-copied");
const llaves = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};
const arrayListText = [];
let textTemporal;

const validateClass = () => {
  if (arrayListText[0] !== undefined) {
    containertText.classList.remove("hidden");
    containerNoneText.classList.add("hidden");
  } else {
    containertText.classList.add("hidden");
    containerNoneText.classList.remove("hidden");
  }
};

const AllIcons = function () {
  return document.querySelectorAll("li");
};

const escribirTexto = () => {
  listText.innerHTML = "";
  arrayListText.forEach((letra) => {
    listText.innerHTML += `<li  class="pt-5 pb-5 border border-1 border-black rounded-3xl relative list-none text-center"> <i
    class="fa fa-copy absolute -top-2 -right-2 border border-1 border-black w-7 h-7 p-1 rounded-lg bg-white cursor-pointer transition-all duration-200 hover:scale-105"  id="icon-copy"
  ></i>${letra}</li><br>`;
  });
  recorrerAllIcons();
};
/**
 * Encrypts the text input value using the keys defined in the llaves object.
 * If the input value is empty, an alert message is displayed.
 *
 * @returns {void}
 */

const encriptarText = () => {
  textTemporal = "";
  input.value.split("").forEach((letra) => {
    if (llaves[letra]) {
      textTemporal += llaves[letra];
    } else {
      textTemporal += letra;
    }
  });
  if (textTemporal === "") {
    return;
  }
  arrayListText.push(textTemporal);

  escribirTexto();
  validateClass();
};

const desencriptarText = () => {
  textTemporal = input.value;
  for (const object in llaves) {
    if (input.value.includes(llaves[object])) {
      textTemporal = textTemporal.replaceAll(llaves[object], object);
    }
  }
  if (textTemporal === "") {
    return;
  }
  arrayListText.push(textTemporal);
  escribirTexto();
  validateClass();
};

encriptar.addEventListener("click", encriptarText);

desencriptar.addEventListener("click", desencriptarText);

const recorrerAllIcons = () => {
  AllIcons().forEach((item) => {
    item.children[0].addEventListener("click", () => {
      navigator.clipboard
        .writeText(item.textContent)
        .then(() => {
          messageCopied.classList.remove("scale-0");
          setTimeout(() => {
            messageCopied.classList.add("scale-0");
          }, 1500);
        })
        .catch((e) => {
          console.log(e);
        });
    });
  });
};
