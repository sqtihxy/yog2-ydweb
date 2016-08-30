'use strict';

class PublishBtn extends React.Component {
	render() {
        return (<button className='publishBtn' >{this.props.name}</button>);
    }
}

ReactDOM.render(
    <PublishBtn name='发表文章' />,
    document.getElementById('publishBtn')
);
