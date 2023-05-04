type StudentDetails = {
    stuName : string,
    stuAge? : number,
    isAttentive : boolean
}

const student1 : StudentDetails = {
    stuName : 'Mukut',
    stuAge : 26,
    isAttentive : true
}
const student2 : StudentDetails = {
    stuName : 'Dipu',
    stuAge : 25,
    isAttentive : false
}

console.log(student1 , student2)

const calculateTwoNumbers = (
    num1 : number , 
    num2 : number , 
    operation : (x : number , y : number) => number) =>{
        return (operation(num1 , num2))
    }

 console.log(
    calculateTwoNumbers(10 , 5 , (x , y) => x + y)
 )   