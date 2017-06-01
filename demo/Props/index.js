var WebSite = React.createClass({
    getInitialState: function() {
        return {
            name: "菜鸟教程",
            site: "http://www.runoob.com",
            num:123
        };
    },
    render: function() {
        return (
            <div>
                <Name name={this.state.name} />
                <Name title={123}/>
                <Link site={this.state.site} />
            </div>
        );
    }
});

var Name = React.createClass({
    propTypes: {
        title: React.PropTypes.any.isRequired
    },
    getDefaultProps: function() {
        return {
            name: 'Runoob'
        };
    },
    render: function() {
        return (
            <h1>{this.props.name}title:{this.props.title}</h1>
        );
    }
});

var Link = React.createClass({
    render: function() {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
});

ReactDOM.render(
    <WebSite />,
    document.getElementById('example')
);
