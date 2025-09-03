require('dotenv').config()
const axios = require('axios')
// const PROTOCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const APPID = process.env.APPID
// const UNITS = process.env.UNITS
// const Q = process.env.Q
// const LANG = process.env.IDIOM
// const CNT = process.env.CNT
// const { PROTOCOL, BASE_URL, APPID, UNITS, Q, IDIOM: LANG,CNT } = process.env

//async/await
function fatorial(n){
  if(n < 0) return Promise.reject('valor não pode ser negativo')
  let res = 1
  for(let i= 2; i <= n; i++) res *= i
  return Promise.resolve(res)
}

async function chamadaComAsyncAwait() {
  const n1 = 5, n2 = -2
  try{
    const rest1 = await fatorial(n1)
    console.log(`Fatorial de ${n1}: ${rest1}`)  
  }catch(err){
    console.log(`Erro: ${err}`)
  }
  try{
    const rest2 = await fatorial(n2)
    console.log(`Fatorial de ${n2}: ${rest2}`)  
  }catch(err){
    console.log(`Erro: ${err}`)
  }
}
chamadaComAsyncAwait()

// function chamadaComThenECatch(){
//   const n1=5, n2= -2;
//   fatorial(n1)
//   .then(res => console.log(`Fatorial de ${n1}: ${res}`))
//   .catch(err => console.log(`Erro: ${err}`))
  
//   fatorial(n2)
//   .then(res => console.log(`Fatorial de ${n1}: ${res}`))
//   .catch(err => console.log(`Erro: ${err}`))
// }

// chamadaComThenECatch()
// async function hello(nome){
//   return `oi, ${nome}`
// }
// async function outra(){
//   await
// }
// hello('Maria').then(p => console.log(p))

// function hello(nome){
//   // return `oi, ${nome}`
//   const p = new Promise((resolve, reject) =>{
//     resolve(`oi, ${nome}`)
//   })
//   return p
// }
// const res = hello('anna')
// res.then((p) => { console.log(p)})
// console.log(res)

// const URL = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units=${UNITS}&q=${Q}&lang=${LANG}&cnt=${CNT}`

// console.log(URL)

// const promiseResultante = axios.get(URL)
// promiseResultante
// .then((resposta) =>{
//   for (const previsao of resposta.data.list) {
//     console.log(previsao.main.temp_min)
//     console.log(previsao.main.temp_max)
//     console.log(previsao.main.humidity)
//     console.log(previsao.weather[0].description)
//   }
// })
// .then((resposta) => {
//   // console.log(resposta)
//   const list = resposta.data.list
//   console.log(list)
//   return list
// })
// .then((resposta) => {
//   // exibir temp min e max
//   console.log(`Temp min: ${resposta[0].main.temp_min}`)
//   console.log(`Temp min: ${resposta[0].main.temp_max}`)
//   return resposta[0].weather
// })
// .then((resposta => {
//   console.log(resposta[0].description)
// }))
// .catch((erro) => {
//   console.log(`Erro: ${erro}`)
// })
console.log('Terminando')