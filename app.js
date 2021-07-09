const books = require('./database')

//Pegar um input do usuário por categoria
// Se resposta for Sim, mostramos as categorias disponíveis e pergunta qual categoria escolher.
// Se escolher não, mostramos todos os livros em ordem crescente pela quantidade de páginas

const readline = require('readline-sync')

const initialEntry = readline.question('Deseja fazer uma busca de livro? S/N: ')

if (initialEntry.toLocaleUpperCase() === 'S'){
    console.log('\nEstas são as categorias disponíveis:\n')
    console.log('Cristão', '- Programação e Tecnologia', '- Negócios', '- História e Ficção\n')

    const categoryEntry = readline.question('Qual categoria você deseja escolher?: ')
    
    const choice = books.filter(book => book.category === categoryEntry).sort((a,b) => a.pages - b.pages) 

    console.log(`\nEstes são os livros disponíveis para a categoria: ${categoryEntry}\n`)

    console.table(choice)
} else{
    const booksOrderCresc = books.sort((a,b) => a.pages - b.pages)
    console.log('\nEstes são os livros disponíveis\n')
    console.table(booksOrderCresc)
}