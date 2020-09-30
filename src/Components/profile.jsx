import React, { Component } from 'react'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={this.props.show===true?"popup":"none"}>
                <img src={this.props.src} alt="" width="250px" height="350px"/>
                <div className="text">
                <h1>{this.props.fullName}</h1>
                <h2>{this.props.bio}</h2>
                <h2>{this.props.profession}</h2>
                </div>
            </div> 
        
        );
    }
}

export default Profile;