const makePromise = () : Promise <string>  =>{
    return new Promise<string>((resolve , reject)=>{
        const data : string = "data is fetched"
        if(data){
            resolve(data)
        }else{
            reject("Failed to fetched")
        }
    })
}

const getPromiseData = async() : Promise <string> =>{
    const getData = await makePromise()
    return getData;
}

getPromiseData()
.then(result => console.log(result))
.catch(error => console.log(error));


const fetchTodoData = async () : Promise<object>=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    return response.json()
}

const getTodoData = async () : Promise<void> =>  {
 
    const getData = await fetchTodoData()
    console.log(getData)
}

getTodoData()