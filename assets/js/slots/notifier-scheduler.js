import SlotsFinder from './finder.js';
import SlotsNotifier from './notifier.js';
import SlotsFilter from './filter.js';

class SlotsNotifierScheduler {
  static schedule(interval, category) {
    setInterval(function () {
      SlotsFinder.find(category)
        .then(slots => SlotsFilter.newSlots(slots))
        .then(slots => SlotsNotifier.notify(slots))
        .catch(err => console.error(err))
    }, interval);
  }
}

export default SlotsNotifierScheduler;
