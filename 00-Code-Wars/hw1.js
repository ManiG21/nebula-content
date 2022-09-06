function oddOrEven(array) {
  //I have to get the remainder of the sum
  //return string of even or odd
  const initialValue = 0;
  const sum = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue);
  if (sum % 2 === 0) {
    return "even"
  } else {
    return "odd"
  }
}

// - At a fast food restaurant given a array of strings as an order give back the price of the meal

const wendys =
{
  'French Fry': 1.59,
  'Baconator': 5.69,
  'Frosty': 1.29,
  'Salad': 2.09,
}

function orderPrice(order) {
  //transform orders into prices through Wendy Menu
  const prices = order.map(food => wendys[food])
  //Once we have an array of prices we need to get a singular one, by adding them together
  const output = prices.reduce((total, curr) => total + curr)
  return output
}
console.log(orderPrice(['French Fry', 'Baconator', 'Salad'])) //7.28
// console.log(wendys["French Fry"])


// - Company Ice cream Party given a list of employee data figure out the most popular ice cream flavor

let employees = [

  { name: "Billy", flavor: "chocolate" },

  { name: "Jack", flavor: "Vanilla" },

  { name: "Jill", flavor: "strawberry" },

  { name: "John", flavor: "Vanilla" },

]

//

function popularIce(list) {

  let favorite = list.reduce((x, y) => {

    if (!x[y.flavor])

      x[y.flavor] = 1

    else

      x[y.flavor]++

    return x



    // we want our x to look like {chocolate:1}

  }, {})

  let popular = Object.keys(favorite).reduce((a, c) => favorite[a] > favorite[c] ? a : c)

  return popular

}

console.log(popularIce(employees))


// - Given a listen of items in my refrigerator return back a list of only the expired items

let items = [
  { name: 'milk', expDate: new Date('9-05-2022') },
  { name: 'cheese', expDate: new Date('8-05-2022') },
  { name: 'yogurt', expDate: new Date('10-05-2022') },
  { name: 'juice', expDate: new Date('8-05-2020') },
]

function Outdates(list, time = Date.now()) {
  return list.filter(food => food.expDate < time)
}
console.log(Outdates(items))

console.log(Outdates(items, new Date('9-06-2022')))
// gives you future expired items

