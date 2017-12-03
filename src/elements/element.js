/**
 * Base Element class, add abstraction to DOM nodes.
 *
 * @param {string} [name=div] Element (node) name.
 * @param {string|object|Element|Array<string|Element>} [childrenOrAttributes] Attributes map or element(s).
 * @param {string|Element|Array<string|Element>} [children] Element(s) if not passed as second argument.
 */
import Component from '../components/component';

export default class Element {
    constructor(name = 'div', childrenOrAttributes, children) {
        this.name = name;
        this.attributes = {};
        this.children = [];

        if (typeof childrenOrAttributes === 'string' ||
            childrenOrAttributes instanceof Element ||
            childrenOrAttributes instanceof Component
        ) {
            this.children = [childrenOrAttributes];
        } else if (Array.isArray(childrenOrAttributes)) {
            this.children = childrenOrAttributes;
        } else {
            if (Array.isArray(children)) {
                this.children = children;
            } else if (children) {
                this.children = [children];
            }

            if (childrenOrAttributes) {
                this.attributes = childrenOrAttributes;
            }
        }
    }

    render() {
        const element = document.createElement(this.name);

        this.children.forEach((child) => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else if (child instanceof Element || child instanceof Component) {
                element.appendChild(child.render());
            }
        });

        Object.keys(this.attributes).forEach((attribute) => {
            const value = this.attributes[attribute];
            if (attribute in element) {
                element[attribute] = value;
                return;
            }
            element.setAttribute(attribute, value);
        });

        return element;
    }
}
