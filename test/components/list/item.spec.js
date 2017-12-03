import { expect } from 'chai';
import Item from '../../../src/components/list/item';
import Component from '../../../src/components/component';

describe('List Item component', () => {
    it('is initiable', () => {
        const component = new Item();
        expect(component).to.be.instanceof(Item);
    });

    it('extends Component', () => {
        const component = new Item();
        expect(component).to.be.instanceof(Component);
    });

    it('renders as list item', () => {
        const component = new Item();
        const node = component.render();
        expect(node.tagName).to.be.equal('LI');
    });

    it('renders item title', () => {
        const component = new Item({ title: 'Test title' });
        const node = component.render();
        expect(node.innerHTML).to.be.equal('<span class="title">Test title</span>');
    });
});
