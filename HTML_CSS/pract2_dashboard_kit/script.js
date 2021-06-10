var headers = document.querySelectorAll(".subexp .todoList .todo .opnPop ");
for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener("click", penAccordion);
}

function penAccordion() {
  let parent = this.parentElement.parentElement;
  let article = this.parentElement.nextElementSibling;
  if (!parent.classList.contains("open")) {
    parent.classList.add("open");
    article.style.maxHeight = article.scrollHeight + "px";
  } else {
    parent.classList.remove("open");
    article.style.maxHeight = "0px";
  }
}

var makeNotice = document.querySelectorAll(".createTask .trigger");
for (let i = 0; i < makeNotice.length; i++) {
  makeNotice[i].addEventListener("click", openAccordion);
}

function openAccordion() {
  let parent = this.parentElement;
  let article = this.nextElementSibling;

  if (!parent.classList.contains("pen")) {
    parent.classList.add("pen");
    article.style.maxHeight = article.scrollHeight + "px";
  } else {
    parent.classList.remove("pen");
    article.style.maxHeight = "0px";
  }
}

var fas = document.querySelectorAll(".fa-ellipsis-v");
for (let i = 0; i < fas.length; i++) {
  fas[i].addEventListener("click", oopenAccordion);
}

function oopenAccordion() {
  let parent = this.parentElement;
  let article = this.nextElementSibling;

  if (!parent.classList.contains("oopen")) {
    parent.classList.add("oopen");
    article.style.maxHeight = article.scrollHeight + "px";
  } else {
    parent.classList.remove("oopen");
    article.style.maxHeight = "0px";
  }
}
