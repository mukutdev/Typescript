type personType ={
    name : string,
    age : number,
    house : boolean
}


type newKeyOff = keyof personType

const a : newKeyOff = 'name'
const b : newKeyOff = 'age'
const c : newKeyOff = 'house'

interface personDetail{
    name : string,
    age : number,
}

const newPersonDetails2 : personDetail ={
    name : 'Mukut',
    age : 26
}

function getProperty <x , y extends keyof x>(obj : x , key : y){
        return obj[key]
}

const property = getProperty(newPersonDetails2 , 'age')

console.log(property)