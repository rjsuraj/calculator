let number = document.querySelectorAll(".calculator-btn");
let output = document.getElementById("output");
let result = document.getElementById("result");


// handling clicking events on numbers and operators
for (let i = 2; i < 18; i++) {

    number[i].addEventListener('click', () => {

        if (output.innerHTML == '0') {
            
            if(number[i].innerHTML === '.'){
                output.innerHTML = '0.';
            }
            else
                output.innerHTML = number[i].innerHTML;
        }
        else if (output.innerHTML.length < 13) {
            output.innerHTML = output.innerHTML + number[i].innerHTML;

            // handling invalid operations
            const operators = '+-÷%×';
            if (operators.includes(number[i].innerHTML)) {

                const l1 = output.innerHTML[output.innerHTML.length - 1];
                const l2 = output.innerHTML[output.innerHTML.length - 2];

                if (Number.isInteger(Number(l1)) === false && Number.isInteger(Number(l2)) === false) {
                    let tempArr = Array.from(output.innerHTML);
                    tempArr[output.innerHTML.length - 2] = l1;
                    tempArr.pop();
                    output.innerHTML = tempArr.join("");
                }

            }
        }
    })

}


// final result on the calculator 
result.addEventListener('click', () => {
    let finalResult = output.innerHTML;
    finalResult = finalResult.replaceAll('÷', '/');
    finalResult = finalResult.replaceAll('×', '*');
    finalResult = String(eval(finalResult))

    if (finalResult.includes('.') === false) {
        output.innerHTML = finalResult;
    }
    else
        output.innerHTML = Number(finalResult).toPrecision(10);

})

// resetting the output

let reset = document.getElementById("reset");

reset.addEventListener('click', () => {
    output.innerHTML = '0';
})

// deleting one character from the last

let del = document.getElementById('del');
del.addEventListener('click', () => {
    if (output.innerHTML.length == 1)
        output.innerHTML = '0';
    else
        output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1);
})


