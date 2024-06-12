import { downTo } from "./helpers";

const NoMore = (verse) =>
  "No more bottles of beer on the wall, " +
  "no more bottles of beer.\n" +
  "Go to the store and buy some more, " +
  "99 bottles of beer on the wall.\n";

const LastOne = (verse) =>
  "1 bottle of beer on the wall, " +
  "1 bottle of beer.\n" +
  "Take it down and pass it around, " +
  "no more bottles of beer on the wall.\n";

const Penultimate = (verse) =>
  "2 bottles of beer on the wall, " +
  "2 bottles of beer.\n" +
  "Take one down and pass it around, " +
  "1 bottle of beer on the wall.\n";

const Default = (verse) =>
  `${verse.number} bottles of beer on the wall, ` +
  `${verse.number} bottles of beer.\n` +
  "Take one down and pass it around, " +
  `${verse.number - 1} bottles of beer on the wall.\n`;

class Bottles {}
