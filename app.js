let landing = document.querySelector('.landing-page')
let count = 1
landing.style.cssText = `background-image: url(../imgs/0${count}.webp);`

setInterval(() => {
  if (count >= 3) {
    count = 1
  } else {
    count = count + 1
  }


  landing.style.cssText = `background-image: url(../imgs/0${count}.webp);`
}, 5000);