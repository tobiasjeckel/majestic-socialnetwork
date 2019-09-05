import React from "react";
import axios from "./axios";
import Avatar from "./avatar";
import Uploader from "./uploader";
import Logo from "./logo";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            first: "Tobias",
            last: "Jay",
            imageurl: "",
            uploaderIsVisible: false
        };
        this.showModal = this.showModal.bind(this);
    }

    componentDidMount() {
        console.log("App mounted!");
        //make an axios request to server, it will do a dbquery to find out info from user
        //use the id stored in cookie to do the lookup
        //when we have the info we can add it to state using setState
    }

    showModal() {
        console.log("show modal is running");
        this.setState({
            uploaderIsVisible: true
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <h1> HI from App.</h1>

                <Avatar
                    first={this.state.first}
                    last={this.state.last}
                    imageurl={this.state.imageurl}
                    showModal={this.showModal}
                />
                {this.state.uploaderIsVisible && <Uploader />}
            </div>
        );
    }
}
