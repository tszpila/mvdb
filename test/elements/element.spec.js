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

    it('renders attributes passed to element', () => {
        {
            const element = new Element('div', {
                className: 'class-1 class-2',
                id: 'my-div',
            });
            const node = element.render();
            expect(node.innerText).to.be.equal('');
            expect(node.getAttribute('id')).to.be.equal('my-div');
            expect(node.classList).to.have.length(2);
            expect(node.classList.contains('class-1')).to.be.equal(true);
            expect(node.classList.contains('class-2')).to.be.equal(true);
        }
        {
            const element = new Element('a', {
                href: '#test',
                title: 'This is important link',
            });
            const node = element.render();
            expect(node.innerText).to.be.equal('');
            expect(node.getAttribute('title')).to.be.equal('This is important link');
            expect(node.getAttribute('href')).to.be.equal('#test');
        }
        {
            const element = new Element('img', {
                'data-src': 'image.jpg',
            });
            const node = element.render();
            expect(node.innerText).to.be.equal('');
            expect(node.getAttribute('data-src')).to.be.equal('image.jpg');
        }
        {
            const element = new Element('div', {
                test: 'Test',
                id: 'my-div',
            });
            const node = element.render();
            expect(node.innerText).to.be.equal('');
            expect(node.getAttribute('id')).to.be.equal('my-div');
            expect(node.getAttribute('test')).to.be.equal('Test');
        }
    });

    it('renders text and attributes passed to element', () => {
        {
            const element = new Element('div', {
                href: '#test',
                title: 'This is important link',
            }, 'This is example text');
            const node = element.render();
            expect(node.innerText).to.be.equal('This is example text');
            expect(node.getAttribute('title')).to.be.equal('This is important link');
            expect(node.getAttribute('href')).to.be.equal('#test');
        }
        {
            const element = new Element('div', {
                className: 'class-1 class-2',
                id: 'my-div',
            }, 'This is example text');
            const node = element.render();
            expect(node.getAttribute('id')).to.be.equal('my-div');
            expect(node.classList).to.have.length(2);
            expect(node.classList.contains('class-1')).to.be.equal(true);
            expect(node.classList.contains('class-2')).to.be.equal(true);
        }
    });
});
