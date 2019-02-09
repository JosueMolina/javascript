export class BaseElement {

    constructor () {
        this.element = null;
    }

    appendToElement( el ) {
        this.createElement();

        el.append(this.element);
        this.enableJS();
    }

    createElement() {
        let s = this.getElementFromString();
        this.element = $(s);
    }

    getElementFromString() {
        throw 'Method needs to be implemented from a inherited class';
    }

    enableJS() {
        componentHandler.upgradeElement( this.element[0] );
    }

}