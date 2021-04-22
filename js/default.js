let smoothScroll = () => {
  const links = document.querySelectorAll("nav a");

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    let offsetTop = document.querySelector(href).offsetTop;
    offsetTop -= 20;

    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }
}

document.addEventListener("DOMContentLoaded", function(){
  console.log('DOM ready');
});
