import Element from '../element';

export default function li(...args) {
    return new Element('li', ...args);
}
