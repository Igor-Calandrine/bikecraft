import {EntradaAnimada} from "./script.js";

const pEntrada = new EntradaAnimada(".titulo p")
pEntrada.animarPosiçãoLoad(-450, 0, 0, 2)

const h1Entrada = new EntradaAnimada(".titulo h1")
h1Entrada.animarPosiçãoLoad(-450, 0, 0, 2)
h1Entrada.animarDelay(1)

const nimbusImg = new EntradaAnimada(".nimbus-img")
nimbusImg.animarPosiçãoLoad(-450, 0, 0, 2)
const nimbusTexto = new EntradaAnimada(".nimbus-texto")
nimbusTexto.animarPosiçãoLoad(-450, 0, 0, 2)

const magicImg = new EntradaAnimada("#magic-img")
magicImg.animarScroll(650, 0, 0, 2)
const magicTexto = new EntradaAnimada("#magic-texto")
magicTexto.animarScroll(650, 0, 0, 2) 

const nebulaImg = new EntradaAnimada("#nebula-img")
nebulaImg.animarScroll(-450, 0, 0, 2)
const nebulaTexto = new EntradaAnimada("#nebula-texto")
nebulaTexto.animarScroll(-450, 0, 0, 2) 