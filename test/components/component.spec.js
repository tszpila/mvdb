import { expect } from 'chai';
import Component from '../../src/components/component';

describe('Component', () => {
    it('is initiable', () => {
        const component = new Component();
        expect(component).to.be.instanceof(Component);
    });

    it('stores props', () => {
        const props = {};
        const component = new Component(props);
        expect(component.props).to.be.equal(props);
    });

    it('requires to overwrite of render method', () => {
        const component = new Component();
        expect(component.render).to.throw(Error);
    });
});
