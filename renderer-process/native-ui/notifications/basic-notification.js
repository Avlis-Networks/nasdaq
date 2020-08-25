const notification = {
  title: 'AVLIS NETWORKS NASDAQ',
  body: 'Hora de comprar!',
};

const notificationButton = document.getElementById('basic-noti');

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification);

  myNotification.onclick = () => {
    console.log('Notification clicked');
  };
});
