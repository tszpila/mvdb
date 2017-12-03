/**
 * Base Element class, add abstraction to DOM nodes.
 *
 * @param {string} [name=div] Element (node) name.
 * @param {string|object} [textOrAttributes] Text value or attributes map.
 * @param {string} [text] Text if not passed as second argument.
 */
export default class Element {
    constructor(name = 'div', textOrAttributes, text) {
        this.name = name;
        if (typeof textOrAttributes === 'string') {
            this.text = textOrAttributes;
        } else {
            this.text = text;
            this.attributes = textOrAttributes;
        }
    }

    render() {
        const element = document.createElement(this.name);
        element.innerText = this.text || '';
        if (this.attributes) {
            Object.keys(this.attributes).forEach((attribute) => {
                const value = this.attributes[attribute];
                if (attribute in element) {
                    element[attribute] = value;
                    return;
                }
                element.setAttribute(attribute, value);
            });
        }
        return element;
    }
}
