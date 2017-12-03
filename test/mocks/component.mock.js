import Component from '../../src/components/component';

export default class ComponentMock extends Component {
    render() {
        const node = document.createElement('div');
        node.props = this.props;
        return node;
    }
}
