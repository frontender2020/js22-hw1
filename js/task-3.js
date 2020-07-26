const ADMIN_PASSWORD = "jqueryismyjam";

let message;

message = prompt("please enter your password");

if (message === null) {
  alert("Отменено пользователем!");
} else if (message === "jqueryismyjam") {
  alert("Добро пожаловать!");
} else {
  alert("Доступ запрещен, неверный пароль!");
}