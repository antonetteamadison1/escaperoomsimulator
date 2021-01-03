var readLineSync = require('readline-sync');
var playersFirstName = readLineSync.question('What is you name? ');

var introMessage = `Welcome, ${playersFirstName}, welcome to the escape room game!`;
console.log(introMessage);

var isActive = true;
var hasKey = false;

while (isActive == true) {
    const playerID = readLineSync.keyIn(` Press 1 to Put your hand in the whole \n Press 2 to Find the key \n Press 3 to Open the door`, { limit: '<1-3>' });
    if (playerID == 1) {
        console.log(`${playersFirstName} you are dead. Game is Over`);
    } else if (playerID == 2 && hasKey == false) {
        console.log(`${playersFirstName}, you have found the key. Proceed to the next menu option!`);
        hasKey = true;
    } else if (playerID == 2 && hasKey == true) {
        console.log(`${playersFirstName}, you ALREADY have the key. Do not waste your time. Proceed to the next optional!`);
    } else if (playerID == 3 && hasKey == false) {
        console.log(`${playersFirstName}, you need to locate the key first. Please find the key first and then use this menu option!`);
    } else if (playerID == 3 && hasKey == true) {
        console.log(`${playersFirstName}, you have opened the door successfully! Game Ends.....`);
        isActive = false;
    }
}