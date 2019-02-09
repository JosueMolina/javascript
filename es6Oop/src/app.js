import $ from 'jquery';
import {Car} from './models/car.js';
import {Drone} from './models/drone.js';
import {ApplicationBase} from './framework/application-base.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {fleet} from './fleet-data.js';
import {HomePage} from './home-page.js';
import {CarsPage} from './cars-page.js';

export class App extends ApplicationBase {
    constructor() {
        super( 'Fleet Manager' );
        this.DataService = new FleetDataService();
        this.DataService.loadData( fleet );

        this.addRoute( 'Home', new HomePage(), true );
        this.addRoute( 'Cars', new CarsPage());
    }
}

export let app = new App();
app.show($('body'));