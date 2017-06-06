//14 Febrero de 1990 = new Date(Año, mes - 1, dia)

const nacimiento = new Date(1990, 1, 14)
console .log(nacimiento)

const hoy = new Date()
const tiempomil = hoy - nacimiento
const tiemposeg = tiempomil /1000
const tiempomin = tiemposeg / 60
const tiempohor = tiempomin / 60
const tiempodias = tiempohor / 24
const tiempoyear = tiempodias / 365

console.log(`Tu edad es ${tiempoyear} años`)

const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(`Tù proximo cumpleaños es: ${proximoCumple}`)

const diasSemana = [
	"Domingo",
	"Lunes",
	"Martes",
	"Miércoles",
	"Jueves",
	"Viernes",
	"Sabado"

]

const dia = diasSemana[proximoCumple.getDay()]
console.log(dia)