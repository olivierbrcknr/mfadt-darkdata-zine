const initCategoryDrawers = () => {
  const drawers = document.querySelectorAll(".categoryDrawer");

  for (const drawer of drawers) {
    drawer.querySelector(".drawerButton").addEventListener("click", () => {
      drawer.classList.toggle('--isOpen')
    });
  }
}


const formatArticleHeaders = () => {
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

//adds vertical styling for portrait images
const formatArticleImages = () => {
  const images = document.querySelectorAll("article img")
  images.forEach(image => {
    image.addEventListener("load", () => {
      if (image.height > image.width) {
        image.classList.add("vertical")
      }

      if (image.alt) {
        const caption = document.createElement("caption");
        caption.style.width = image.width + "px";
        caption.innerHTML = image.alt;
        image.parentNode.appendChild(caption);

        window.addEventListener("resize", () => {
          caption.style.width = image.width + "px";
        })
      }
    })
  })
}

const smoothScroll = () => {

  const clickHandler = (e) => {

    e.preventDefault();
    const href = e.target.getAttribute("href");
    const drawer = document.querySelector(href);

    drawer.classList.add('--isOpen')

    setTimeout(() => {

      let offsetTop = drawer.getBoundingClientRect().top + window.scrollY;
      offsetTop -= 56 - 3; // height of navBar - border

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });

    }, 210)
  }

  const links = document.querySelectorAll("nav a");

  for (const link of links) {
    // only add smoothscroll if has an anchor
    if (link.getAttribute("href").includes('#')) {
      link.addEventListener("click", clickHandler);
    }
  }
}

const initMobileMenu = () => {
  const nav = document.querySelector("nav")
  const navMenuButton = document.querySelector(".nav-menu-btn")
  const navMenu = document.querySelector(".nav-menu")
  const navLinks = document.querySelectorAll(".nav-menu-links a")

  const toggleMenu = () => {
    nav.classList.toggle("--isOpen")
    navMenu.classList.toggle("--isOpen")
  }

  navMenuButton.addEventListener("click", toggleMenu)
  navLinks.forEach(link => link.addEventListener("click", toggleMenu))
}



document.addEventListener("DOMContentLoaded", function () {

  initCategoryDrawers();

  smoothScroll();

  formatArticleHeaders();
  formatArticleImages();

  initMobileMenu();
});