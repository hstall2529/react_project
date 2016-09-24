var React = require('react');

var AllStudents = React.createClass({

    componentWillMount() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/api/students'
        }).done(function(data) {
            this.setState(data);
            console.log(JSON.stringify(data));
        }).fail(function(jqXhr) {
            console.log('failed to access');
        });
    },

    render() {

        return (
            <p></p>
        );
    }
});

module.exports = AllStudents;