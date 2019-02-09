import {Car} from '../models/car.js';
import {Drone} from '../models/drone.js';
import {DataError} from './data-error.js';

export class FleetDataService {
    constructor () {
        this.cars = [];
        this.drones = [];
        this.errors = [];
    }

    getCarByLicense( license ) {
        return this.cars.find(function( car ) {
            return car.license === license;
        });
    }

    getCarByLicenseEs6( license ) {
        return this.cars.find((car) => car.license === license);
    }

    sortCarsByLicense() {
        return this.cars.sort(function( car1, car2 ){
            if( car1.license > car2.license )
            return 1;
            if ( car1.license < car2.license )
            return -1;

            return 0;
        });
    }

    getCarsByMaker( maker ) {
        return this.cars.filter((car) => car.make.indexOf(maker) >= 0);
    }

    loadData( fleet ) {
        for(let data of fleet) {
            switch(data.type) {
                case 'car' :
                    if (this.validateCarData( data )) {
                        let car = this.loadCar( data );
                        if (car)
                            this.cars.push(car);
                    }
                break;
                case 'drone' :
                    if (this.validateDroneData( data )) {
                        let drone = this.loadDrone(drone);
                        if (drone)
                            this.drones.push(drone);

                    }
                default :
                    let e = new DataError( 'invalid vehicle type', data);
                    this.errors.push(e);
                break;
            }
        }
    }

    validateCarData ( car ) {
        let requiredProperties = 'license model latLong miles make'.split(' ');
        let hasErrors = false;
        for (let field of requiredProperties) {
            if( !car[field] ) {
                this.errors.push(new DataError ( `invalind field ${field} for a car`, car ));
                hasErrors = true;
            }
        }

        if ( Number.isNaN( Number.parseFloat(car.miles)) ) {
            this.errors.push(new DataError ( `invalid milage`, car ));
            hasErrors = true;
        }

        return !hasErrors;
    }

    validateDroneData ( drone ) {
        let requiredProperties = 'license model latLong airTimeHours base'.split(' ');
        let hasErrors = false;
        for(let field of requiredProperties) {
            if (!drone[field]) {
                this.errors.push(new DataError(`invalid field ${field} for a drone`, drone));
                hasErrors = true;
            }
        }

        if ( Number.isNaN( Number.parseFloat( drone.airTimeHours ))) {
            this.errors.push(new DataError(`invalid air time`, drone));
            this.hasErrors = true;
        }

        return !hasErrors;
    }

    loadCar(car) {

        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.miles = car.miles;
            c.make =  car.make;
            return c;
        }catch(e) {
            this.errors.push(new DataError(`error loading car : ${e.message}`, car));
        }

        return null;
    }

    loadDrone ( drone ) {
        try {
            let d = new Drone(drone.licese, drone.model, drone.latLong);
            d.airTimeHours = drone.airTimeHours;
            d.base = drone.base;
            return d;
        } catch(e) {
            this.errors.push(new DataError(`error loading drone`, drone));
        }

        return null;
    }

}