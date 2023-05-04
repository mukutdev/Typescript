

type areaNumber = {
     height : number
     width : number
}

type a = areaNumber['height']
type b = keyof areaNumber

const arrayOfNumber = [2 , 5 , 6]

type volume = {
    height : number;
    width : string;
    depth : boolean
}

type Area <T> = {
    [key in keyof T] : T[key]
}

const area1 : Area<{height : number , width : number}> = {height : 10 , width : 10}