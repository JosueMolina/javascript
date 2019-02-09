import {BaseElement} from './base-element.js';

export class Image extends BaseElement {
    constructor( fileName) {
        super();
        this.fileName = fileName;
    }

    getElementFromString() {
        return `<img src="${this.fileName}" width="100%" />`
    }
}