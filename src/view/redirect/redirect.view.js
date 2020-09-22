import React from 'react';
import { Link } from "react-router-dom";

// Style
import './css/redirect.css';

class Redirect extends React.Component {
    render() {
        return(
           <div className="redirect-box">
                <Link to="/backbook">
                    <button>Open app</button>
                </Link>
           </div>
        )
    }
}

export default Redirect;
