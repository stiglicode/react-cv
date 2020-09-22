import React from 'react';

class Icon extends React.Component {
    sizer = (theProps) => {
        return theProps
    }
    render() {
        return(
            <i className={this.sizer(this.props.size)}>
                <img src={this.props.src} alt={(this.props.alt !== "false") ? "icon" : ""} className={`m-point ${this.props.size}`} draggable="false"/>
            </i>
        )
    }
}

export default Icon;