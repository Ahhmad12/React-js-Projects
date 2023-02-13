import React from 'react'

import './Home.css'
import '../MainPage/Mainpage'
import Mainpage from '../MainPage/Mainpage'
import HomeHeader from './HomeHeader'

const Homefun = ({item}) => {
    //debugger;  

    return (
        <div className='hmaindiv'>
            <div className='hheaderdiv'>
                <HomeHeader  />
            </div>
            <div className='hinnerdiv'>
                <Mainpage item={item} />
            </div>

            <div className='hfotterdiv'><p>Rizwan Ali Bcsm-F19-178</p></div>
        </div>
    )
}



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            DataisLoaded: false,
        };
    }

    componentDidMount() {
        fetch("https://6378f7607419b414df873693.mockapi.io/cv")
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    items: json,
                    DataisLoaded: true,
                });
            });
    }

    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded)
            return (
                <div>
                    <h1> Pleses wait some time.... </h1>{" "}
                </div>
            );
        return items.map((item, index) => <Homefun item={item} />);
    }
}
export default Home;
