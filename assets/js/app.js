
const firstValueElement = document.getElementById("firstValue");
const secondValueElement = document.getElementById("secondValue");
const calculateButton = document.getElementById("calculate");
const outputContainer = document.getElementById("output-container");

const calculate = () => {
    const firstValue = parseInt(firstValueElement.value);
    const secondValue = parseInt(secondValueElement.value);

    // Example: Change the input box color based on the result of the calculation
    if (isNaN(firstValue) || isNaN(secondValue)) {
        // If either input is not a valid number, set the input box color to red
        firstValueElement.style.borderColor = 'red';
        secondValueElement.style.borderColor = 'red';
        firstValueElement.value = '';
        secondValueElement.value = '';
        outputContainer.innerHTML = 'Invalid input.Please enter valid numbers.';
        outputContainer.style.color = 'yellow';
        outputContainer.style.fontWeight = 'bold';
        setTimeout(() => {
            outputContainer.innerHTML = '';
            outputContainer.style.color = 'red';
        },1000);

        setTimeout(() => {
            outputContainer.style.color = 'red';
            outputContainer.innerHTML = 'Value should be Number';
        },500);

    } else {
        // If both inputs are valid numbers, set the input box color back to default
        firstValueElement.style.borderColor = 'green';
        secondValueElement.style.borderColor = 'green';

        // Your arithmetic operations here
        const addition = firstValue + secondValue;
        const subtraction = firstValue - secondValue;
        const multiplication = firstValue * secondValue;
        const division = firstValue / secondValue;

        // Display output on UI with specific color
        outputContainer.innerHTML = `
            <p style="color:white;">Addition: ${addition}</p>
            <p style="color:white;">Subtraction: ${subtraction}</p>
            <p style="color: white;">Multiplication: ${multiplication}</p>
            <p style="color: white;">Division: ${division}</p>
        `;
        console.log(`Addition of ${firstValue} and ${secondValue} is ${addition}`);
        console.log(`Subtraction of ${firstValue} and ${secondValue} is ${subtraction}`);
        console.log(`Multiplication of ${firstValue} and ${secondValue} is ${multiplication}`);
        console.log(`Division of ${firstValue} and ${secondValue} is ${division}`);
        firstValueElement.value = '';
       secondValueElement.value = '';
        // Display a simple success message
// Swal.fire('Good job!', 'You clicked the button!', 'success');
// Swal.fire('Good job!', 'You clicked the button!', 'success');
Swal.fire({

       
        text: ('Done','Your Result is...'),
        layout: 'center',
        timer:1000
    })
  
   


}
}
const onCalculateClick = () => {
    calculate();
  
    
}

calculateButton.addEventListener('click', onCalculateClick);


