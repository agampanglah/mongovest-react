import React, { Component } from 'react';
import AppHeader from '../common/AppHeader';
import About from './About';
import AppFooter from '../common/AppFooter';


class TentangKami extends React.Component {
    render(){
        return(
            <div>
                <AppHeader/>
                <About/>
                <AppFooter/>
            </div>
        )
    }
}

export default TentangKami;