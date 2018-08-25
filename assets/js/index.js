import UIButtonToggler from './ui/button-toggler.js';
import UILoadingGif from './ui/loading-gif.js';
import SlotsNotifierScheduler from './slots/notifier-scheduler.js';

window.onload = function () {
  let toggler = new UIButtonToggler();
  let loading = new UILoadingGif();
  toggler.onclick(function () {
    if (Notification.permission != 'granted')
      Notification.requestPermission();

    loading.show();
    SlotsNotifierScheduler.schedule(5000);
  });
};
