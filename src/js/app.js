function canIterate_v1(obj) {
  try {
    for (const item of obj) {
    }
    return true;
  } catch (e) {
    return false;
  }
}

function canIterate_v2(obj) {
  return Symbol.iterator in Object(obj);
}

// canIterate(new Map()); // true
// canIterate(new Set()); // true
// canIterate(null); // false
// canIterate(10); // false
//  canIterate("Netology"); // true
