import axios, { Axios } from "axios";
import React from "react";
import { clientId } from "./credentials";
import Githubprofile from "./Githubprofile";
import Githubprofilecard from "./Githubprofilecard";
class GithubAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            profile:null,
            repos: null,

         };
    }
    //To get what user has typed and store it in usrename
    update=(event)=>
    {
        this.setState(
            {
                username:event.target.value,
            }
        )
    }

    searchUser=(e)=>
    {
        e.preventDefault();
        this.searchProfile(); 
    }

    searchProfile=(e)=>
    {
       axios.get("https://api.github.com/users/"+this.state.username)
       .then(res=>{
          this.setState({
             profile: res.data,
          }) 
       })
       .catch(err=>{
           console.log(err);
       })
    }
    render() {
        return (
            <React.Fragment>
                {/* <pre>{JSON.stringify(this.state)}</pre> */}
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">  
                            <div className="card card-herader bg-secondary text-white">
                                <h1 className=".h1">Github User Search</h1>
                            </div>
                            <div className="card-body pt-4 bg-light">
                                <form className="row" onSubmit={this.searchUser }>
                                    <div className="col">
                                        <input onChange={this.update} className="form-control" type="text"></input>
                                    </div>
                                    <div className="col">
                                        <button type="submit" className="btn btn-primary bg-secondary ">Search</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                    </div>
                </div>
                <div className="container mt-3">
                    {this.state.profile ? <Githubprofile profile={this.state.profile}/> : null }
                   
                </div>
                    
            </React.Fragment>
        );
    }
}

export default GithubAPI;