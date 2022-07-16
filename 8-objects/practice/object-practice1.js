// 1.   Create an object for a celebrity and save it to a variable
const celebrity = {
    race: 'black',
    award1: '3 Grammys'
};
// 2.   Using dot-notation add 3 key-value pairs to the celebrity
celebrity.netWorth = '2.5 Billion';
celebrity.job = 'Actor';
celebrity.award2 = '5 Oscars';
// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
celebrity['age'] = 27; 

// 4.   Write a function that allows us to add or update 3 properties

// 5.   Using a loop - log all the celebrities properties to the console
for(let key in celebrity){
    console.log(`${key}: $${celebrity[key]}`);
}
