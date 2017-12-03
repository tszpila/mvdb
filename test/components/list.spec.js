import { expect } from 'chai';
import List from '../../src/components/list';

describe('List Component', () => {
    it('is initiable', () => {
        const component = new List();
        expect(component).to.be.instanceof(List);
    });

    it('renders empty list by default', () => {
        const component = new List();
        const node = component.render();
        expect(document.createElement('ul').isEqualNode(node)).to.be.equal(true);
        expect(node.childNodes).to.have.length(0);
    });
});
