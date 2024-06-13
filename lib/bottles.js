import { downTo, capitalize } from "./helpers";

class Bottles {
  verse(bottles) {
    return new Round(bottles).toString();
  }

  verses(bottlesAtStart, bottlesAtEnd) {
    return downTo(bottlesAtStart, bottlesAtEnd)
      .map((bottles) => this.verse(bottles))
      .join("\n");
  }

  song() {
    return this.verses(99, 0);
  }
}

class Round {
  constructor(bottles) {
    this.bottles = bottles;
  }

  isLastBeer() {
    return this.bottles === 1;
  }

  isAllOut() {
    return this.bottles === 0;
  }

  itOrOne() {
    return this.isLastBeer() ? "it" : "one";
  }

  drinkBeer() {
    return `Take ${this.itOrOne()} down and pass it around`;
  }

  buyNewBeer() {
    return "Go to the store and buy some more";
  }

  goToTheStoreOrTakeOneDown() {
    if (this.isAllOut()) {
      this.bottles = 99;
      return this.buyNewBeer();
    } else {
      const lyrics = this.drinkBeer();
      this.bottles--;
      return lyrics;
    }
  }

  anglicizedBottleCount() {
    return this.isAllOut() ? "no more" : this.bottles.toString();
  }

  pluralizedBottleForm() {
    return this.isLastBeer() ? "bottle" : "bottles";
  }

  onWall() {
    return "on the wall";
  }

  beer() {
    return "beer";
  }

  bottlesOfBeer() {
    return (
      this.anglicizedBottleCount() +
      " " +
      this.pluralizedBottleForm() +
      " of " +
      this.beer()
    );
  }

  response() {
    return (
      this.goToTheStoreOrTakeOneDown() +
      ", " +
      this.bottlesOfBeer() +
      " " +
      this.onWall() +
      ".\n"
    );
  }

  challenge() {
    return (
      capitalize(this.bottlesOfBeer()) +
      " " +
      this.onWall() +
      ", " +
      this.bottlesOfBeer() +
      ".\n"
    );
  }

  toString() {
    return this.challenge() + this.response();
  }
}

export { Bottles };
