const path = require('path');

const notification = {
  title: 'AVLIS NETWORKS NASDAQ',
  body: 'Hora de comprar!',
  icon: path.join(__dirname, '../../../assets/img/programming.png'),
};
const notificationButton = document.getElementById('advanced-noti');

notificationButton.addEventListener('click', () => {
  const myNotification = new window.Notification(notification.title, notification);

  myNotification.onclick = () => {
    console.log('Notification clicked');
  };
});
