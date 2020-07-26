const credits = 23580;

const pricePerDroid = 3000;

let numberOfDroids = prompt("Какое количество дроидов купить?");

let totalPrice = numberOfDroids * pricePerDroid;

let rest = credits - totalPrice;

if (numberOfDroids === null) {
  
 alert("Отменено пользователем!");
  
} else if (totalPrice > credits) {
  
  alert("Недостаточно средств на счету!");
  
} else {
  
  alert(`Вы купили ${numberOfDroids} дроидов, на счету осталось ${rest} кредитов.`);
  
}