let URLPrefix = 'https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/(getAppsNear)?readform&sbcat=All&typ=New';

class SlotsFinder {
  static find(category) {
    let URL = SlotsFinder.chooseURL(category);

    return new Promise((resolve, reject) => {
      fetch(URL)
        .then(response => response.json())
        .then(json => {
          if (typeof json.slots == 'undefined' || typeof json.slots == 'string')
            return [];

          return json.slots;
        })
        .then(slots => resolve(slots))
        .catch(err => reject(err));
    });
  }

  static chooseURL(category) {
    return `${URLPrefix}&cat=${category}`;
  }
}

export default SlotsFinder;
