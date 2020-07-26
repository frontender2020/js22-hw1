let priceOfDelivery;

const countryOfDelivery = prompt("В какую страну доставить товар?");

const countryOfDeliveryNorm = countryOfDelivery.toLowerCase();

switch (countryOfDeliveryNorm) {
  case "китай":
    priceOfDelivery = 100;

    alert(
      `Доставка в ${countryOfDeliveryNorm} будет стоить ${priceOfDelivery} кредитов`
    );

    break;

  case "чили":
    priceOfDelivery = 250;

    alert(
      `Доставка в ${countryOfDeliveryNorm} будет стоить ${priceOfDelivery} кредитов`
    );

    break;

  case "австралия":
    priceOfDelivery = 170;

    alert(
      `Доставка в ${countryOfDeliveryNorm} будет стоить ${priceOfDelivery} кредитов`
    );

    break;

  case "индия":
    priceOfDelivery = 80;

    alert(
      `Доставка в ${countryOfDeliveryNorm} будет стоить ${priceOfDelivery} кредитов`
    );

    break;

  case "ямайка":
    priceOfDelivery = 120;

    alert(
      `Доставка в ${countryOfDeliveryNorm} будет стоить ${priceOfDelivery} кредитов`
    );

    break;

  default:
    alert("В вашей стране доставка не доступна");
}