class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  //   setters
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
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
    let avgRate =
      this._ratings.reduce((previousV, currentV) => previousV + currentV) /
      this._ratings.length;
    return Math.floor(avgRate);
  }
  addRating(rateValue) {
    this._ratings.push(rateValue);
  }
}

// book child class of media
class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  // getters
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}
// Movie child class of media
class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  // getters
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

// book instance
const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);
historyOfEverything.toggleCheckOutStatus();
console.log("value of checkout :", historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(
  "Average rating of the book :",
  historyOfEverything.getAverageRating()
);

// Movie instance
const speed = new Movie("Speed", "Jan de Bont", 116);
speed.toggleCheckOutStatus();
console.log("speed movie stats:", speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log('speed average rating :',speed.getAverageRating());
