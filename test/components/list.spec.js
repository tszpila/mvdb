import { expect } from 'chai';
import List from '../../src/components/list';
import Component from '../../src/components/component';
import ComponentMock from '../mocks/component.mock';

describe('List Component', () => {
    before(() => {
        List.__Rewire__('Item', ComponentMock); // eslint-disable-line no-underscore-dangle
    });

    after(() => {
        List.__ResetDependency__('Item'); // eslint-disable-line no-underscore-dangle
    });

    it('is initiable', () => {
        const component = new List();
        expect(component).to.be.instanceof(List);
    });

    it('extends Component', () => {
        const component = new List();
        expect(component).to.be.instanceof(Component);
    });

    it('renders empty list by default', () => {
        const component = new List();
        const node = component.render();
        expect(node.tagName).to.be.equal('UL');
        expect(node.childNodes).to.have.length(0);
    });

    it('renders list of items', () => {
        const items = [
            { title: 'Title 1' },
            { title: 'Title 2' },
            { title: 'Another Title' },
        ];
        const component = new List({ items });
        const node = component.render();
        expect(node.children).to.have.length(3);
        items.forEach((item, index) => {
            const child = node.children[index];
            expect(child.props).to.be.equal(item);
        });
    });
});
