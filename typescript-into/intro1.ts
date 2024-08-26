const nImplicit: number = 3
let flag = true
let str: string

let arr: number[] = []

// let tuple: (boolean | number)[] = [true]

let obj: any = { x: 0 }

obj.foo()
obj()
obj.bar = '2'

const adder = (a: number, b: number) => a + b

const complexFun = (obj: { first: string; last?: string }) => {}

type UOrN = 'u' | 'n'

let letter: UOrN

//let letter = 's'

type UnionWithNever = 'u' | 'n' | never

type UnionWithAny = 'u' | 'n' | any


type Options = 'yes' | 'no' | 'maybe';

const fn = (t: Options) => {
    switch (t) {
        case 'maybe':
        case 'no':
            // case 'yes':
            return 1;
        default:
            return 's';
    }
};

type Period = {
    from: Date;
    to: Date;
};

type PeriodExtended = Period & {
    value?: number;
};

const dates: PeriodExtended = {
    from: new Date(),
    to: new Date()
};

dates.value = 3;

type PeriodOptional = Partial<Period>

let widest: object

widest = {a: 'smt'}

type NarrowType = {a: string}

let narrow = widest as NarrowType

