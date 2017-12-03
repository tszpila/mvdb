/**
 * Base Element class, add abstraction to DOM nodes.
 *
 * @param {string} [name=div] Element (node) name.
 * @param {string|object|Element} [textChildOrAttributes] Text value or Element or attributes map.
 * @param {string|Element} [textOrChild] Text or Element if not passed as second argument.
 */
export default class Element {
    constructor(name = 'div', textChildOrAttributes, textOrChild) {
        this.name = name;
        if (typeof textChildOrAttributes === 'string') {
            this.text = textChildOrAttributes;
        } else if (textChildOrAttributes instanceof Element) {
            this.child = textChildOrAttributes;
        } else {
            if (textOrChild instanceof Element) {
                this.child = textOrChild;
            } else {
                this.text = textOrChild;
            }
            this.attributes = textChildOrAttributes;
        }
    }

    render() {
        const element = document.createElement(this.name);
        if (this.child) {
            element.appendChild(this.child.render());
        } else {
            element.innerText = this.text || '';
        }
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
