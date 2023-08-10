class Media {
  constructor(title, ratings) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = ratings;
  }

  //   setters
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  //   getters
  set isCheckedOut(isCheckedOut) {
    return (this._isCheckedOut = isCheckedOut);
  }
  //   methods
  toggleCheckOutStatus() {
    this._isCheckedOut = this._isCheckedOut ? false : true;
  }
  /**
   * this method calculate the average rating
   */
  getAverageRating() {
    return (
      this._ratings.reduce((previousV, currentV) => previousV + currentV) /
      this._ratings.length
    );
  }
  addRating(rateValue) {
    this._ratings.push(rateValue);
  }
}
