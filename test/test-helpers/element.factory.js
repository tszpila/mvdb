import { expect } from 'chai';
import ElementMock from '../mocks/element.mock';

export default function elementFactoryTests(name, factory) {
    return () => {
        before(() => {
            factory.__Rewire__('Element', ElementMock); // eslint-disable-line no-underscore-dangle
        });

        after(() => {
            factory.__ResetDependency__('Element'); // eslint-disable-line no-underscore-dangle
        });

        it(`creates ${name} element`, () => {
            const element = factory();
            expect(element).to.be.instanceof(ElementMock);
        });

        it(`renders ${name} element`, () => {
            const element = factory();
            expect(element).to.be.instanceof(ElementMock);
            expect(element.name).to.be.equal(name);
        });

        it(`passes arguments to ${name} element`, () => {
            const attributes = {};
            const children = [];
            const element = factory(attributes, children);
            expect(element).to.be.instanceof(ElementMock);
            expect(element.attributes).to.be.equal(attributes);
            expect(element.children).to.be.equal(children);
        });
    };
}
