const ordered = 50;

const total = 100;

if (ordered > 0 && ordered <= 100) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
} else if (ordered > 100) {
  console.log("На складе недостаточно товаров!");
} else {
  console.log("заказ выполнить невозможно");
}