
// non gen function
const nonGenArray = (param : string) : string[]=>{
    return [param]
}

// generic function
const makeArray = <T> (param : T) : T[] => {
    return [param] 
}

type newPerson = {name : string , age : number}

const res = makeArray<string>("Bangladesh")
const res2 = makeArray<boolean>(true)
const res3 = nonGenArray('Bangladesh')
const res4 = makeArray<newPerson>({name : 'mukut' , age : 26})

//

const makeTuple = <x , y> (param : x , param2 : y) : [x , y]=>{
    return [param , param2]
}

const res5 = makeTuple<string , number>("mukut" , 20)