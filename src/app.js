import List from './components/list';

const list = new List({
    items: [
        { title: 'Item 1' },
        { title: 'Item 2' },
        { title: 'Item 3' },
        { title: 'Item 4' },
    ],
});

document.getElementById('content').appendChild(list.render());
