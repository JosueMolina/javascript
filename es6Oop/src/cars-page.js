import {Page} from './framework/page.js';
import { DataTable } from './ui/data-table.js';
import {app} from './app.js';

export class CarsPage extends Page {
    constructor() {
        super( 'Cars' );
    }

    createElement () {
        console.log('from cars page');
        super.createElement();
        let headers = 'License Make Model Miles'.split( ' ' );
        let table = new DataTable(headers, app.DataService.cars);
        table.appendToElement(this.element);

    }

    getElementFromString() {
        return '<div style="margin: 20px;"><h3>Cars</h3></div>';
    }
}