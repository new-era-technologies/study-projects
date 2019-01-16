'use strict';


function ElectroNetwork(items) {
    if (Array.isArray(items)) {
        this.items = items;
    } else {
        alert('Item must be in array of Electronetwork');
    }
}
ElectroNetwork.prototype.countPower = function () {
    var power = 0;
    for (var k in this.items) {
        if (this.items[k] instanceof ElectroLine !== true) {
            power += this.items[k].getPower();
            power += this.items[k].getNightPower();
        }
    }
    return power;
};
ElectroNetwork.prototype.countPrice = function () {
  var balance = this.countPower();
  var price = 0;
  for (var y = 0; y < this.items.length; y++) {
      if (this.items[y] instanceof ElectroLine) {
          price += this.items[y].countPrice(balance);
          balance += this.items[y].countPower(balance);
      }
  }
  return price;
};

function ElectroStation(power) {
    if (power >= Math.pow(10, 6) && power <= 1000 * Math.pow(10, 6)) {
        this.power = power;
        this.nightPower = power;
    } else {
        alert('Electrostation power must be in range from 1mW to 1000mW');
    }
}
ElectroStation.prototype.getPower = function() {
    return this.power;
};
ElectroStation.prototype.getNightPower = function() {
    return this.nightPower;
};

function SunPanel(power) {
    if (power >= Math.pow(10, 6) && power <= 50 * Math.pow(10, 6)) {
        this.power = power;
    } else {
        alert('SunPanel power must be in range from 1mW to 50 mW');
    }
}
SunPanel.prototype.nightPower = 0;
SunPanel.prototype.getPower = function () {
  return this.power;
};
SunPanel.prototype.getNightPower = function () {
  return this.nightPower;
};
function SomeSunPanel() {
    this.power = Math.pow(10, 6);
}
SomeSunPanel.prototype = Object.create(SunPanel.prototype);
SomeSunPanel.prototype.constructor = SomeSunPanel;
function AnotherSunPanel() {
    this.power = 2 * Math.pow(10, 6);
}
AnotherSunPanel.prototype = Object.create(SunPanel.prototype);
AnotherSunPanel.prototype.constructor = AnotherSunPanel;

function LiveHouse(flats) {
    this.power = 0;
    this.nightPower = 0;
    if (flats >= 1 && flats <= 400 ) {
        this.flats = flats;
    } else {
        alert('LiveHouse flats count must be in range from 1 to 400')
    }
}
LiveHouse.prototype.getPower = function () {
    this.power = this.flats * -4 * Math.pow(10, 3);
    return this.power;
};
LiveHouse.prototype.getNightPower = function () {
    this.nightPower = this.flats * -1 * Math.pow(10, 3);
    return this.nightPower;
};

function ElectroLine(power, price) {
    this.power = power;
    this.price = price;
}
ElectroLine.prototype.countPower = function (power) {
    for (var i = 0; i < this.power; this.power--) {
        if (power === 0) {
            break;
        }
        power += power / -Math.abs(power);
    }
    return power;
};
ElectroLine.prototype.countPrice = function (power) {
  var price = 0;
  for (var j = 0; j < this.power; this.power--) {
      if (power === 0) {
          break;
      }
      price += this.price / Math.pow(10, 6) * (power / -Math.abs(power));
      power += power / -Math.abs(power);
  }
  return power;
};

var electroNetwork1 = new ElectroNetwork([
    new ElectroStation(300000000),
    new SunPanel(15000000),
    new SunPanel(30000000),
    new SomeSunPanel(),
    new AnotherSunPanel(),
    new LiveHouse(200),
    new LiveHouse(2),
    new LiveHouse(300),
    new LiveHouse(100),
    new LiveHouse(399),
    new LiveHouse(400),
    new ElectroLine(99999999, 6056066),
    new ElectroLine(50000000, 999999999)
]);


console.log('For balance we need ' + electroNetwork1.countPower() + ' W');
console.log('The total price for this will be ' + electroNetwork1.countPrice());