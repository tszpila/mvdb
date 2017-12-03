import Element from '../element';

export default function span(...args) {
    return new Element('span', ...args);
}
