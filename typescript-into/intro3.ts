type Cargo<T> ={
    inside: T[]
}

type Book ={
    autor: string
}

type Car = { model: string}

let booktanker: Cargo<Book>
let cartanker: Cargo<Car>

booktanker.inside[0].autor
cartanker.inside[0].model

function mapper<T>(something : T[], fn: (value: T, index: number, array: T[]) => T) {return something.map(fn)}

let arrNum = [1, 2, 3]
let arrStr = ['1', '2', '3']

let resNumeric = mapper(arrNum, (val)=> ++val)
let resString = mapper(arrStr, (val)=> val+'!')