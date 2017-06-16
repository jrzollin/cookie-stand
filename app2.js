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
  // this.cookiesTotal();
  allStores.push(this);
}

NewStore.prototype.cookiesPerHour = function(){
  var totalCookies = 0;
  for(var i = 0; i < this.hoursOpen.length; i++){
    var customers = customerNumber(this.minCustomersHour, this.maxCustomersHour);
    this.CustomerPerHour.push(customers);
    console.log(this.storeLocation + ' Hour ' + (i + 1) + ' customers = ' + customers);

    var cookies = Math.floor(customers * this.averageCustomerCookies);
    this.cookiesPurchasedHour.push(cookies);
    console.log(this.storeLocation + ' Hour ' + (i + 1) + ' cookies purchased = ' + this.cookiesPurchasedHour[i]);

    var totalCookies = totalCookies + this.cookiesPurchasedHour[i];
    console.log('Total cookies = ' + totalCookies);
    this.totalCookies = totalCookies;
  }
}

function customerNumber(min, max){
  return Math.floor(Math.random() * ((max + 1) - min)) + min;
}

var allStores = [];
var pikeStore = new NewStore('1st and Pike', 23, 65, 6.3);
console.log(allStores);

var tableEl = document.getElementById('cookie-table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);
