function EntradaAnimada(elemento) {
   this.elemento = document.querySelector(`${elemento}`)
}

EntradaAnimada.prototype.animarEsquerda = function() {
   this.elemento.classList.add("js-posiçãoEsquerda")
   window.addEventListener("load", () => {
   this.elemento.classList.add("js-posiçãoAnimada")
})
}

EntradaAnimada.prototype.animarPosiçãoLoad = function(x, y, z, t) {
   this.elemento.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`
   this.elemento.style.opacity = 0
   this.elemento.style.transition = `${t}s`

   window.addEventListener("load", () => {
   this.elemento.style.transform = `translate3d(0px, 0px, 0px)`
   this.elemento.style.opacity = 1
})
}

EntradaAnimada.prototype.animarScroll = function(x, y, z, t) {

   window.addEventListener("scroll", () => {
      const rect = this.elemento.getBoundingClientRect()

      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
         this.elemento.style.transform = `translate3d(0px, 0px, 0px)`
         this.elemento.style.opacity = 1
      } else if (rect.top > window.innerHeight || rect.bottom < 0) {
         this.elemento.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`
          this.elemento.style.opacity = 0
          this.elemento.style.transition = `${t}s`
      }

   })
}

EntradaAnimada.prototype.animarDelay = function(delay) {
   this.elemento.style.transitionDelay = `${delay}s`
}


const h1Main = new EntradaAnimada(".introducao-conteudo h1")
h1Main.animarPosiçãoLoad(-450, 0, 0, 2)

const pMain = new EntradaAnimada(".introducao-conteudo p")
pMain.animarPosiçãoLoad(-450, 0, 0, 2)
pMain.animarDelay(0.5)

const aMain = new EntradaAnimada(".introducao-conteudo a")
aMain.animarPosiçãoLoad(-450, 0, 0, 2)
aMain.animarDelay(1)

const pictureMain = new EntradaAnimada("main picture")
pictureMain.animarPosiçãoLoad(450, 0, 0, 2)

const h2Article = new EntradaAnimada("article h2")
h2Article.animarScroll(-450, 0, 0, 2)

const bikeImgs = document.querySelectorAll(".bicileta-lista img")
bikeImgs.forEach((item) => {
   item.addEventListener("mouseenter", () => {
      item.style.transition = "1s"
      item.classList.add("js-aumento")
   })
   item.addEventListener("mouseleave", () => {
      item.classList.remove("js-aumento")
   })

})

const tecTexto = new EntradaAnimada(".tecnologia-conteudo")
tecTexto.animarScroll(-450, 0, 0, 3.5)

const tecImg = new EntradaAnimada(".tecnologia-img")
tecImg.animarScroll(450, 0, 0, 3.5)

const h2Section = new EntradaAnimada("section h2")
h2Section.animarScroll(-450, 0, 0, 2)

const logoImgs = document.querySelectorAll(".parceiros-lista img")
logoImgs.forEach((item) => {
   item.addEventListener("mouseenter", () => {
      item.style.transition = "10s"
      item.classList.toggle("js-flip")
   })
})

const h2Seguro = new EntradaAnimada(".seguros-container h2")
h2Seguro.animarScroll(-450, 0, 0, 2)

const prataSeguro = new EntradaAnimada("#seguro-prata")
prataSeguro.animarScroll(-450, 0, 0, 2)
const ouroSeguro = new EntradaAnimada("#seguro-ouro")
ouroSeguro.animarScroll(450, 0, 0, 2)
