import ReactDOM  from "react-dom";
import App  from "./App";
import './index.css';

ReactDOM.render(<App/>,document.querySelector('#root'));

/*
// Sample code to perform I/O:

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
}

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
*/

// Write your code here


function rotate_monk(t){
    for(let j = 0 ; j<t ; j++){
        
            function rotate(n,k){
                let array = []
            for(let i = 0;i<n;i++){
                array[i]=i+1
            }
                for(let i = 0; i<k;i++){
                    let temp = array.pop()
                    array.unshift(temp)
                }
                let answer = ""
                for(let i = 0; i < array.length;i++){
                    answer +=  array[i] + " " 
                }
            return answer
        }
    }
    
}
console.log(rotate_monk(1,5,2))