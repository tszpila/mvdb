import ul from '../elements/factories/ul';
import Item from './list/item';
import Component from './component';

export default class List extends Component {
    constructor(props) {
        super();
        this.props = { items: [], ...props };
    }

    render() {
        const { items } = this.props;
        return ul(
            items.map(item => new Item(item)),
        ).render();
    }
}
