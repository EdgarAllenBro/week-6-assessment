const {shuffleArray} = require('./utils')
const array = [10,20,30,40]
describe('shuffleArray should', () => {
    test('array length is the same', ()=>{
        expect(shuffleArray(array).length).toBe(array.length)
    })
    test('returns array', ()=>{
        expect(Array.isArray(shuffleArray(array))).toBe(true)
    })
})