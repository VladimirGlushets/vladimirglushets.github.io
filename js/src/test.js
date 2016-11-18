'use strict';

let user = {};

let proxy = new Proxy(user, {
  get(target, prop) {
    alert(`Чтение ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    alert(`Запись ${prop} ${value}`);
    target[prop] = value;
    return true;
  }
});

proxy.firstName = "Ilya"; // запись

proxy.firstName; // чтение

alert(user.firstName); // Ilya
