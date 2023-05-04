
interface RectangleOptions{
    width : number ;
    length : number ;
}

function drawRectangle (options : RectangleOptions){
    let width = options.width
    let length = options.length
    return width * length;
}

drawRectangle({width : 20 , length :  30})


interface IPersonDetails {
    name : string,
    age : number,
    jobHolder : boolean
}


interface extraPersonDetails extends IPersonDetails {
    address : string
}

const newPerson : extraPersonDetails ={
    name : 'Mukut',
    age : 26,
    jobHolder : true,
    address : 'barik building'
}

console.log(newPerson)