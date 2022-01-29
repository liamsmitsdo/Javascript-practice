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

//matchers
//toBe  not.toBe
//toBeCloseTo
//toBeDefined
//toBeFalsey toBeTruthy
//toBeGreaterThan toBeLessThan
//toContain
//toEqual