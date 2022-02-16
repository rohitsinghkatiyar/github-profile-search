import React from "react";

class Githubprofilecard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
           
         };
    }
    render() {
        let {name, avatar_url, bio , html_url}= this.props.profile //Destructuring the data recieved from 
        return (
            
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.props.profile)}</pre> */ /*to check if data is comming */ }
                <div className="container">
                <div className="card">
                    <div className=" card-herader">
                       <img className="img-thumbnail" src={avatar_url}/>
                    </div>
                    <div className="card-body">
                        <h5 className=".h5">{name}</h5>
                        <p>{bio} </p>
                        <a href={html_url} className="btn btn-success">Profile</a>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Githubprofilecard;