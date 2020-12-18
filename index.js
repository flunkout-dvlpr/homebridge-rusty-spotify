const SpotifyPlatform = require('./homebridge_rusty_spotify.js').SpotifyPlatform;

function partial(fn /*, rest args */){
  return fn.bind.apply(fn, Array.apply(null, arguments));
}

module.exports = function(homebridge) {
  Accessory = homebridge.platformAccessory;
  Service = homebridge.hap.Service;
  UUIDGen = homebridge.hap.uuid;
  Characteristic = homebridge.hap.Characteristic;

  createSwitch = function(name) {
    let newSwitch = new Service.Speaker(name);
    // we'll use volume from speaker to control the volume 
    newSwitch.addCharacteristic(Characteristic.Volume);
    return newSwitch;
  }

  constructor = partial(SpotifyPlatform, homebridge);
  homebridge.registerPlatform("homebridge-rusty-spotify", "Spotify", constructor, true);
}
