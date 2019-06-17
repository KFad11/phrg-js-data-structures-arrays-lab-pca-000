// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push('Ralph')
}

function destructivelyPrependDriver(name) {
  drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const newDrivers = [...drivers,name];
  return newDrivers
}

function prependDriver(name) {
  const veryNewDrivers = [name,...drivers];
  return veryNewDrivers
}

function removeLastDriver() {
  const removedLast = drivers.slice(0, 2);
  return removedLast
}

function removeFirstDriver() {
  const removedFirst = drivers.slice(1);
  return removedFirst
}
