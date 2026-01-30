import {EntradaAnimada} from "../script.js";

const pEntrada = new EntradaAnimada(".titulo p")
pEntrada.animarPosiçãoLoad(-450, 0, 0, 2)

const h1Entrada = new EntradaAnimada(".titulo h1")
h1Entrada.animarPosiçãoLoad(-450, 0, 0, 2)
h1Entrada.animarDelay(0.5)

const escolhaTitulo = new EntradaAnimada("#titulo-escolha")
escolhaTitulo.animarScroll(-450, 0, 0, 2)

const pedaleConteudo = new EntradaAnimada(".pedale-conteudo")
pedaleConteudo.animarScroll(450, 0, 0, 2)