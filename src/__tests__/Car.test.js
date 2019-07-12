const Car = require('../Car');

describe('testing constructor', ()=> {
    it('should create a specified color and registration number', () => {
        const color = 'White';
        const regNo = 'KA-01-HH-1234';
        const car = new Car(color, regNo);
        expect(car).not.toBe(null);
        expect(typeof car).toBe('object');
        expect(car).toEqual({'color': 'White', 'regNo': 'KA-01-HH-1234'});
    });

});
