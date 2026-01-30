import {EntradaAnimada} from "./script.js";

const pEntrada = new EntradaAnimada(".titulo p")
pEntrada.animarPosiçãoLoad(-450, 0, 0, 2)

const h1Entrada = new EntradaAnimada(".titulo h1")
h1Entrada.animarPosiçãoLoad(-450, 0, 0, 2)
h1Entrada.animarDelay(1)

const links_param = new URLSearchParams(location.search)
console.log(links_param)
links_param.forEach((value, key) => {
    console.log(value, key)
})

const produto = links_param.get("bik-seg")
const item_seguro = links_param.get("plano")
const item_bike = links_param.get("bik-bik")

const radios = document.querySelectorAll("input[type='radio']")
console.log(radios)

radios.forEach(radio => {
    if (radio.name === "bik-seg" && radio.value == produto) {
        radio.checked = true
    }

    if (radio.name === "plano" && radio.value == item_seguro) {
        radio.checked = true
    }

    if (radio.name === "bik-bik" && radio.value == item_bike) {
        radio.checked = true
    }
})