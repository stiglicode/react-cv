import React from 'react';

import Icon from './../icons';

import likeCircle from '../../assets/like-circle.svg';
// import testImg from "../../db/post_img/school.gif";


import './css/ad.css';

class Ad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likeCounter: (Math.floor((Math.random() * 1000) + 1)),
            commentCounter: (Math.floor((Math.random() * 1000) + 1))
        }
    }
    handleLikeCouner = () => {
        this.setState({
            likeCounter: this.state.likeCounter + 1
        })
    }
    handleCommentCouner = () => {
        this.setState({
            commentCounter: this.state.commentCounter + 1
        })
    }
    handleAlt = (data) => {
        let altName = data.split('img/');
        altName = altName[1].split(".png");
        
        return `Image ${altName[0]} is unloaded, yet`
    }
    render() {
        const data = this.props.data;
        return(
            <div className="ad-cont flex-column justify-between" key={data.post_id}>
                <div className="ad-cont-header flex-column bs-padd">
                    <div className="ad-cont-header_head flex-row justify-between align-center">
                        <div className="ad-cont-header_head-ls align-center flex-row">
                            <div className="user-profile">
                                <Icon src={data.user_img} size="ic-usr" alt="false" ></Icon>
                            </div>
                            <span className="fb b-txt u-hover m-point">{data.user_name}</span>
                        </div>
                        <div className="ad-cont-header_head-rs">
                            <div className="tripple-dote p-hover m-point">
                                <span className="dote"></span>
                                <span className="dote"></span>
                                <span className="dote"></span>
                            </div>
                        </div>
                    </div>
                    <div className="ad-cont-header_body">
                        <span>{data.post_title}</span>
                    </div>
                </div>
                <div className="ad-cont-body flex-column justify-between">
                        <div className={`ad-cont-body_picture ${(data.post_id === 2) ? "show-me" : ""}`}>
                            <img src={data.post_img} alt={this.handleAlt(data.post_img)} className={`ad-cont-body_picture ${(data.post_id === 2) ? "show-me" : ""}`}/>
                        </div>
                        <div className="ad-cont-body_details bs-padd flex-column">
                        <div className="ad-cont-body_details-web">
                            <span className="s12">{data.web}</span>
                        </div>
                        <div className="ad-cont-body_details-title flex-row justify-between">
                            <span className="b-txt">{data.post_img_title}</span>
                            <button className="bb_button m-point b-hover" onClick={this.props.hanldeOpen}>Contact Now</button>
                        </div>
                    </div>
                    </div>
                <div className="ad-cont-footer flex-column bs-padd">
                        <div className="ad-cont-footer_state flex-row justify-between align-center">
                            <div className="ad-cont-footer_state-likes flex-row align-center" onClick={this.handleLikeCouner}>
                                <Icon src={likeCircle} size="s16x16"></Icon>
                                <span className="u-hover m-point">{this.state.likeCounter}</span>
                            </div>
                            <div className="ad-cont-footer_state-comm" onClick={this.handleCommentCouner}>
                                <span className="u-hover m-point">{this.state.commentCounter} comments</span>
                            </div>
                        </div>
                        <div className="ad-cont-footer_interact flex-row t-line">
                        <div className="ad-cont-footer_interact-btns flex-row m-point p-hover" onClick={this.handleLikeCouner}>
                            <i className="like"></i>
                            Like
                        </div>
                        <div className="ad-cont-footer_interact-btns flex-row m-point p-hover" onClick={this.handleCommentCouner}>
                            <i className="comment"></i>
                            Comment
                        </div>
                        <div className="ad-cont-footer_interact-btns flex-row m-point p-hover" onClick={this.props.hanldeOpen}>
                            <i className="share"></i>
                            Share
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Ad;