// const tresHoras = 60 * 60 * 3 * 1000
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras - umDia) // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2019, 1, 20, 15, 14, 27, 1000) // ano, mes, dia, hora, minutos, segundos, milisegundos

const data = new Date('2019-04-20 20:20:59')
console.log('Dia', data.getDay())
console.log('Mês', data.getMonth() + 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minutos', data.getMinutes())
console.log('Segundos', data.getSeconds())
console.log('Milisegudos', data.getMilliseconds())
console.log('Dia da Semana', data.getDay())
console.log(data.toString())