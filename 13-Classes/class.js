class Animal {
    constructor(name, noise, food, home) {
        this.name = name;
        this.noise = noise;
        this.food = food;
        this.home = home;
    }
    thing() {
        console.log('The ' + this.name, 'makes the sound ' + this.noise)
    }
    meal() {
        console.log('The ' + this.name, ' mainly eats ' + this.food)
    }
}

const panda = new Animal('panda', 'grrr', 'bamboo', 'Japan');
const boxTurtle = new Animal('Box Turtle', 'nothing', 'bug and fruit', 'New York')
const lion = new Animal('lion', 'roar', 'meat', 'Africa')

console.log(panda.thing())
console.log(lion.meal())

class Shoes {
    constructor(brand, size, type, age, color) {
        this.brand = brand;
        this.size = size;
        this.type = type
        this.age = age;
        this.color = color;
    }
    line() {
        console.log('My new ' + this.brand, 'are a size ' + this.size, ' The ' + this.type, 'are only ' + this.age)
    }
    line2() {
        console.log('My ' + this.brand, 'are ' + this.color)
    }
}

const jordan13 = new Shoes('Jordan retro 13s', '13', 'sneakers', '5 months old', 'light-blue and white')
const timbs = new Shoes('Timbs', '15', 'boots', '3 months old', 'light-brown and red')

console.log(jordan13.line())
console.log(jordan13.line2())
console.log(timbs.line())

class Shapes {
    constructor(name, sides, height, width){
this.name = name
this.sides = sides
this.height = height 
this.width = width
    }
}

class Rectangle extends Shape {
    constructor(name, sides, height, width, length){
        super(name, sides, height, width)
        this.length = length;
    }
    calculateRectangleArea(){
        return this.height * this.width
    }
    calculateRectangleVolume(){
        return this.height * this.length * this.width
    }
    printStatement() {
        console.log("Given a " + this.name + " with a height of " + this.height + " and a width of " + this.width + ", it will have a volume of " + this.calculateRectangleVolume() + " and a surface area of " + this.calculateRectangleArea())
    }
}

const rec1 = new Rectangle('rectangle', 4, 12, 5, 3)

console.log(rec1.calculateRectangleArea())
console.log(rec1.calculateRectangleVolume())
rec1.printStatement();

class Triangle extends Shapes {
    constructor(name, sides, height, width, base){
    super(name, sides, height, width)
    this.base =base;
}
calculateTriangleArea(){
    return (this.base * this.height)/2
}
}
const tri2 = new Triangle('triangle', 3, 4, 6, 7);
console.log("The area of our new triangle is " + tri2.calculateTriangleArea())