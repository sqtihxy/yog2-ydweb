"use strict";

class Askqa extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className='askqa' ><h2>{this.props.data}</h2></div>);
    }
}

ReactDOM.render(
    <Askqa data='有问题在这里提，轻松帮你搞定' />,
    document.getElementById('askqa')
);