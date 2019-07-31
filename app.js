
var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC821384de2e7df3224a1d0ee0ce60f843', 'bfe1f0b1293d14ddece2b67e3ddf2473');

// Send the text message ...

client.messages.create({
  to: '+27793691302',
  from: '+13365422220',
  body: '\n \n : \n- \n - Oxapo SKHOKHO NAH? :-D '
});