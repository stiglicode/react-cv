import React from 'react';
// commponents
import TheNav from '../components/navbar/TheNav';
import Ad from '../components/ad/Ad';
import Modal from '../components/modal/Modal';
import Error from '../components/error/Friend.error'

import Icon from './../components/icons';

// Assets
import altIcon from '../assets/alt-pict.svg';

// data from db
import posts from '../db/post';

class Backbook extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalActive: "",
            isRollDown: false
        }
    }
    changeClose = () => {
        this.setState({
            modalActive: ""
        });
        return document.body.className = "";
    }
    changeOpen = () => {
        this.setState({
            modalActive: "modal-active",
        });
        return document.body.className = "hide-scroll"
    }
    testFunc = (testState) => {
        this.setState({
            isRollDown: testState
        })
    }
    render() {
        const li = (key) => {
            return (<li className="flex-row align-center b-hover m-point" key={key}>
                        <Icon src={altIcon} size="ic-med"/>
                        <span className="s16 b-txt">Some unloaded stuffs</span>
                    </li>)
        }
        return(
            <div className={`bb__body flex-column full-x ${(this.state.isRollDown === true) ? "roll-down" : ""}`}>
                <Modal hanldeClose={this.changeClose} chnageActive={this.state.modalActive}>
                    <div>hii</div>
                </Modal>
                <TheNav test={this.testFunc}/>
                <div className="bb-cont bs-padd flex-row justify-between full-y full-x">
                    <section className="bb-thi">
                        <ul className="bb-cont_list flex-column justify-evenly">
                            {[li(1),li(2),li(3),li(4),li(5),li(6)]}
                        </ul>
                    </section>
                    <section className="bb-cen">
                        {posts.map(post => (
                            <Ad data={post} hanldeOpen={this.changeOpen} key={post.post_id}/>
                        ))}
                    </section>
                    <section className="bb-fri bs-padd">
                        <div className="fri-cont">
                            <div className="fri-cont-title b-line">
                                <span>Contacts</span>
                            </div>
                           <div className="fri-cont-boxes">
                               <Error />
                           </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Backbook;