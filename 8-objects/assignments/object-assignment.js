// 1.   Create an object for your dream vehicle
//      Give it a minimum of 6 key-value pairs
//      This object should contain many datatypes (string, number, boolean, null, array)
const car = {
    color: 'red',
    engine: 'V8',
    exhaust: 'Dual Rear Exit',
    carIsOn: true,
    topSpeed: '180 mph',
    racingAccessories: {
        wheels: [4],
        wingSpoiler: { brand: 'Mophorn GT', material: 'Aluminum'},
        sideSkirt: { brand: 'Ferrari', material: 'Carbon Fiber'} },
        start(){
            console.log("Vroom Vroom!");
        }
    }
// 2.   Using dot-notation Log to the console 3 properties from the previous object
console.log(car.color.sideSkirt.brand);
// 3.   Using bracket-notation Log to the console 3 properties from the previous object
console.log(car['racingAccessories']['wheels']['wingSpoiler']);
// 4.   Try and log a property that doesn't already exist - what output do we get?
//                        Not defined
// 5.   Add a new key-value pair to the vehicle. 
for(let key in car){
    console.log(`${key}: ${car[key]}`);
}

// 6.   Using bracket-notation update a property on the vehicle. 
car['age'] = 1
// 7.   Using dot-notation update a property on the vehicle. 
car.doors = 2
// 8.   Create a method for turning your vehicle on
// }
const startCar = ()=>{
    car.carIsOn = true
}
car.startcar = startCar
// 9.   Create a method for turning your vehicle off
function turnOff() {
    console.log('Vechile is off')
    }
//10.   
//      a. Check if your vehicle is on (it should be off)
//      b. Start your vehicle
//      c. Check if your vehicle is on (it should be on)
//      d. Stop your vehicle
//      e. Check if your vehicle is on (it should be on)
if(!car.carIsOn){
    car.carIsOn
}
else if(car.carIsOn){
    car.turnOff
}
console.log(car)