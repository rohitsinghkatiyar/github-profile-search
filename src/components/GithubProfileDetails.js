import React from "react";

class GithubProfileDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {followers, following ,public_repos ,public_gists , name ,location, email , company, blog , html_url, created_at}= this.props.profile;
        return (
            <React.Fragment>
                <div className="coantainer">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-2">
                                    <p className="bg-primary text-white text-bold text-center"><strong>{followers} Followers</strong></p>
                                </div>
                                <div className="col-2">
                                    <p className="bg-success text-white text-center"><strong>{public_repos} Repos</strong></p>
                                </div>
                                <div className="col-2">
                                    <p className="bg-warning text-white text-center"><strong>{public_gists} Gits</strong></p>
                                </div>
                                <div className="col-2">
                                    <p className="bg-danger text-white text-center"><strong>{following} Following</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="container">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>{name}</td>
                                        </tr>
                                        <tr>
                                            <td>{location}</td>
                                        </tr>
                                        <tr>
                                            <td>{email}</td>
                                        </tr>
                                        <tr>
                                            <td>{company}</td>
                                        </tr>
                                        <tr>
                                            <td>{blog}</td>
                                        </tr>
                                        <tr>
                                            <td>{created_at}</td>
                                        </tr>
                                        <tr>
                                            <td> {html_url}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default GithubProfileDetails;