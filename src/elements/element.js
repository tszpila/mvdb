export default class Element {
    constructor(name = 'div', text) {
        this.name = name;
        this.text = text;
    }

    render() {
        const element = document.createElement(this.name);
        if (this.text) {
            element.innerText = this.text;
        }
        return element;
    }
}
