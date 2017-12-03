import { expect } from 'chai';
import ul from '../../../src/elements/factories/ul';

class ElementMock {
    constructor(name, attributes, children) {
        this.name = name;
        this.attributes = attributes;
        this.children = children;
    }
}

describe('ul factory', () => {
    before(() => {
        ul.__Rewire__('Element', ElementMock); // eslint-disable-line no-underscore-dangle
    });

    after(() => {
        ul.__ResetDependency__('Element'); // eslint-disable-line no-underscore-dangle
    });

    it('creates ul element', () => {
        const element = ul();
        expect(element).to.be.instanceof(ElementMock);
    });

    it('renders ul element', () => {
        const element = ul();
        expect(element).to.be.instanceof(ElementMock);
        expect(element.name).to.be.equal('ul');
    });

    it('passes arguments to element', () => {
        const attributes = {};
        const children = [];
        const element = ul(attributes, children);
        expect(element).to.be.instanceof(ElementMock);
        expect(element.attributes).to.be.equal(attributes);
        expect(element.children).to.be.equal(children);
    });
});
