var React = require('react');
var global_response_data = {};
var AllStudents = React.createClass({

    
    componentWillMount() {
        var reqdata = {};    
        console.log('Clicked \'ALL DORMS\'');
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/api/dormitories'
        }).done(function(data) {
            reqdata = data;
            global_response_data = data;
            console.log(JSON.stringify(data));
        }).fail(function(jqXhr) {
            console.log('failed to access');
        });
        this.setState(reqdata);
    },

    render() {

        return (
            <div>
            <p>Testing data</p>
            <p>{global_response_data}</p>
            <p>The data will populate here.</p>
            </div>
        );
    }
});

module.exports = AllStudents;
