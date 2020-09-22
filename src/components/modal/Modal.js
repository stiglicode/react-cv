import React from 'react';
import './css/Modal.css';

// Icons
import emailIcon from './assets/mail.svg';
import phoneIcon from './assets/phone.svg';
import clipboardIcon from './assets/register.svg';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalResponse: ""
        }
    }
    handleCopy = (element) => {
        if(element.target.id === "c-t-c-b_n") {
            const el = this.num;
            el.select();
            return document.execCommand("copy");
        } else if(element.target.id === "c-t-c-b_e") {
            const el = this.email;
            el.select();
            return document.execCommand("copy");
        }
    }
    handleClick = (e) => {
        this.handleCopy(e);
        const modal_res = 
        <div className={`modal-response ${this.state.modalResponse}`}>
            <span>Copied</span>
        </div>;
        
        const {modalResponse} = this.state;
        if(modalResponse !== modal_res) {
            this.setState({
                modalResponse: modal_res
            });
            
        }
        return setTimeout(() => {
            this.setState({
                modalResponse: ""
            })
        }, 3100)
    }
    render() {
        return(
            <div className={`modal ${this.props.chnageActive}`}>
                {this.state.modalResponse}
                <div className="modal-box">
                    <div className="modal-box_header">
                        <span className="modal-box_header-title">My contact</span>
                        <div className="cross" onClick={this.props.hanldeClose}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="modal-box_body">
                        <div className="contact-row">
                            <div className="contact-row-cont">
                                <i className="ico">
                                    <img src={phoneIcon} alt="icon" draggable="false"/>
                                </i>
                                <span className="contact-row-cont_txt"><span className="prefix">+421</span>&nbsp;917 312 694</span>
                                <input type='text' defaultValue="917 312 694" ref={(num) => this.num = num} className="c-t-cb-false"/>
                            </div>
                            <button onClick={this.handleClick} id="c-t-c-b_n">
                                <i className="ico">
                                    <img src={clipboardIcon} alt="icon" draggable="false"/>
                                </i>
                                Copy 
                            </button>
                        </div>
                        <div className="contact-row">
                            <div className="contact-row-cont">
                                <i className="ico">
                                    <img src={emailIcon} alt="icon" draggable="false"/>
                                </i>
                                <span className="contact-row-cont_txt">stiglic.231<span className="prefix">@</span>gmail.com</span>
                                <input type='text' defaultValue="stiglic.231@gmail.com" ref={(email) => this.email = email} className="c-t-cb-false"/>
                            </div>
                            <button onClick={this.handleClick} id="c-t-c-b_e">
                                <i className="ico">
                                    <img src={clipboardIcon} alt="icon" draggable="false"/>
                                </i>
                                Copy 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
