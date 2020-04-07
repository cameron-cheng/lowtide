const assert = require('chai').assert;
const tail = require('../tail.js');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

describe("tail", () => {
    it("returns ['Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
      assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Labs']);
    });

  });





