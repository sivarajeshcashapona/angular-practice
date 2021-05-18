import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs/dist/types/operators';

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.css']
})
export class ArrayMethodsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // 1. Slice ----> it doesn't mutates the original array it creates copy of another array
    const arr = ['1', '2', '3', '4', '5'];
    console.log('1.slice');
    console.log(arr.slice());
    console.log(arr.slice(2, 4));
    console.log(arr.slice(-2));
    console.log([...arr]); // spread operator same as slice
    // - sign indicates last part of array
    console.log('2.splice');

    // 2. Splice removes the part of original array.
    // it mutates the original array
    console.log(arr.splice(-1), arr);

    // 3. Reverse: simply reverse the array elements
    // it mutates the original array
    console.log('3.reverse');
    console.log(arr.reverse(), arr);

    //Concat
    console.log('Concat');
    const arr1 = ['3', '5', '5', '8', '9'];
    const arr2 = ['a', 'b', 'c', 'd', 'e'];
    console.log(arr1.concat(arr2));

    //split and join
    console.log('Split and Join');
    arr2.forEach((item, i, arr) => {
      const newArray = arr[i];
      console.log(newArray.split(',').join('-'));
    });

    // Looping throgh Arrays
    // Unlike forEach(), you can use break, continue, and return
    // If you want to loop over an object’s properties, either use for-in
    const mixedArray: any = [50, 28, 'rajesh', 98, 'hello', 'Hii'];
    console.log('****For Of*****');
    for (const [i, value] of mixedArray.entries()) {
      if (typeof value === typeof '') {
        console.log(
          `${i + 1}. ${value} is of type String with length ${value.length}`
        );
      } else {
        console.log(
          `${i + 1}. ${value} is of type Number with length ${value.length}`
        );
      }
    }
    console.log('*********For Each*****');
    mixedArray.forEach((val, index, arr) => {
      if (typeof val === typeof '') {
        console.log(
          `${index + 1}. ${val} is of type String with length ${val.length}`
        );
      } else {
        console.log(
          `${index + 1}. ${val} is of type Number with length ${val.length}`
        );
      }
    });

    console.log('--------------------');
    // For-each with Map and Sets
    const currencies = new Map([
      ['USD', 'Unites States Dollar'],
      ['INR', 'Indian Rupee'],
      ['EUR', 'Euro']
    ]);

    currencies.forEach((val, key, arr) => {
      console.log(`${key}:${val}`);
    });
    const currenciesSets = new Set([
      'USD',
      'Unites States Dollar',
      'INR',
      'Indian Rupee',
      'EUR',
      'Euro'
    ]);

    currenciesSets.forEach((val, _, arr) => {
      console.log(`${val}:${val}`);
    });

    // data tranformations with map, filter and reduce

    // Map--> mutates the original array and stores into new array

    const arrayModel = [500, 1000, 6000, 8000, 10000];
    const mappedArray = arrayModel.map(val => (val * 2) / 2);
    console.log(mappedArray);

    // map can also used to loop through array
    arrayModel.map((val, i, arr) => {
      console.log(
        `${i + 1}. the array element is ${val} of length ${
          val.toString().length
        }`
      );
    });

    //Filter ---> it returns new array containing array elements that passes a specified condition

    const depositsArray = [500,2000, 5000,6000,1000,200,7000]
    const greaterthan2K = depositsArray.filter((val)=> {
      return val > 2000
    });
    console.log(`The deposits greater than 2000 are : ${greaterthan2K}`);

    const lessthan2K = depositsArray.filter((val)=> {
      return val < 2000
    })
        console.log(`the deposits greater than 2000 are : ${lessthan2K}`);


    // reduce adds all the elements to a single value
    // acc ---> accumulator
    // cur --> current element
    // i ---> index
    // arr ---> array
    const totalAmount= depositsArray.reduce((acc,cur,i,arr)=> {
      console.log(`Iteration ${i}: ${acc}`);
      return acc+cur;
    },100);
    console.log(`The total deposit amount is:  ${totalAmount}`)
  }
}
