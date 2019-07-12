const Car = require('./Car');

class ParkingLot {
    constructor (noOfslots, noOfEntries) {
        this.noOfSlots = noOfslots;
        this.noOfEntries = noOfEntries;
        this.slots = this.createSlots(this.noOfSlots);
    }

    parkCar(colorOfCar, registrationNo, entrypointId) {
        let hasParked = false;
        let assignedSlot = -1;
        for(let i = 0; i < this.slots.length; i++) {
            if(this.slots[i].car === null) {
                const car = new Car(colorOfCar, registrationNo);
                this.slots[i].car = car;
                hasParked = true;
                assignedSlot = i + 1;
                break;
            }
        }
        return (hasParked) ? { parked: true, slotNo: assignedSlot } : { parked: false, slotNo: -1 };
    }

    unparkCar (slotNo) {
        if(slotNo < 0 || slotNo > this.slots.length) {
            return 'specified slot does not exist in the parking lot';
        }
        this.slots[slotNo - 1].car = null;
        return { removed: true, slotNo: slotNo };
    }

    getRegNosBasedOnColor(color) {
        const registrationNumbers = [];
        this.slots.forEach((slot) => {
           if(slot.car !== null && slot.car.color === color) {
               registrationNumbers.push(slot.car.regNo);
           }
        });
        return registrationNumbers;
    }

    getSlotNoBasedOnCar(regNo) {
        let slotNo = -1;
        for(let i = 0; i < this.slots.length; i++) {
            if(this.slots[i].car && this.slots[i].car.regNo === regNo) {
                slotNo = this.slots[i].id;
            }
        }
        return slotNo;
    }

    getSlotNosBasedOnColor(color) {
        let slots = [];
        this.slots.forEach((slot) => {
            if(slot.car && slot.car.color === color) {
                slots.push(slot.id);
            }
        });
        return slots;
    }

    createSlots (noOfSlots) {
        const slots = [];
        for(let i = 0; i < noOfSlots; i++) {
            slots.push({ id: i + 1, car: null });
        }
        return slots;
    }


}

module.exports = ParkingLot;
