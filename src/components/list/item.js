import Component from '../component';
import li from '../../elements/factories/li';
import span from '../../elements/factories/span';

export default class Item extends Component {
    render() {
        const { title } = this.props;
        return li(
            span({ className: 'title' }, title),
        ).render();
    }
}
