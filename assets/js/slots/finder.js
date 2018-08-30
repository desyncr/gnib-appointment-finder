class SlotsFinder {
  static find() {
    return new Promise((resolve, reject) => {
      fetch('https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/(getApps4DTAvailability)?openpage&&cat=Work&sbcat=All&typ=Renewal&_3123123')
        .then(response => response.json())
        .then(json => resolve(json.slots))
        .catch(err => reject(err));
    });
  }
}

export default SlotsFinder;
