//inferno de callbacks
//callback hell
const fs = require('fs')
const abrirArquivo = function(nomeArquivo){
    const exibirConteudo = function(erro, conteudo){
        if(erro){
            console.log(`Deu erro: ${erro}`)
        }
        else{
            console.log(`Conteúdo: ${conteudo}`)
            const dobro = Number(conteudo.toString()) * 2
            const finalizar = function(erro){
                if(erro){
                    console.log(`Deu erro escrevendo o dobro: ${erro}`)
                }
                else{
                    console.log('A escrita do dobro deu certo')
                }
            }
            fs.writeFile('dobro.txt', dobro.toString(), finalizar)
            console.log('Fim da exibirConteudo...')
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
    console.log('Fim da abrirArquivo...')
}
//chamar a função daqui a pouco
abrirArquivo("arquivo.txt")

// function demorada(tempo){
//   const atualMaisTempo = new Date().getTime() + 2000
//   while(new Date().getTime() <= atualMaisTempo);
//   const d = 8 + 4
//   return d
// }
// const a = 2 + 6
// const b = 5 + 9
// setTimeout(() => {
//   const temp = 2000
//   const d = demorada(temp) //função bloqueante
//   console.log(`d(${temp}): ${d}`)
// }, 0)
// setTimeout(() => {
//   const temp = 1000
//   const d = demorada(temp) //função bloqueante
//   console.log(`d(${temp}): ${d}`)
// }, 0)
// const e = 2 + a + b
// console.log(`e: ${e}`)

// const a = 2 + 7
// const b = 5
// console.log(a + b)

// console.log('Eu primeiro...')
// console.log('Agora eu...')
// console.log('Sempre a ultima :(')


// let calculadora ={
//   soma: (a, b) => a + b,
//   subtracao: function(a, b){
//     return a - b
//   },
//   multiplicacao: (a,b) => a * b,
//   divisao: (a, b) => a / b
// }
//dados esses dois valores, aplicar todas as operações da calculadora sobre eles
// let x=2
// let y = 3
// console.log(Object.values(calculadora))
// for(let operacao of Object.values(calculadora)){
//   //Antes de mostrar o resultado, mostrar o nome da função, interpolando em um único console.log ${}
//   console.log(`${operacao.name}: ${operacao(x,y)}`)
// }

//GSON
//uma concessionária com CNPJ e endereço, com logradouro, numero e bairro (pensar na estrutura que um bairro pode ter). Ela tem um estoque de veiculos. Cada um tem marca, modelo e ano de fabricação. Precisa pensar que o número de veículos que a concessionária tem pode variar ao longo do tempo, ele pode estar vazio, pode ter 15, pode ter 502 e assim por diante.
// const concessionaria = {
//   cnpj: '00011122210001-44',
//   endereco: {
//     logradouro: 'Rua A',
//     numero: 120,
//     bairro:{
//       nome: 'Vila J',
//       regiao: 'Zona norte'
//     }
//   },
//   veiculos: {
//     'ford': [
//       {
//         modelo: 'Ka',
//         anoFab: 2015
//       },
//       {
//         modelo: 'Ecosport',
//         anoFab: 2018 
//       }
//     ],
//     'chevrolet': [
//       {
//         modelo: 'Onix',
//         anoFab: 2025
//       }
//     ]
//   }
// }
// for(let veiculoFord of concessionaria.veiculos.ford) console.log(veiculoFord)

//escrever um for que, internamente, itera sobre cada possivel marca, para cada marca, mostrar somente o modelo do veiculo 
// dica: pesquise sobre 'keys' em javascripts
// for(let marca of Object.keys(concessionaria.veiculos)){
//  console.log(marca)
//  const veiculosDaMarca = concessionaria.veiculos[marca]
//  for(let veiculo of veiculosDaMarca){
//     console.log(veiculo.modelo)
//   } 
// }
      
      
      
//objeto Javascript não é sinônimo de objeto JSON (Javascript Object Notation)
//uma pessoa se chama maria, tem 21 anos e mora na Rua B, número 121
// let pessoa = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         logradouro: 'Rua B',
//         numero: 121
//     }
// }

// console.log(`Nome: ${pessoa.nome}`)
// console.log(`Idade: ${pessoa.idade}`)
// console.log(`Endereco: ${pessoa.endereco.logradouro}`)
// console.log(`Número: ${pessoa.endereco.numero}`)
//
// uma pessoa se chama joão e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17
// }

// console.log('me chamo ' + pessoa.nome)
// console.log('me idade é ' + pessoa['idade'])
// function saudacoesFactory(saudacao, nome){
//     return function(){
//         console.log(`${saudacao}, ${nome}`)
//     }
// }

// let olaJoao = saudacoesFactory('ola', 'joao')
// let tchauJoao = saudacoesFactory('tchau', 'joao')
// olaJoao()
// tchauJoao()

// function ola(){
//     let nome = 'João'
//     return function(){
//         console.log(`Ola, ${nome}`)
//     }
// }
// let olaResult = ola()
// olaResult()
//
// function f(){
//     let nome = 'João'
//     function g(){
//         console.log(nome)
//     }
//     g()
// }
// f()

//closures
// let umafuncao = function(){
//     console.log('Fui armazenado em uma variavel')
// }
// umafuncao()
// function f(funcao){
//     funcao()
// }
// f(() => console.log('Sou uma function passada para f'))

// function g(){
//     function outrafuncao(){
//         console.log('Fui criada por g')
//     }
//     return outrafuncao
// }
//f(g())()
// f(g())
// f(g)
// g()()
//const gResult = g()
//gResult()
//f(umafuncao)
//
//vetores, parte 2
//mapreduce
// const valores = [1, 2, 3, 4]
// const soma = valores.reduce((ac, v) => ac + v)
// console.log(soma)

// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const todosComecamComA = nomes.every(n => n.startsWith('A'))
// console.log(todosComecamComA)
// const peloMenosUmComecamComA = nomes.some(n => n.startsWith('A'))
// console.log(peloMenosUmComecamComA)
//dado a coleção a seguir, produzir outra coleção contendo o quadrado de cada número
//usando arrow functions e digitando a menor quantidade de caracteres possivel
// const numeros = [1, 2, 3]
// const sqrt = numeros.map(numero => numero * numero)
// console.log(sqrt)
//
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const res = nomes.map(function(nome){return nome[0]})
// console.log(res)
//
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenasComA)
//arrow function
//tem exatamente um parâmetro: parênteses podem ser omitidos
// const dobro = n => 2 * n
// console.log(dobro(2))
//tem somente uma linha que produz um valor a ser devolvido
// const dobro = (n) => 2 * n
// console.log(dobro(5))
//
//em caso de chaves, é necessário o uso do return
// const dobro = (n) => {
//     console.log('Calculando o dobro...')
//     return 2 * n 
// }
// console.log(dobro(5))
//
//tem somente uma linha: as chaves podem ser omitidas
// const hello = () => console.log('Hello')
// hello()
// const hello = () => {
//     console.log('Hello')
// }
// hello()
//
// função
// const triplo = function(n=5){
//     return 3* n
// }
//
// console.log(triplo(undefined))
// console.log(triplo(10))
//
// const dobro = function (n){
//     return 2 * n
// }
//
// console.log(dobro(6))
// function soma(a,b){
//     return a + b
// }
// const res = soma(2,3)
// console.log(res)
//
// function hello(){
//     console.log('oi')
// }
// hello()
//
// function hello(nome){
//     console.log('helo, ' + nome)
// }
// hello('Anna')
//
//vetores
// v2 = [2, "abc", true]
// console.log(v2)
// for(let i=0; i< v2.length; i++){
//     console.log(v2[i])
// } 
// v1 = []
// console.log(v1.length)
// v1[0] = 3.4
// console.log (v1.length)
// v1[10] = 2
// console.log(v1.length)
// v1[7] = "abc"


//comparação
// console.log([] == [])
// console.log([1] == [1])
// console.log(0 == [0])
// while(true) console.log( true == true)SS
// console.log( true == '1')
// console.log( true == 1)
//operadores == e ===
// console.log('1' === 1)
// console.log(1 == '1')
// console.log( 1 == 1)

//coerção
// const n1 = 2
// const n2 = '3'
//coerção implícita
// const n3 = n1 + n2
// console.log(n3)
//coerção implícita
// const n4 = n1 + Number(n2)
// console.log(n4)

//sistema de tipos
// let idade = 20
// console.log(typeof(idade))
// const nome = "Ana"
// console.log(typeof(nome))
// idade = 'vinte'
// console.log(typeof(idade))

//declaração de variáveis(const, let e var)
//const
// const nome = 'José'
// console.log(nome)
// nome = 'José da Silva' //por se tratar de um const, a variável não pode ser alterada, dando erro de compilação

//let
// let a = 2
// let nome = 'José'
// console.log(a)
// console.log(nome)
// nome = 'José da silva' //a variável pode ser alterada
// console.log(nome)

//var
// var c = 2
// var nome = 'Jose'
// nome = "José da Silva"
// console.log(nome)
// var linguagem = 'Javascript'
// console.log('Aprendendo ' + linguagem)
// var linguagem = "Java"
// console.log('Aprendendo ' + linguagem)
// console.log("Exemplo contra intuitivo usando var")
//host içar
// var idade = 18
// console.log("Oi, " + nome)
// if(idade >= 18){
//     var nome = "João"
//     console.log("Sim, " + nome + ". Você pode dirigir.")
// }
// console.log(`Até mais, ${nome}`)