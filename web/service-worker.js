self.addEventListener('push', function(event) {
  const pushData = event.data.json();
  const title = pushData.notification.title;
  const body = pushData.notification.body;

  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: "./favicon.ico",
    })
  );
});
