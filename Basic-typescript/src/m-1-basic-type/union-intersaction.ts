type NoobDev = {
    sName : string,
}

type JuniorDev = NoobDev & {
    expertise : string ;
    experience : number ;
    level : 'entry' | 'mid' | 'experienced'
}

const newDev : NoobDev | JuniorDev = {
    sName : "Mukut",
    expertise : "Javascript",
    experience : 7,
}

const newDev2 : NoobDev | JuniorDev = {
    sName : "Dipu",
    level : 'entry'
}

console.log(newDev , newDev2)