'use strict';

function customerNumber(min, max){
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function cookiesPerHour(store){
  for(var i = 0; i<store.hoursOpen.length; i++){
    store.averageCustomerHour = customerNumber(store.minCustomersHour, store.maxCustomersHour);
    console.log('Hour ' + (i + 1) + ' customers = ' + store.averageCustomerHour);
    var cookies = (store.averageCustomerHour * store.averageCustomerCookies);
    store.cookiesPurchasedHour.push(cookies);
    console.log('Hour ' + (i + 1) + ' cookies purchased = ' + store.cookiesPurchasedHour[i]);
  }
}

var pikeStore = {
  minCustomersHour: 23,
  maxCustomersHour: 65,
  averageCustomerHour: 0,
  averageCustomerCookies: 6.3,
  cookiesPurchasedHour: [],
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
}


cookiesPerHour(pikeStore);
