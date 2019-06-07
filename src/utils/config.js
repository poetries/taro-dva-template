
import {BASE_URL} from '@config/host';

export function getOrigin(url = '') {
  const urlP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  if (urlP.test(url)) {
    return ''
  }

  return BASE_URL+url;
}


