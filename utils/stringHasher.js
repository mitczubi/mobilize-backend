const seedrandom = require('seedrandom');
const { customRandom, urlAlphabet } = require('nanoid');

exports.urlShortener = function(string) {
    const rng = seedrandom(string);
    const nanoid = customRandom(urlAlphabet, 10, size => {
        return (new Uint8Array(size)).map(() => 256 * rng())
    })
    return nanoid()
}