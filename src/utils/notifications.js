import { Notifications, Permissions } from 'expo';

function createNotification() {
  return {
    title: 'Você precisa treinar',
    body:
      'Não esqueça do seu compromisso, escolha um baralho e treine agora mesmo!',
    ios: {
      sound: true
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true
    }
  };
}
export async function setLocalNotification() {
  const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  if (status === 'granted') {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(20);
    tomorrow.setMinutes(0);
    await Notifications.cancelAllScheduledNotificationsAsync();
    Notifications.scheduleLocalNotificationAsync(createNotification(), {
      time: tomorrow,
      repeat: 'day'
    });
  }
}
