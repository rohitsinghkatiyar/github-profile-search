import React from "react";
import Githubprofilecard from "./Githubprofilecard";
import GithubProfileDetails from "./GithubProfileDetails";

class  Githubprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

         };
    }
    render() {
        return (
            <React.Fragment>
                 <div className="container mt-3">
                    <div className="row">
                        <div className="col-3">
                            {
                                //check if ocject is empty
                                Object.keys(this.props).length !== 0 ?
                                 <Githubprofilecard profile={this.props.profile}/> :
                                 null
                            }
                            
                        </div>
                        <div className="col-9">
                             {
                                //check if ocject is empty
                                Object.keys(this.props).length !== 0 ?
                                 <GithubProfileDetails profile={this.props.profile}/> :
                                 null
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Githubprofile;