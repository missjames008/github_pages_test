
//code for sticky header
window.onscroll = function() {stickyHeader()};

var header = document.getElementById("sticky");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header");
  } else {
    header.classList.remove("header");
  };

}
//code for order total
var order1 = ['A', 'A', 'B', 'C', 'C', 'D']; //should be 210
var order2 = ['A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'D']; //should be 430

function calcTotal(order) {
  //this function gives us the count for each order item
  var counts = {};
  order.forEach(function(x) { counts[x] = (counts[x] || 0) + 1; });
  var orderTotal = [];

  //this calculation will check for pairs of A and push the discounted price for pairs and remainder to empty orderTotal array
  if (counts.A % 2 === 0) {
    orderTotal.push((counts.A / 2) * 100);
  } else orderTotal.push((((counts.A - 1) / 2) * 100) + 60);

  //these two calculations will check for triples of B and give us the discounted price, then check for remainder, then push total to orderTotal array
  if (counts.B > 2) {
    orderTotal.push((Math.floor(counts.B / 3) * 140) + ((counts.B % 3) * 70));
  } else orderTotal.push(counts.B * 70);

  //this will push remaining items C & D to orderTotal array
  orderTotal.push((counts.C * 10) + (counts.D * 20));

  //this will add together all numbers in orderTotal array
  var orderTotalReduced = orderTotal.reduce(function(a, b){
    return a + b;
  }, 0);

  return orderTotalReduced;

}
document.getElementById("total").innerHTML = '$' + window.calcTotal(order1);
