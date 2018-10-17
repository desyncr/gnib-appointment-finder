import UIButtonToggler from './ui/button-toggler.js';
import UILoadingGif from './ui/loading-gif.js';
import UISelectCategory from './ui/select-category.js';
import SlotsNotifierScheduler from './slots/notifier-scheduler.js';

window.onload = function () {
  let toggler = new UIButtonToggler();
  let loading = new UILoadingGif();
  let select = new UISelectCategory();
  toggler.onclick(function () {
    if (Notification.permission != 'granted')
      Notification.requestPermission();

    loading.show();
    select.disable();
    SlotsNotifierScheduler.schedule(5000, select.value());
  });
};
