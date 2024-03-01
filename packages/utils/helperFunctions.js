export const routeTo = (store, path, routeAfter = 1000) =>
  setTimeout(() => {
    store.setState({ route: path });
  }, routeAfter);

/* eslint-disable implicit-arrow-linebreak */
export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

/**
 * The below function convert the normal array of object to
 * {label: "",value:1} pair which is suitable for React Select
 * component.
 */
export const ConvertToReactSelect = (data, valueKey, labelKey) => {
  if (!data || !data?.length) {
    return [];
  }

  return data.map((val) => ({
    ...val,
    value: val[valueKey],
    label: val[labelKey],
  }));
};

/**
 * The below function convert the uploaded file to base64 file.
 */
export const ToBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

/**
 * The below function capitalize the given string.
 */
export const CapitalizeString = (string) => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 * The below function convert the HEX code to RGBA
 */
export function ConvertHexToRGBA(hex, opacity) {
  if (hex) {
    const { replace } = hex;
    const tempHex = replace('#', '');
    const r = parseInt(tempHex.substring(0, 2), 16);
    const g = parseInt(tempHex.substring(2, 4), 16);
    const b = parseInt(tempHex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity / 100})`;
  }
  return null;
}

/**
 * The below function will scroll the page to the Top.
 */
export const ScrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Check the versions
export const semverGreaterThan = (versionA, versionB) => {
  const versionsA = versionA ? versionA.split(/\./g) : ['0', '0', '0'];
  const versionsB = versionB ? versionB.split(/\./g) : ['0', '0', '0'];

  while (versionsA.length || versionsB.length) {
    const a = Number(versionsA.shift());

    const b = Number(versionsB.shift());
    // eslint-disable-next-line no-continue
    if (a === b) continue;
    // eslint-disable-next-line no-restricted-globals
    return a > b || isNaN(b);
  }
  return false;
};

// Refresh the cache by clearing the cache and reload
export const refreshCacheAndReload = () => {
  if (caches) {
    // Service worker cache should be cleared with caches.delete()
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  }
  // delete browser cache and hard reload
  window.location.reload(true);
};

// To get distance between two lattitude and longitude
export const distance = (lat1, lon1, lat2, lon2, unit) => {
  if (lat1 === lat2 && lon1 === lon2) {
    return 0;
  }
  const radlat1 = (Math.PI * lat1) / 180;
  const radlat2 = (Math.PI * lat2) / 180;
  const theta = lon1 - lon2;
  const radtheta = (Math.PI * theta) / 180;
  let dist =
    Math.sin(radlat1) * Math.sin(radlat2) +
    Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  if (dist > 1) {
    dist = 1;
  }
  dist = Math.acos(dist);
  dist = (dist * 180) / Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit === 'K') {
    dist *= 1.609344;
  }
  if (unit === 'N') {
    dist *= 0.8684;
  }
  return dist;
};

// To get first letter of the name
export const getFirstLetterOfName = (name) =>
  name?.length > 0 ? name?.charAt(0) : '';
// To check number or not
export const isNumber = (value) => {
  const number = '^[0-9]*$';
  if (value?.length > 0) {
    if (value.match(number)) {
      return true;
    }
    return false;
  }
  return true;
};
// To check blood_pressure or not
export const isBloodPressure = (value) => {
  const number = '^[0-9./]+$';
  if (value?.length > 0) {
    if (value.match(number)) {
      return true;
    }
    return false;
  }
  return true;
};

// To check decimal number or not
export const isDecimalNumber = (value) => {
  const decimalNumber = /^\d+(\.\d{1,2})?$/;
  if (value?.length > 0) {
    if (decimalNumber.test(value)) {
      return true;
    }
    return false;
  }
  return true;
};
// To check string or not
export const isString = (value) => {
  const letters = /^[A-Za-z]+$/;
  if (value?.length > 0) {
    if (letters.test(value)) {
      return true;
    }
    return false;
  }
  return true;
};

// To check valid blood pressure or not
export const isValidBloodPressure = (value) => {
  const BP_regex = /^\d{1,3}\/\d{1,3}$/;
  if (BP_regex.test(value)) {
    return true;
  }
  return false;
};

export function camelCaseToTitleCase(text) {
  if (text?.length > 0) {
    const result = text.replace(/([A-Z])/g, ' $1');
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }
  return '';
}

export function constructMasterId(data, key) {
  const idArray = [];
  if (Array.isArray(data) && data?.length > 0) {
    data.forEach((val) => {
      idArray.push({ id: val[key] });
    });
  }
  return idArray;
}

export function constructBMI(height, weight) {
  if (height > 0 && weight > 0) {
    return (weight / ((height / 100) * (height / 100))).toFixed(2);
  }
  return '';
}

// To check http url or not
export const isHttpURL = (value) => {
  const isUrl = /^https?:\/\//;
  if (value?.length > 0) {
    if (isUrl.test(value)) {
      return true;
    }
    return false;
  }
  return true;
};

// To change mobile number from 971630322 to xxxxx xxx22
export const encriptMobileNumber = (value) => {
  let result;
  if (value) {
    result = `${'*'.repeat(value.length - 5)} ${'*'.repeat(
      value.length - 7
    )}${value.slice(-2)}`;
  }
  return result;
};
