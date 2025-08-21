export default class HolbetonClass {
  constructor(size, locatioin) {
    this._size = size;
    this._location = locatioin;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get locatioin() {
    return this._location;
  }

  set locatioin(value) {
    this._location = value;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
