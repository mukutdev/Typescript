// 1. Convert the following JavaScript array into a TypeScript tuple
// const userInfo = [101, "Ema", "John", true,  , "2023"];

const userInfo : [number , string , string , boolean , string] = [101, "Ema", "John", true, "2023"]
console.log(userInfo)

// 2.Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays.

// For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays.

// The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.


function compareArray(num1 : number[] , num2 : number[]) : number[]{
    let newArr : number[] = []
    num1.forEach(n1 => num2.forEach(n2 =>{
        if(n1 === n2){
            newArr.push(n1)
        }
    }))

    return newArr;

}

const result = compareArray([1, 2, 3, 4, 5] , [2,4, 4, 6, 8] ) 
console.log(result)

// 3.You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

// Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety.

interface Product{
    id : number;
    name : string;
    price : number;
    category : string
}

function filterProducts <T extends keyof Product>(
    products : Product[],
    criterion : T,
    value : Product[T]
) : Product[]{
    return products.filter(product => product[criterion] === value )
}

const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10, category: 'Category 1'},
    { id: 2, name: 'Product 2', price: 20, category: 'Category 2' },
    { id: 3, name: 'Product 3', price: 10, category: 'Category 1' },
    { id: 4, name: 'Product 4', price: 30, category: 'Category 3' },
  ];
  
  const filteredProducts = filterProducts(products, 'id', 2);
  console.log(filteredProducts);
 
//   4.Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.

type ProductTuple = [string, number, number];
type ProductArray = ProductTuple[];

function calculateTotalCost(products: ProductArray): number {
  let totalCost = 0;
  for (const [name, price, quantity] of products) {
    totalCost += price * quantity;
  }
  return totalCost;
}

const products: ProductArray = [
  ["Product 1", 10, 5],
  ["Product 2", 20, 5],
  ["Product 3", 10, 5],
  ["Product 4", 30, 5],
];

const totalCost = calculateTotalCost(products);
console.log(totalCost);
