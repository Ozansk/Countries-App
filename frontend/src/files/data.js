import React from 'react';
import axios from 'axios';

export default class data extends React.Component {

    state = {
        countries: [],  // Saving all json countries
        searchTerm: ""  // Looking for capitals that user's input
    };

    componentDidMount() {
        axios.get(`http://localhost:5000/api`).then(res => {  // get data from nodejs host
            this.setState({ countries: res.data });
        });
    }

    render() {
        return (
            <div>
                <div>
                <input type="text" placeholder="Search Capital" className="search" onChange={event => { this.setState({ searchTerm: event.target.value }) }} />
                </div>
                <div>
                <table className="table table-hover table-dark">
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Capital
                        </th>
                        <th>
                            Region
                        </th>
                        <th>
                            Flag
                        </th>
                    </tr>
                    {this.state.countries.filter(val => {   //Filter countries by user's input
                        if (this.state.searchTerm == "") {
                            return val;
                        } else if (val.capital.toLowerCase().includes(this.state.searchTerm.toLowerCase())) {  //take inputs lowercase or uppercase
                            return val;
                        }
                    }).map(val => 
                        <tr>
                            <td>
                                {val.name}
                            </td>
                            <td>
                                {val.capital}
                            </td>
                            <td>
                                {val.region}
                            </td>
                            <td>
                                <img src={val.flag} width="80" height="50"></img>
                            </td>
                        </tr>

                    )}</table></div></div>);
    }
}