export default class DistrictRepository {
  constructor(data) {
    this.data = this.normalizeData(data);
  }

  normalizeData(data) {
    return data.reduce((obj, location) => {
      const keys = Object.keys(location);
      const formattedKeys = this.getFormattedKeys(keys);
      const newObj = this.getLocationObject(keys, formattedKeys, location);

      if (!obj[location.Location]) {
        obj[location.Location] = [];
      }

      obj[location.Location].push(newObj);
      return obj;
    }, {});
  }

  getFormattedKeys(keys) {
    return keys.map(key => {
      const characterArray = [...key.replace(' ', '')];

      characterArray[0] = characterArray[0].toLowerCase();
      return characterArray.join('');
    })
  }

  getLocationObject(keys, formattedKeys, location) {
    return formattedKeys.reduce((obj, key, i) => {
      if (i !== 0) {
        obj[key] = location[keys[i]];
      }
      return obj;
    }, {});
  }
}
