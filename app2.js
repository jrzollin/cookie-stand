'use strict';

function NewStore(storeLocation, minCustomersHour, maxCustomersHour, averageCustomerCookies){
  this.storeLocation = storeLocation;
  this.minCustomersHour = minCustomersHour;
  this.maxCustomersHour = maxCustomersHour;
  this.averageCustomerCookies = averageCustomerCookies;
  this.hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.CustomerPerHour = [];
  this.cookiesPurchasedHour = [];
  this.totalCookies = 0;
  this.cookiesPerHour();
  allStores.push(this);
}

NewStore.prototype.cookiesPerHour = function(){
  var totalCookies = 0;
  for(var i = 0; i < this.hoursOpen.length; i++){
    var customers = customerNumber(this.minCustomersHour, this.maxCustomersHour);
    this.CustomerPerHour.push(customers);
    // console.log(this.storeLocation + ' Hour ' + (i + 1) + ' customers = ' + customers);

    var cookies = Math.floor(customers * this.averageCustomerCookies);
    this.cookiesPurchasedHour.push(cookies);
    // console.log(this.storeLocation + ' Hour ' + (i + 1) + ' cookies purchased = ' + this.cookiesPurchasedHour[i]);

    var totalCookies = totalCookies + this.cookiesPurchasedHour[i];
    // console.log('Total cookies = ' + totalCookies);
    this.totalCookies = totalCookies;
  }
};

function allStoresHourTotal(store){
  for(var i = 0; i < store.hoursOpen.length; i++){
    totalHourAll[i] = totalHourAll[i] + store.cookiesPurchasedHour[i];
    // console.log('Total cookies purchased across all stores for hour ' + (i + 1) + ' = ' + totalHourAll[i]);
  }
}

function dailyTotalAll(store){
    totalAll = totalAll + store.totalCookies;
}

function customerNumber(min, max){
  // console.log(max - min + 1);
  // console.log((max + 1) - min);
  // console.log((max - min) + 1);
  return Math.floor(Math.random() * (max - min + 1) + min);
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
  if(document.getElementById('footer')) {
    console.log(tableEl);
    var child = document.getElementById('footer');
    var parent = child.parentNode;
    parent.removeChild(child);
  }
  //create footer
  var footEl = document.createElement('tfoot');
  footEl.setAttribute('id', 'footer');
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

var tableEl = document.getElementById('cookie-table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

var allStores = [];
var totalHourAll = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var totalAll = 0;

var formEl = document.getElementById('form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  //console.log(Math.floor(Math.random() * ((65 + 1) - 23)) + 23);

  var storeLocation = event.target.storeLocation.value;
  var minCustomersHour = parseInt(event.target.minCustomer.value);
  var maxCustomersHour = parseInt(event.target.maxCustomer.value);
  var averageCustomerCookies = parseInt(event.target.avgSale.value);
  // console.log(event.target.minCustomer.value);
  // console.log(event.target.maxCustomer.value);
  // console.log(event.target.avgSale.value);
  var newStore = new NewStore(storeLocation, minCustomersHour, maxCustomersHour, averageCustomerCookies);
  console.log(allStores);
  printStore(newStore);
}


// var pikeStore = new NewStore('1st and Pike', 23, 65, 6.3);
// var seaTacStore = new NewStore('SeaTac Airport', 3, 24, 1.2);
// var seattleCenterStore = new NewStore('Seattle Center', 11, 38, 3.7);
// var capitolHillStore = new NewStore('Capitol Hill', 20, 38, 2.3);
// var alkiStore = new NewStore('Alki', 2, 16, 4.6);
// console.log(allStores);


function printStore(newStore){
  printSales(newStore);
  allStoresHourTotal(newStore);
  dailyTotalAll(newStore);

  printHourAllStore();
}
