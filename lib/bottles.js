import { downTo } from "./helpers";

export class Bottles {
  verse(n) {
    let txt =
      `${n === 0 ? "No more" : n} bottle${n === 1 ? "" : "s"}` +
      " of beer on the wall, " +
      `${n === 0 ? "no more" : n} bottle${n === 1 ? "" : "s"} of beer.\n` +
      `${
        n > 0
          ? `Take ${n > 1 ? "one" : "it"} down and pass it around`
          : "Go to the store and buy some more"
      }, ` +
      `${n - 1 < 0 ? 99 : n - 1 === 0 ? "no more" : n - 1} bottle${
        n - 1 === 1 ? "" : "s"
      }` +
      " of beer on the wall.\n";
    return txt;
  }

  verses(high, low) {
    return downTo(high, low)
      .map((n) => this.verse(n))
      .join("\n");
  }

  song() {
    return this.verses(99, 0);
  }
}
