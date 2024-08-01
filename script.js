const countdown = document.getElementById('countdown');

function displayMessage(message, callback) {
    countdown.textContent = message;
    setTimeout(callback, 1000);
}

displayMessage('10', () => {
    displayMessage('9', () => {
        displayMessage('8', () => {
            displayMessage('7', () => {
                displayMessage('6', () => {
                    displayMessage('5', () => {
                        displayMessage('4', () => {
                            displayMessage('3', () => {
                                displayMessage('2', () => {
                                    displayMessage('1', () => {
                                        displayMessage('Happy Independence Day!', () => {});
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});