let span = document.querySelector(".up");

window.onscroll = () => {
  if (this.scrollY >= 745) span.classList.add("show");
  else span.classList.remove("show");
};

span.onclick = () => {
  window.scrollTo(0, 0);
};
