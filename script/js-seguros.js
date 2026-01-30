import {EntradaAnimada} from "./script.js";

const pEntrada = new EntradaAnimada(".titulo p")
pEntrada.animarPosiçãoLoad(-450, 0, 0, 2)

const h1Entrada = new EntradaAnimada(".titulo h1")
h1Entrada.animarPosiçãoLoad(-450, 0, 0, 2)
h1Entrada.animarDelay(1)

const seguroPrata = new EntradaAnimada("#prata")
seguroPrata.animarPosiçãoLoad(-450, 0, 0, 2)
seguroPrata.animarDelay(1.5)
seguroPrata.animarScroll(-450, 0, 0, 2)

const seguroOuro = new EntradaAnimada("#ouro")
seguroOuro.animarPosiçãoLoad(450, 0, 0, 2)
seguroOuro.animarDelay(1.5)
seguroOuro.animarScroll(450, 0, 0, 2)

const tituloVantagens = new EntradaAnimada(".vantagens")
tituloVantagens.animarScroll(-450, 0, 0, 2)

const tituloPerguntas = new EntradaAnimada("#titulo-perguntas")
tituloPerguntas.animarScroll(-450, 0, 0, 2)

const perguntas = document.querySelectorAll(".perguntas button")

    perguntas.forEach(pergunta => {
      pergunta.addEventListener("click", () => {
        const pergunta_control = pergunta.getAttribute("aria-controls")
        const pergunta_expand = pergunta.getAttribute("aria-expanded")
        const resposta = document.querySelector(`#${pergunta_control}`)
         
        resposta.classList.toggle("pergunta_aparecer")

        if (pergunta_expand === "true") {
            pergunta.setAttribute("aria-expanded", "false")
        }
        else {
            pergunta.setAttribute("aria-expanded", "true")
        }
        
    })
})




