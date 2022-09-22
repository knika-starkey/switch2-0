let s = " ";
let a = prompt("Куди ви хочете поїхати?");
let hot = confirm("Гарячий тур чи ні?");
let discount = 0.8;
let price;
switch (a) {
  case "Велика Британія":
    price = 1500;
    s = "Тур до Великої Британії коштує: " + (hot ? price * discount : price);
    break;
  case "Туреччина":
    price = 900;
    s = "Тур до Туреччини коштує: " + (hot ? price * discount : price);
    break;
  case "Єгипет":
    price = 750;
    s = "Тур до Єгипту коштує: " + (hot ? price * discount : price);
    break;
  case "Франція":
    price = 1000;
    s = "Тур до Франції коштує: " + (hot ? price * discount : price);
    break;
  case "Німеччина":
    price = 850;
    s = "Тур до Німеччини коштує: " + (hot ? price * discount : price);
    break;
  default:
    s = "Вкажіть правильно країну";
}
alert(s);
