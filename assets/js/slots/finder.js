let URLPrefix = 'https://burghquayregistrationoffice.inis.gov.ie/Website/AMSREG/AMSRegWeb.nsf/(getAppsNear)?readform=&cat=All&sbcat=All&typ=New&k=35DBA8E54C014CA3563BDB2EF64CD14C&p=EBC9DA953034DCA0D2C0CA44A1ED12D6&_=1606476456821';

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
    return `${URLPrefix}&cat=All`;
  }
}

export default SlotsFinder;
