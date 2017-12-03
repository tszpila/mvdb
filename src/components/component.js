export default class Component {
    constructor(props) {
        this.props = props;
    }

    // eslint-disable-next-line class-methods-use-this
    render() {
        throw Error('Method render must be overwritten');
    }
}
