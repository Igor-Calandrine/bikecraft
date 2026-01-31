export function EntradaAnimada(elemento) {
   this.elemento = document.querySelector(`${elemento}`)
}

EntradaAnimada.prototype.animarPosiçãoLoad = function(x, y, z, t) {
   this.elemento.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`
   this.elemento.style.opacity = 0
   this.elemento.style.transition = `${t}s`

   window.addEventListener("pageshow", () => {
   this.elemento.style.transform = `translate3d(0px, 0px, 0px)`
   this.elemento.style.opacity = 1
})
}

EntradaAnimada.prototype.animarDelay = function(delay) {
   this.elemento.style.transitionDelay = `${delay}s`
}

EntradaAnimada.prototype.animarScroll = function(x, y, z, t) {

   window.addEventListener("scroll", () => {
      const rect = this.elemento.getBoundingClientRect()

      if (rect.top <= window.innerHeight*0.85 && rect.bottom >= 0) {
         this.elemento.style.transform = `translate3d(0px, 0px, 0px)`
         this.elemento.style.opacity = 1
      } else if (rect.top > window.innerHeight) {
         this.elemento.style.position = "relative"
         this.elemento.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`
          this.elemento.style.opacity = 0
          this.elemento.style.transition = `${t}s`
      }

   })
}

