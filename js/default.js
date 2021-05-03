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

let initCategoryDrawers = () =>  {
  const drawers = document.querySelectorAll(".categoryDrawer");

  for (const drawer of drawers) {
    drawer.querySelector(".drawerButton").addEventListener("click", ()=>{
      drawer.classList.toggle('--isOpen')
    });
  }
}


let formatArticleHeaders = () => {
  const headers = document.querySelectorAll("h1");
  headers.forEach(header => {
    const words = header.innerText.replace(/\n/, " ").split(" ")
    const medianIndex = header.innerText.length / 2
    const splitIndex = Math.floor(words.length / 2)
    const set1 = words.slice(0, splitIndex);
    const set2 = words.slice(splitIndex);
    if (set1.join(" ").length < medianIndex) {
      //move 1 word from set 2 to set 1
      set1.push(set2.shift())
    }
    if (set1.join(" ").length > medianIndex * 1.25) {
      //move 1 word from set 1 to set 2
      set2.unshift(set1.pop())
    }
    const formattedHTML = `<span>${set1.join(" ")}</span><br><span>${set2.join(" ")}</span>`
    header.innerHTML = formattedHTML
  })
}

document.addEventListener("DOMContentLoaded", function(){

  initCategoryDrawers();

  smoothScroll();
  
  formatArticleHeaders();
});
