import {EntradaAnimada} from "./script.js";

const pEntrada = new EntradaAnimada(".titulo p")
pEntrada.animarPosiçãoLoad(-450, 0, 0, 2)

const h1Entrada = new EntradaAnimada(".titulo h1")
h1Entrada.animarPosiçãoLoad(-450, 0, 0, 2)
h1Entrada.animarDelay(1)

const h2Locais = new EntradaAnimada("#titulo-locais")
h2Locais.animarScroll(-450, 0, 0, 2)

const rioLocal = new EntradaAnimada(".container-rj")
rioLocal.animarScroll(-450, 0, 0, 2)

const spLocal = new EntradaAnimada(".container-sp")
spLocal.animarScroll(450, 0, 0, 2)

