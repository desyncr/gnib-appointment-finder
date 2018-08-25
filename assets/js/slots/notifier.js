import SlotsNotification from './notification.js';

class SlotsNotifier {
  static notify(slots) {
    if (Notification.permission != 'granted')
      Notification.requestPermission();

    // don't notify if slots is empty
    if (slots.length == 0)
      return;

    let options = {
      body: SlotsNotification.build(slots),
      icon: 'https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/justice-doj_logo-new.png'
    };

    new Notification('GNIB Appointment Finder', options);
  }
}

export default SlotsNotifier;
