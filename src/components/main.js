import React, {Component} from "react";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Local from "./local";
import Global from "./global";
import Loader from 'react-loader-spinner'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            covid: null,
            method: false,
            loader: true
        }
    }

    componentDidMount() {
        const url = "https://www.hpb.health.gov.lk/api/get-current-statistical";
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({covid: json}))
            .then(() => this.setState({loader: false}))
    }

    render() {

        if (this.state.loader) {
            return (

                    <div className="text-center h-100" style={{marginTop: "300px"}}>
                        <div className="col-12">
                            <Loader
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}

                            />
                        </div>
                    </div>
            )
        } else {
            return (
                <div className="my-posts">
                    <nav className="navbar navbar-light bg-dark text-center">
                        <h5 className="font-weight-normal text-white ml-auto mx-auto">Covid-19 Situation Report</h5>
                    </nav>
                    <div className="col-sm-12 text-center mt-4">
                        <BootstrapSwitchButton
                            checked={false}
                            onlabel='Global'
                            offlabel='Local'
                            onstyle="success"
                            offstyle="success"
                            width={100}
                            height={25}
                            onChange={() => {
                                this.setState({method: !this.state.method})
                            }}/>
                    </div>
                    <div className="col-lg-12 col-sm-12">
                        {!this.state.method ? <Local covid={this.state.covid}/> : <Global covid={this.state.covid}/>}
                    </div>

                    <footer className="fixed-bottom">
                        <div className="footer-copyright text-center py-3 bg-dark text-white">© 2020 Copyright:
                            <a href="https://mdbootstrap.com/"> CraZy_KaZun</a>
                        </div>
                    </footer>
                </div>
            )
        }
    }
}

export default Main;
