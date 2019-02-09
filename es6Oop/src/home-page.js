import {Page} from './framework/page.js';
import {Image} from './ui/image.js';
import {Button} from './ui/button.js';
import {app} from './app.js';

export class HomePage extends Page {
    constructor() {
        super( 'Home' );
    }

    createElement() {
        super.createElement();

        let image = new Image('../images/drone.jpg');
        image.appendToElement(this.element);

        let styleString = 'width: 300px; height: 80px; font-size: 26px; margin: 10px;';

        let button = new Button('Self driving cars');
        button.setStyleString(styleString);
        button.appendToElement(this.element);
        button.element.click((event) => app.activateRoute('Cars'));

        button = new Button('Drones');
        button.setStyleString(styleString);
        button.appendToElement(this.element);
        button.element.click((event) => app.activateRoute('Drones'));

    }

    getElementFromString() {
        return '<div style="text-align: center"></div>';
    }

}