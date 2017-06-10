'use strict';

function customerNumber(min, max){
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function cookieTally(store){
  cookiesPerHour(store);
  cookiesTotal(store);
}

function cookiesTotal(store){
  var totalCookies = 0;
  for(var i = 0; i < store.hoursOpen.length; i++){
    totalCookies = totalCookies + store.cookiesPurchasedHour[i];
    console.log('Total cookies = ' + totalCookies);
  }
  store.totalCookies = totalCookies;
  console.log(store.totalCookies);
}

function cookiesPerHour(store){
  for(var i = 0; i < store.hoursOpen.length; i++){
    store.averageCustomerHour = customerNumber(store.minCustomersHour, store.maxCustomersHour);
    console.log('Hour ' + (i + 1) + ' customers = ' + store.averageCustomerHour);
    var cookies = Math.floor(store.averageCustomerHour * store.averageCustomerCookies);
    store.cookiesPurchasedHour.push(cookies);
    console.log('Hour ' + (i + 1) + ' cookies purchased = ' + store.cookiesPurchasedHour[i]);
  }
}

function printSales(store){
  var sectionEl = document.createElement('section');
  sectionEl.setAttribute('class', 'store');
  document.body.appendChild(sectionEl);
  var headerEl = document.createElement('h3');
  sectionEl.appendChild(headerEl);
  headerEl.textContent = store.storeLocation;
  var listEl = document.createElement('ul');
  sectionEl.appendChild(listEl);
  for(var i = 0; i < store.hoursOpen.length; i++){
    var listItemEl = document.createElement('li');
    listEl.appendChild(listItemEl);
    listItemEl.textContent = store.hoursOpen[i] + ': ' + store.cookiesPurchasedHour[i] + ' cookies';
  }
  var listItemEl = document.createElement('li');
  listEl.appendChild(listItemEl);
  listItemEl.textContent = 'Total: ';
}



var pikeStore = {
  storeLocation: '1st and Pike',
  minCustomersHour: 23,
  maxCustomersHour: 65,
  averageCustomerHour: 0,
  averageCustomerCookies: 6.3,
  cookiesPurchasedHour: [],
  totalCookies: 0,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
}

var seaTacStore = {
  storeLocation: 'SeaTac Airport',
  minCustomersHour: 3,
  maxCustomersHour: 24,
  averageCustomerHour: 0,
  averageCustomerCookies: 1.2,
  cookiesPurchasedHour: [],
  totalCookies: 0,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
}

var seattleCenterStore = {
  storeLocation: 'Seattle Center',
  minCustomersHour: 11,
  maxCustomersHour: 38,
  averageCustomerHour: 0,
  averageCustomerCookies: 3.7,
  cookiesPurchasedHour: [],
  totalCookies: 0,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
}

var capitolHillStore = {
  storeLocation: 'Capitol Hill',
  minCustomersHour: 20,
  maxCustomersHour: 38,
  averageCustomerHour: 0,
  averageCustomerCookies: 2.3,
  cookiesPurchasedHour: [],
  totalCookies: 0,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
}

var alkiStore = {
  storeLocation: 'Alki',
  minCustomersHour: 2,
  maxCustomersHour: 16,
  averageCustomerHour: 0,
  averageCustomerCookies: 4.6,
  cookiesPurchasedHour: [],
  totalCookies: 0,
  hoursOpen: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
}


cookieTally(pikeStore);
printSales(pikeStore);
//printSales(seaTacStore);
