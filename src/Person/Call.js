import * as React from 'react';
import axios from 'axios';

export default class Call extends React.Component{

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res.data);
            });
    }
    render(){
        return(
            <h1>Call from axios</h1>
        )
    }


}