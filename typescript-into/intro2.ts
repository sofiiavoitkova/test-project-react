enum OptsE {
    yes = 'yes',
    no = 'no'
}

enum OptsOtherE {
    me = 'me',
    you = 'you'
}

// let answer: OptsE
// answer = OptsE.yes

type OptsU = 'yes' | 'no' | 'maybe'

let answer: OptsU

answer = "no"

let un = 'yes'
let en = OptsE.yes

console.log(un)
console.log(en)

// @ts-ignore
console.log(OptsOtherE.me === OptsE.yes)