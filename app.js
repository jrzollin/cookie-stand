'use strict';

function customerNumber(min, max){
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
}


var pikeStore = {
  minCustomersHour: 23,
  maxCustomersHour: 65,
  averageCustomerHour: 0,
  averageCustomerCookies: 6.3,
  cookiesPurchasedHour: []
}

pikeStore.averageCustomerHour = customerNumber(pikeStore.minCustomersHour, pikeStore.maxCustomersHour);
console.log(pikeStore.averageCustomerHour);
