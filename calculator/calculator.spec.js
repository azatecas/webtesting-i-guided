const { add } = require('./calculator.js');

// test away!
it("should runt he tests", function() {
    expect(true).toBe(true);
})

describe("calculator.js", function() {
    describe('.add()', () => {
        it('should return the sum of the two numbers passed as arguments', () => {
            //arrange (setup the environment and inputs)

            //act
            const sum = add(2,2);

            //assert
            expect(sum).toBe(4)
        })

        it('should return the sum of two numbers', () => {
            expect(add(2,2)).toBe(4);
            expect(add(2,5)).toBe(7);
            expect(add(2,1)).toBe(3);
            expect(add(-2,2)).toBe(0);
            expect(add(2,9)).toBe(11);

        })

        it('should return 0 when called with no arguments', () =>{
            expect(add()).toBe(0);
        });



        it('should return the value of the argument when passing only one number',() => {
            expect(add(0)).toBe(0);
            // expect(add(1)).toBe(1);
            // expect(add(undefined, 1)).toBe(1);
        });

        it('should thow an error when arguments are not numbers', () =>{
            expect(() => {
                add(2,{})
            }).toThrow();

            expect(() => {
                add(2,[])
            }).toThrow();

            expect(() => {
                add(2,"two")
            }).toThrow();

            expect(() => {
                add(2,NaN)
            }).toThrow();

            expect(() => {
                add(2, null)
            }).toThrow();
        })



        it.todo('should thow an error when arguments are not numbers')
        
    });
    
})