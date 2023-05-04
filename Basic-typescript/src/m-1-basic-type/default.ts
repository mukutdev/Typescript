
const testDefault = (num1 : number , num2 : number = 20) : number => {

    return num1 * num2

}

console.log(testDefault(15))

//spread operator

const newFriends : string[] = ['mukut' , 'mimu'  , 'akash']
const newFriends2 : string[] = ['rony' , 'hamid' , 'joy']

newFriends.push(...newFriends2)

// rest parameters

const greetFriends = (...friends : string[]) : void =>{
    friends.forEach((friend) => console.log(`Hello ${friend}`))
}

greetFriends('mimu' , 'mukut' , 'dipu' , 'ts')