

//------------------Problem 1--------------------

type FormatValue = (value: string | number | boolean) => string | number | boolean;

const formatValue: FormatValue = (value) =>{
      if(typeof value === 'string'){
         return value.toUpperCase();
      }else if(typeof value === 'number'){
        return value * 10;
      }else if(typeof value === 'boolean'){
        return !value;
      }

      return 'invalid type'
};


//=============== Problem 2========================

type GetLength = (value: string | number[]) => number;

const getLength: GetLength = (value) =>{
    if(typeof value === 'string'){
        return value.length
    }

    if(Array.isArray(value)){
        return value.length;
    }

    return 0;
}


//================= Problem 3=======================

class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    };

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`
    };
};

//===================== Problem 4====================

type Books = {
    title: string;
    rating: number;
};

const filterByRating =(value: Books[]): Books[] =>{
      let newArray: Books[] = [...value];
      return newArray.filter((value)=>value.rating >=4);
};


//================== Problem 5===================

type Users = {
    id:number;
    name:string;
    email:string;
    isActive:boolean;
};

const filterActiveUsers =(user:Users[]): Users[] =>{
    let newArray = [...user];
    return newArray.filter((value)=> value.isActive ===true);
};


//============= Problem 6======================

interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails =(book:Book): Book =>{
     console.log(`Title: ${book.title}, Author: ${book.author}, publishedYear: ${book.publishedYear}, isAvailable: ${book.isAvailable}`);
     return book;
};

//=============== Problem 7==========================

type UniqueArray = (number | string)[];

const getUniqueValues =(array1: UniqueArray , array2: UniqueArray) =>{
    let uniqueArray: UniqueArray = [...array1];
    
    for(let i = 0; i < array2.length; i++){
        let found = false;
        for(let j = 0; j < uniqueArray.length; j++){
            //check if it exist on array2
            if(uniqueArray[j]===array2[i]){
                found = true;
                break;
            }
        }

        // push it if it exist
        if(!found ){
            let value = array2[i];
            if(value !== undefined){
                uniqueArray.push(value);
            }
        }
 
        
    }

    return uniqueArray;
}

//====================problem 8======================

type CalculateTotalPrice = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (array: CalculateTotalPrice[]): number =>{
    let totalPrice = 0;
     if(array.length === 0){
        return 0
     }

     for(let i = 0; i < array.length; i++){
         const product = array[i];
         if(product?.discount){
            totalPrice = (totalPrice+(product.price) * product.quantity) - ((product.price * product.quantity) * (product.discount/100))
         }else{
            if(product){
                totalPrice = (totalPrice+(product.price) * product.quantity)
            }
         }
     }

     return totalPrice;
}


