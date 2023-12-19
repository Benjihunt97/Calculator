document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.getElementById('buttons');
    const equalsButton = document.getElementById('equals');

    buttons.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            if (event.target.id === 'equals') {
                // Evaluate expression when equals button is clicked
                try {
                    display.textContent = eval(display.textContent);
                } catch (error) {
                    display.textContent = 'Error';
                }
            } else {
                // Append clicked button value to the display
                display.textContent += event.target.textContent;
            }
        }
    });
});
