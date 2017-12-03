import { expect } from 'chai';
import Element from '../../src/elements/element';

describe('Element', () => {
    it('is initiable', () => {
        const element = new Element();
        expect(element).to.be.instanceof(Element);
    });

    it('renders empty div as default', () => {
        const element = new Element();
        const node = element.render();
        expect(document.createElement('div').isEqualNode(node)).to.be.equal(true);
    });

    it('renders passed element type', () => {
        {
            const element = new Element('span');
            const node = element.render();
            expect(document.createElement('span').isEqualNode(node)).to.be.equal(true);
        }
        {
            const element = new Element('li');
            const node = element.render();
            expect(document.createElement('li').isEqualNode(node)).to.be.equal(true);
        }
        {
            const element = new Element('form');
            const node = element.render();
            expect(document.createElement('form').isEqualNode(node)).to.be.equal(true);
        }
        {
            const element = new Element('div');
            const node = element.render();
            expect(document.createElement('div').isEqualNode(node)).to.be.equal(true);
        }
    });

    it('renders text passed to element', () => {
        {
            const element = new Element('div', 'This is example text');
            const node = element.render();
            expect(node.innerText).to.be.equal('This is example text');
        }
        {
            const element = new Element('span', 'This is different text');
            const node = element.render();
            expect(node.innerText).to.be.equal('This is different text');
        }
    });
});
