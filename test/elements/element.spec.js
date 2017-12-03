import { expect } from 'chai';
import Element from '../../src/elements/element';
import Component from '../../src/components/component';

class ComponentMock extends Component {
    constructor() {
        super();
        this.element = document.createElement('div');
    }

    render() {
        return this.element;
    }
}

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
            expect(node.innerHTML).to.be.equal('This is example text');
        }
        {
            const element = new Element('span', 'This is different text');
            const node = element.render();
            expect(node.innerHTML).to.be.equal('This is different text');
        }
    });

    it('renders attributes passed to element', () => {
        {
            const element = new Element('div', {
                className: 'class-1 class-2',
                id: 'my-div',
            });
            const node = element.render();
            expect(node.innerHTML).to.be.equal('');
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
            expect(node.innerHTML).to.be.equal('');
            expect(node.getAttribute('title')).to.be.equal('This is important link');
            expect(node.getAttribute('href')).to.be.equal('#test');
        }
        {
            const element = new Element('img', {
                'data-src': 'image.jpg',
            });
            const node = element.render();
            expect(node.innerHTML).to.be.equal('');
            expect(node.getAttribute('data-src')).to.be.equal('image.jpg');
        }
        {
            const element = new Element('div', {
                test: 'Test',
                id: 'my-div',
            });
            const node = element.render();
            expect(node.innerHTML).to.be.equal('');
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
            expect(node.innerHTML).to.be.equal('This is example text');
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

    it('renders element passed to element', () => {
        {
            const child = new Element('span');
            const element = new Element('div', child);
            const node = element.render();
            expect(node.childNodes).to.have.length(1);
            expect(document.createElement('span').isEqualNode(node.firstChild));
        }
        {
            const child = new Element('em');
            const element = new Element('a', child);
            const node = element.render();
            expect(node.childNodes).to.have.length(1);
            expect(document.createElement('em').isEqualNode(node.firstChild));
        }
    });

    it('renders element and attributes passed to element', () => {
        {
            const child = new Element('em');
            const element = new Element('div', {
                href: '#test',
                title: 'This is important link',
            }, child);
            const node = element.render();
            expect(node.childNodes).to.have.length(1);
            expect(document.createElement('em').isEqualNode(node.firstChild));
            expect(node.getAttribute('title')).to.be.equal('This is important link');
            expect(node.getAttribute('href')).to.be.equal('#test');
        }
        {
            const child = new Element('span');
            const element = new Element('div', {
                className: 'class-1 class-2',
                id: 'my-div',
            }, child);
            const node = element.render();
            expect(node.childNodes).to.have.length(1);
            expect(document.createElement('span').isEqualNode(node.firstChild));
            expect(node.classList).to.have.length(2);
            expect(node.classList.contains('class-1')).to.be.equal(true);
            expect(node.classList.contains('class-2')).to.be.equal(true);
        }
    });

    it('renders component passed to element', () => {
        const component = new ComponentMock();
        const element = new Element('div', component);
        const node = element.render();
        expect(node.childNodes).to.have.length(1);
        expect(component.render().isSameNode(node.firstChild));
    });

    it('renders component and attributes passed to element', () => {
        const component = new ComponentMock();
        const element = new Element('div', {
            href: '#test',
            title: 'This is important link',
        }, component);
        const node = element.render();
        expect(node.childNodes).to.have.length(1);
        expect(component.render().isSameNode(node.firstChild));
        expect(node.getAttribute('title')).to.be.equal('This is important link');
        expect(node.getAttribute('href')).to.be.equal('#test');
    });

    it('renders list of element and texts passed to element', () => {
        {
            const child1 = new Element('span');
            const child2 = new Element('em', 'Hello');
            const child3 = new ComponentMock();
            const element = new Element('div', [child1, 'This is text', child2, child3]);
            const node = element.render();
            expect(node.childNodes).to.have.length(4);
            expect(node.children).to.have.length(3);
            expect(node.innerHTML).to.be.equal('<span></span>This is text<em>Hello</em><div></div>');
        }
        {
            const child1 = new Element('span', 'Example text');
            const child2 = new Element('em', 'Other text');
            const child3 = new ComponentMock();
            const child4 = new Element('em');
            const element = new Element('div', [child1, child2, child3, child4, 'This is some text']);
            const node = element.render();
            expect(node.childNodes).to.have.length(5);
            expect(node.children).to.have.length(4);
            expect(node.innerHTML).to.be.equal('<span>Example text</span>' +
                '<em>Other text</em><div></div><em></em>This is some text');
        }
    });

    it('renders list of elements and texts and attributes passed to element', () => {
        {
            const child1 = new ComponentMock();
            const child2 = new Element('em', 'Other text');
            const child3 = new Element('em');
            const element = new Element('div', {
                href: '#test',
                title: 'This is important link',
            }, [child1, child2, child3, 'This is some text']);
            const node = element.render();
            expect(node.childNodes).to.have.length(4);
            expect(node.children).to.have.length(3);
            expect(node.innerHTML).to.be.equal('<div></div><em>Other text</em><em></em>This is some text');
        }
        {
            const child = new Element();
            const element = new Element('div', {}, [child]);
            const node = element.render();
            expect(node.childNodes).to.have.length(1);
            expect(node.children).to.have.length(1);
            expect(node.innerHTML).to.be.equal('<div></div>');
        }
    });
});
