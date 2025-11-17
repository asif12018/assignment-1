

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

type Book = {
    title: string;
    rating: number;
};

const filterByRating =(value: Book[]): Book[] =>{
      return value.filter((value)=>value.rating >=4);
}

