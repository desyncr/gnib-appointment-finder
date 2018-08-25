class SlotsNotification {
  static build(slots) {
    let numSlots = slots.length;

    return `There are ${numSlots} new slots available!`
  }
}

export default SlotsNotification;
