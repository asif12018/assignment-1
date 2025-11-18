


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



type GetLength = (value: string | any[]) => number;

const getLength: GetLength = (value) =>{
    if(typeof value === 'string'){
        return value.length
    }

    if(Array.isArray(value)){
        return value.length;
    }

    throw new Error("invalid type")
}






class Person {
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    };

    getDetails():string{
        return `'Name: ${this.name}, Age: ${this.age}'`
    };
};








type Books = {
    title: string;
    rating: number ;
};

const filterByRating =(value: Books[]): Books[] =>{
      value.map((book)=>{
        if(book.rating < 0 || book.rating >5){
             throw new Error(`Invalid rating: ${book.rating}. Rating must be between 0 and 5.`);
        }
      })
      let newArray: Books[] = [...value];
      return newArray.filter((value)=>value.rating >=4);
};




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




interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails =(book:Book): Book =>{
     console.log(`Title: ${book.title}, Author: ${book.author}, publishedYear: ${book.publishedYear}, isAvailable: ${book.isAvailable ? 'Yes' : 'No'}`);
     return book;
};




type UniqueArray = (number | string)[];



const filterDublicate = (array1:UniqueArray, array2:UniqueArray): UniqueArray =>{
    let newArray = [...array2];
    for(let i = 0; i < array1.length; i++){
        let found = false;
        for(let j = 0; j < newArray .length; j++){
     
            if( newArray[j]===array1[i]){
                found = true;
                break;
            }
        }

        
        if(!found ){
            let value = array1[i];
            if(value !== undefined){
                newArray .push(value);
            }
        }
 
        
    }
    return newArray;
}


const getUniqueValues =(array1: UniqueArray , array2: UniqueArray): UniqueArray =>{
    let uniqueArray: UniqueArray = filterDublicate(array1, []);
    
    const totalNewArray: UniqueArray = filterDublicate(array2, uniqueArray);

    return totalNewArray;

}






type CalculateTotalPrice = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (array: CalculateTotalPrice[]): number =>{
    
    const productPrice = array.map((product)=>{
        let totalPrice = 0;
        if(product.discount){
            totalPrice = (product.price * product.quantity) - (product.price * ((product.discount)/100) * product.quantity);
        }else{
            totalPrice = (product.price * product.quantity)
        }
        return totalPrice
    });

    return productPrice.reduce((total, price)=> total + price, 0)

};






