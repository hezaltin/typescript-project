function add(num1:number,num2:number,showresultPrint:boolean,resultText:string){
    const addNumber = num1 + num2;
    if(showresultPrint){
        return resultText + addNumber;
    }
    else{
        return addNumber
    }
    

}
const number1 = 5;
const number2 = 3.4;
const printResult = true;
const resultPrint = 'The Result is: '
const result = add(number1,number2,printResult,resultPrint);

console.log(result)