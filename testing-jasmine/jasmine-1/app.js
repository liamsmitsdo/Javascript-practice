const earth = {
    isRound: true,
    numberFromSun: 3
}

//jasmine test
describe('earth', function(){
    it('is round', function(){
        expect(earth.isRound).toBe(true)
    })
    it('is the third planet from the sun', function(){
        expect(earth.numberFromSun).toBe(3)
    })
})

describe('Arrays', function(){
    let arr;
    //the beforeEach runs code before every it declaration
    //afterEach would run after every declaration
    beforeEach(function(){
        arr = [1,3,5]
    })
    it('adds elements to an array', function(){
        arr.push(7)
        expect(arr).toEqual([1,3,5,7])
    })
    it('returns the new length of the array', function(){
        expect(arr.push(7)).toBe(4)
    })
    it('adds anything into the array', function(){
        expect(arr.push({})).toBe(4)
    })
})

//matchers
//toBe  not.toBe
//toBeCloseTo
//toBeDefined
//toBeFalsey toBeTruthy
//toBeGreaterThan toBeLessThan
//toContain
//toEqual

//we can nest describe blocks
describe('arrays', function(){
    let arr;
    beforeEach(function(){
        arr = [1,3,5]
    })

    describe('#unshift', function(){
        //it
        //expects
    })

    describe('#push', function(){
        //it
        //expects
    })
})

//pending tests - mark it with an x or add pending() inside it

describe('pending specs', function(){
    xit('can start with an xit', function(){
        expect(true).toBe(true)
    })
})