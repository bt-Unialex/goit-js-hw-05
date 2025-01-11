'use strict';

console._log = console.log;
console.log = function () {
  const outputP = document.querySelector('p');
  outputP.innerText += arguments[0] + '\n';
  console._log.apply(null, arguments);
};
