/*
 * This is the microwave program
 *
 * @author  Lily Liu
 * @version 1.0
 * @since   2022-09-20
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

const sub = 60.0
const soup = 105.0
const pizza = 45.0
const minute = 60

const food = prompt('Are you heating up soup, sub or pizza : ')

const quantityInputString = prompt('How many items would you like to heat up? ')
const quantityInput = parseFloat(quantityInputString)

if (quantityInput <= 3 && quantityInput >= 1) {
  if (food === 'pizza') {
    const cookingTime1 = pizza + 0.5 * pizza * (quantityInput - 1)
    console.log(`The food will be cooked in ${Math.floor(cookingTime1 / minute)} minute and ${cookingTime1 % minute} seconds`)
  } else if (food === 'sub') {
    const cookingTime2 = sub + 0.5 * sub * (quantityInput - 1)
    console.log(`The food will be cooked in ${Math.floor(cookingTime2 / minute)} minute and ${cookingTime2 % minute} seconds`)
  } else if (food === 'soup') {
    const cookingTime3 = soup + 0.5 * soup * (quantityInput - 1)
    console.log(`The food will be cooked in ${Math.floor(cookingTime3 / minute)} minute and ${cookingTime3 % minute} seconds`)
  } else {
    console.log('Invalid Input')
  }
} else {
  console.log('Invalid Input')
}
console.log('\nDone.')
