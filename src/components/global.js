import React, {Component} from "react";
import NumberFormat from 'react-number-format';

class Global extends Component {

    render() {

        const covid = this.props.covid;

        if (covid === null) {
            return null;
        }

        return (
            <div>
                {Object.keys(covid).map((key) => (
                    key === 'data' ?
                        <div key={key}>
                            <div className="row">
                                <div className="col-sm-12 col-lg-6 mt-4 text-center">
                                    <div>
                                        <h1 className="text-warning" style={{fontSize: 50}}><NumberFormat
                                            value={covid.data.global_total_cases} displayType={'text'}
                                            thousandSeparator={true}/></h1>
                                        <h4 className="font-weight-normal">Total Confirmed Cases</h4>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6 mt-4 text-center">
                                    <div>
                                        <h1 className="text-primary" style={{fontSize: 50}}><NumberFormat
                                            value={covid.data.global_new_cases} displayType={'text'}
                                            thousandSeparator={true}/></h1>
                                        <h4 className="font-weight-normal">New Cases</h4>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6 mt-4 text-center">
                                    <div>
                                        <h1 className="text-info" style={{fontSize: 50}}><NumberFormat
                                            value={covid.data.global_new_deaths} displayType={'text'}
                                            thousandSeparator={true}/></h1>
                                        <h4 className="font-weight-normal">New Deaths</h4>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-6 mt-4 text-center">
                                    <div>
                                        <h1 className="text-danger" style={{fontSize: 50}}><NumberFormat
                                            value={covid.data.global_deaths} displayType={'text'}
                                            thousandSeparator={true}/></h1>
                                        <h4 className="font-weight-normal">Total Deaths</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ''
                ))}
            </div>
        );
    }
}

export default Global;
