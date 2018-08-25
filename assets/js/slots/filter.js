let cachedSlots = new Set();

class SlotsFilter {
  static newSlots(slots) {
    let newSlots = [];

    slots.forEach(function (slot) {
      if (!cachedSlots.has(slot)) {
        cachedSlots.add(slot);
        newSlots.push(slot);
      }
    });

    return newSlots;
  }
}

export default SlotsFilter;
