
type a1 = string
type a2 = a1 extends string ? string : null

type sheikh = {
    wife1 : string;
    wife2 : string
}

type checkProperty <T> = T extends {wife1 : string} ? true : false 

type checkWife2 = checkProperty<sheikh>

type friends = 'hello' | 'world' | 'tour'

type removeName <T ,K> = T extends K ? never : T

type currentWords = removeName <friends , 'world'>