class SlotsFinder {
  static find() {
    return new Promise((resolve, reject) => {
      fetch('https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/(getApps4DTAvailability)?openpage&&cat=Work&sbcat=All&typ=Renewal&_3123123')
        .then(response => response.json())
        .then(json => typeof json.slots == 'string' ? [] : json.slots)
        .then(slots => resolve(slots))
        .catch(err => reject(err));
    });
  }
}

export default SlotsFinder;
