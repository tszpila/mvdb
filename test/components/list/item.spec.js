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
});
