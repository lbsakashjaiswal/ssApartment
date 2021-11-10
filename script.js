var balance,
  Tbalance = 0,
  x,
  temp,
  y,
  filterAmount;
for (var i = 0; i < 18; i++) {
  temp = document.getElementsByClassName("payment")[i].innerHTML;
  x = temp.replace(/[^\w\s]/gi, "");
  filterAmount = parseInt(x);

  if (!isNaN(filterAmount)) {
    if (filterAmount >= 100 && filterAmount < 500) {
      Tbalance += filterAmount;
    } else {
      Tbalance += filterAmount;
    }
    document.getElementsByClassName("topHeadBalance")[0].innerHTML = Tbalance;
  } else if (x == "") {
    y = document.getElementsByClassName("statusPayment");
    y[i].style.backgroundColor = "rgb(243,156,156)";
    y[i].style.border = "rgb(243,156,156)";
    y[i].style.color = "red";
    y[i].style.padding = "7px";
    document.getElementsByClassName("statusPayment")[i].innerHTML = "Unpaid";
  }
}
