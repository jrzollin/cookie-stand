'use strict';

//functions=====================================================================

function customerNumber(min, max){
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

function cookieTallyAll(){
  for(var i = 0; i < allStores.length; i++){
    cookieTally(allStores[i]);
  }
}

function cookieTally(store){
  cookiesPerHour(store);
  cookiesTotal(store);
  allStoresHourTotal(store);
  dailyTotalAll(store);
  printSales(store);
}

function cookiesTotal(store){
  var totalCookies = 0;
  for(var i = 0; i < store.cookiesPurchasedHour; i++){
    totalCookies = totalCookies + store.cookiesPurchasedHour[i];
    console.log('Total cookies = ' + totalCookies);
  }
  store.totalCookies = totalCookies;
  console.log(store.totalCookies);
}

function allStoresHourTotal(store){
  for(var i = 0; i < store.hoursOpen.length; i++){
    totalHourAll[i] = totalHourAll[i] + store.cookiesPurchasedHour[i];
    console.log('Total cookies purchased across all stores for hour ' + (i +1) + ' = ' + totalHourAll[i]);
  }
}

function cookiesPerHour(store){
  for(var i = 0; i < store.hoursOpen.length; i++){
    store.averageCustomerHour = customerNumber(store.minCustomersHour, store.maxCustomersHour);
    console.log(store.storeLocation + ' Hour ' + (i + 1) + ' customers = ' + store.averageCustomerHour);
    var cookies = Math.floor(store.averageCustomerHour * store.averageCustomerCookies);
    store.cookiesPurchasedHour.push(cookies);
    console.log(store.storeLocation + ' Hour ' + (i + 1) + ' cookies purchased = ' + store.cookiesPurchasedHour[i]);
  }
}

function printSales(store){
  //create row
  var rowEl = document.createElement('tr');
  tableBodyEl.appendChild(rowEl);

  //create location column
  var column1El = document.createElement('td');
  column1El.textContent = store.storeLocation;
  rowEl.appendChild(column1El);

  //create hourly totals columns
  for(var i = 0; i < store.hoursOpen.length; i++){
    var newColumn = document.createElement('td');
    newColumn.textContent = store.cookiesPurchasedHour[i];
    rowEl.appendChild(newColumn);
  }

  //create store total columns
  var columnTotal = document.createElement('td');
  columnTotal.textContent = store.totalCookies;
  rowEl.appendChild(columnTotal);
}

function printHourAllStore(){
  //create footer
  var footEl = document.createElement('tfoot');
  tableEl.appendChild(footEl);

  //create rowE
  var rowEl = document.createElement('tr');
  footEl.appendChild(rowEl);

  //create total columnTotal
  var column1El = document.createElement('th');
  column1El.textContent = 'Totals';
  rowEl.appendChild(column1El);

  //create hourly totals for all stores
  for(var i = 0; i < totalHourAll.length; i++){
    var newColumn = document.createElement('th');
    newColumn.textContent = totalHourAll[i];
    rowEl.appendChild(newColumn);
  }

  //print total all
  var columnTotal = document.createElement('th');
  columnTotal.textContent = totalAll;
  rowEl.appendChild(columnTotal);
}

function dailyTotalAll(store){
  for(var i = 0; i < allStores.length; i++);{
    totalAll = totalAll + store.totalCookies;
  }
}



function NewStore(storeLocation, minCustomersHour, maxCustomersHour, averageCustomerCookies){
  this.storeLocation = storeLocation;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.averageCustomerCookies = averageCustomerCookies;
  this.averageCustomerHour = 0;
  this.cookiesPurchasedHour = [];
  this.totalCookies = 0;
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  allStores.push(this);
}

//variables=====================================================================

var allStores = [];
var totalHourAll = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalAll = 0;

var pikeStore = new NewStore('1st and Pike', 23, 65, 6.3);
var seaTacStore = new NewStore('SeaTac Airport', 3, 24, 1.2);
var seattleCenterStore = new NewStore('Seattle Center', 11, 38, 3.7);
var capitolHillStore = new NewStore('Capitol Hill', 20, 38, 2.3);
var alkiStore = new NewStore('Alki', 2, 16, 4.6);
console.log(allStores);

var tableEl = document.getElementById('cookie-table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);




cookieTallyAll();
printHourAllStore();
