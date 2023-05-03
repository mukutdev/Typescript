type GenericArray <T> = Array<T>

const userNames : GenericArray<string> = ['mukut' , 'mimu' , 'dipu']
const userAge : GenericArray<number> = [26 , 26 , 24]
const userMarried : GenericArray<boolean> = [true , false]



type GenericTuple <x , y> = [x , y]

interface  graduationState {
    name : string,
    year : number
}

const graduationState2 : GenericTuple <graduationState , string> = [
    {
        name : 'mukut',
        year : 2018
    },

    "National University"
]

// generic interface

interface CrushInterface <T>{
    name : string,
    husband : T
}

const myCrush : CrushInterface <string> = {
    name : 'kat',
    husband : "Vicky"
}