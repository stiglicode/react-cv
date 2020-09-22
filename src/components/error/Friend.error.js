import React from 'react';
import './css/friends.css';

class Error extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            errorCodes: {
                code__A: {
                    code: 1,
                    mess: "Sorry, you have too many friends ( 3000 ) to show them all"
                }
            } 
        };
    }
    
    render() {
       
        return(
            <span className="er-mess">
                {this.state.errorCodes.code__A.mess}
            </span>
        )
    }
}

export default Error;