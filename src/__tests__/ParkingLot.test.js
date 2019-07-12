var util = require('util');
const ParkingLot = require('../ParkingLot');

describe('testing constructor', ()=> {
    it('should create a parking lot of specified slots and entry points', () => {
        const noOfSlots = 6;
        const noOfEntries = 3;
        const parkingLot = new ParkingLot(noOfSlots, noOfEntries);
        expect(parkingLot).not.toBe(null);
        expect(typeof parkingLot).toBe('object');
        expect(typeof parkingLot).toBe('object');
        expect(parkingLot).toEqual({
            "noOfEntries": 3,
            "noOfSlots": 6,
            "slots": [
                        { id: 1, car: null },
                        { id: 2, car: null },
                        { id: 3, car: null },
                        { id: 4, car: null },
                        { id: 5, car: null },
                        { id: 6, car: null }
                        ]
        });
    });
});

describe('testing parkCar', () => {
    it('should park a car on an empty slot', () => {
        const noOfSlots = 6;
        const noOfEntries = 3;
        const color = 'White';
        const regNo = 'KA-01-HH-1234';
        const entryPointId = 1;
        const parkingLot = new ParkingLot(noOfSlots, noOfEntries);
        const parkingResult = parkingLot.parkCar(color, regNo, entryPointId);
        console.log(util.inspect(parkingLot, false, null, true));
        console.log(parkingResult);
    });

    it('should reply with "NO" if slot is unavailable', () => {
        const noOfSlots = 6;
        const noOfEntries = 3;
        const entryPointId = 1;
        const parkingLot = new ParkingLot(noOfSlots, noOfEntries);
        let parkingResult = parkingLot.parkCar('White', 'KA-01-HH-1234', entryPointId);
        parkingResult = parkingLot.parkCar('White', 'KA-01-HH-9999', entryPointId);
        parkingResult = parkingLot.parkCar('Black', 'KA-01-BB-0001', entryPointId);
        parkingResult = parkingLot.parkCar('Red', 'KA-01-HH-7777', entryPointId);
        parkingResult = parkingLot.parkCar('Blue', 'KA-01-HH-2701', entryPointId);
        parkingResult = parkingLot.parkCar('Black', 'KA-01-HH-3141', entryPointId);


        parkingResult = parkingLot.parkCar('Black', 'KA-01-HH-3146', entryPointId);
        console.log(parkingResult);
        expect(parkingResult).toEqual({ parked: false, slotNo: -1 })


    });
});

describe('testing unparkCar', () => {
   it('should unpark a car at given slot no', () => {
       const noOfSlots = 6;
       const noOfEntries = 3;
       const color = 'White';
       const regNo = 'KA-01-HH-1234';
       const entryPointId = 1;
       const parkingLot = new ParkingLot(noOfSlots, noOfEntries);
       const parkingResult = parkingLot.parkCar(color, regNo, entryPointId);
       const slotNo = 1;
       const unparkResult = parkingLot.unparkCar(slotNo);
       console.log(unparkResult);
       console.log(parkingLot);
   }) ;
});

describe('testing getRegNosBasedOnColor', () => {
    it('should return registration nos for a given car color', () => {
        const noOfSlots = 6;
        const noOfEntries = 3;
        const entryPointId = 1;
        const parkingLot = new ParkingLot(noOfSlots, noOfEntries);
        let parkingResult = parkingLot.parkCar('White', 'KA-01-HH-1234', entryPointId);
        parkingResult = parkingLot.parkCar('White', 'KA-01-HH-9999', entryPointId);
        parkingResult = parkingLot.parkCar('Black', 'KA-01-BB-0001', entryPointId);
        parkingResult = parkingLot.parkCar('Red', 'KA-01-HH-7777', entryPointId);
        parkingResult = parkingLot.parkCar('Blue', 'KA-01-HH-2701', entryPointId);
        parkingResult = parkingLot.parkCar('Black', 'KA-01-HH-3141', entryPointId);

        const c = 'White';
        const regNumbers = parkingLot.getRegNosBasedOnColor(c);
        console.log(regNumbers);
    }) ;
});


describe('testing getSlotNoBasedOnCar', () => {
    it('should return slot no where a car of given reg no is parked', () => {
        const noOfSlots = 6;
        const noOfEntries = 3;
        const entryPointId = 1;
        const parkingLot = new ParkingLot(noOfSlots, noOfEntries);
        let parkingResult = parkingLot.parkCar('White', 'KA-01-HH-1234', entryPointId);
        parkingResult = parkingLot.parkCar('White', 'KA-01-HH-9999', entryPointId);
        parkingResult = parkingLot.parkCar('Black', 'KA-01-BB-0001', entryPointId);
        parkingResult = parkingLot.parkCar('Red', 'KA-01-HH-7777', entryPointId);
        parkingResult = parkingLot.parkCar('Blue', 'KA-01-HH-2701', entryPointId);
        parkingResult = parkingLot.parkCar('Black', 'KA-01-HH-3141', entryPointId);
        const slotNo = parkingLot.getSlotNoBasedOnCar('KA-01-HH-7777');
        console.log(slotNo);
    }) ;
});

describe('testing getSlotNosBasedOnColor', () => {
    it('should return all slots where a car of given color is parked', () => {
        const noOfSlots = 6;
        const noOfEntries = 3;
        const entryPointId = 1;
        const parkingLot = new ParkingLot(noOfSlots, noOfEntries);
        let parkingResult = parkingLot.parkCar('White', 'KA-01-HH-1234', entryPointId);
        parkingResult = parkingLot.parkCar('White', 'KA-01-HH-9999', entryPointId);
        parkingResult = parkingLot.parkCar('Black', 'KA-01-BB-0001', entryPointId);
        parkingResult = parkingLot.parkCar('Red', 'KA-01-HH-7777', entryPointId);
        parkingResult = parkingLot.parkCar('Blue', 'KA-01-HH-2701', entryPointId);
        parkingResult = parkingLot.parkCar('Black', 'KA-01-HH-3141', entryPointId);
        console.log(parkingResult);
        const slots = parkingLot.getSlotNosBasedOnColor('Black');
        console.log(slots);
    }) ;
});
