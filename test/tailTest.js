// tailTest.js

// const tail = require('../tail');
// const assertEqual = require('../assertEqual');


const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words);
//assertEqual(words.length, 3);

const assert = require('chai').assert;
const tail = require("../tail");

console.log(tail);
describe("#tail", () => {
  it("returns 2 === 2", () => {
    assert.strictEqual(tail(words).length, 2);
  });
});