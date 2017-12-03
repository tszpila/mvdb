/**
 * Base Element class, add abstraction to DOM nodes.
 *
 * @param {string} [name=div] Element (node) name.
 * @param {string|object|Element|Array<string|Element>} [childrenOrAttributes] Attributes map or elements (can be single).
 * @param {string|Element|Array<string|Element>} [children] Elements if not passed as second argument (can be single).
 */
export default class Element {
    constructor(name = 'div', childrenOrAttributes, children) {
        this.name = name;
        if (typeof childrenOrAttributes === 'string') {
            this.text = childrenOrAttributes;
        } else if (childrenOrAttributes instanceof Element) {
            this.child = childrenOrAttributes;
        } else if (Array.isArray(childrenOrAttributes)) {
            this.children = childrenOrAttributes;
        } else {
            if (Array.isArray(children)) {
                this.children = children;
            } else if (children instanceof Element) {
                this.child = children;
            } else {
                this.text = children;
            }
            this.attributes = childrenOrAttributes;
        }
    }

    render() {
        const element = document.createElement(this.name);
        if (this.child) {
            element.appendChild(this.child.render());
        } else if (this.text) {
            element.appendChild(document.createTextNode(this.text));
        }
        if (this.children) {
            this.children.forEach((child) => {
                if (typeof child === 'string') {
                    element.appendChild(document.createTextNode(child));
                } else {
                    element.appendChild(child.render());
                }
            });
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
