const fs = require('fs');

const webpush = require('web-push');

const vapidKeys = JSON.parse(fs.readFileSync(__dirname + '/vapid.json', 'utf8'));
const subscription = JSON.parse(fs.readFileSync(__dirname + '/subscription.json', 'utf8'));

webpush.setVapidDetails(
  process.argv[2],
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const parts = process.argv.slice(3).join(' ').split("--").map(function(x) {
  return x.trim();
});

webpush.sendNotification(subscription, JSON.stringify({
  "notification": {
    "title": parts[0],
    "body": parts[1],
  }
}));
