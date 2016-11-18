'use strict';

var user = {};

var proxy = new Proxy(user, {
  get: function get(target, prop) {
    alert("\u0427\u0442\u0435\u043D\u0438\u0435 " + prop);
    return target[prop];
  },
  set: function set(target, prop, value) {
    alert("\u0417\u0430\u043F\u0438\u0441\u044C " + prop + " " + value);
    target[prop] = value;
    return true;
  }
});

proxy.firstName = "Ilya"; // запись

proxy.firstName; // чтение

alert(user.firstName); // Ilya