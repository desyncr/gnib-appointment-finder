class SlotsFinder {
  static find() {
    return new Promise((resolve, reject) => {
      fetch('https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/(getApps4DTAvailability)?openpage&&cat=Work&sbcat=All&typ=Renewal&_3123123')
        .then(response => response.json())
        .then(json => JSON.parse(json.slots))
        .then(slots => resolve(slots))
        .catch(err => reject(err));
    });
  }
}

class SlotsNotification {
  static build(slots) {
    let numSlots = slots.length;

    return `There are ${numSlots} new slots available!`
  }
}

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

class ButtonToggler {
  constructor() {
    this.button = document.getElementById('button');
  }

  onclick(callback) {
    let self = this;
    self.button.onclick = function () {
      self.button.disabled = true;
      callback();
    };
  }
}

class LoadingGif {
  constructor() {
    this.loading = document.getElementById('loading');
  }

  show() {
    this.loading.style = null;
  }
}

function SlotsFilter() {
  this.cachedSlots = new Set();
}
SlotsFilter.instance = null;
SlotsFilter.getInstance = function () {
  if (SlotsFilter.instance == null)
    SlotsFilter.instance = new SlotsFilter();

  return SlotsFilter.instance;
};
SlotsFilter.prototype.newSlots = function (slots) {
  let self = this;
  let newSlots = [];

  slots.forEach(function (slot) {
    if (!self.cachedSlots.has(slot)) {
      self.cachedSlots.add(slot);
      newSlots.push(slot);
    }
  });

  return newSlots;
};

class NotificationScheduler {
  static schedule(interval) {
    setInterval(function () {
      SlotsFinder.find()
        .then(slots => SlotsFilter.getInstance().newSlots(slots))
        .then(slots => SlotsNotifier.notify(slots))
        .catch(err => console.error(err))
    }, interval);
  }
}

window.onload = function () {
  let toggler = new ButtonToggler();
  let loading = new LoadingGif();
  toggler.onclick(function () {
    loading.show();
    NotificationScheduler.schedule(5000);
  });
};
