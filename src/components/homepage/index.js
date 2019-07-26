import React from 'react';
import AppHeader from '../../common/AppHeader';
import AppFooter from '../../common/AppFooter';
import AppCarousel from '../../common/AppCorousel';
import Home from './Home';
class Homepage extends React.Component {
  
    render() {
        return (
            <div>
                <AppHeader />
                <AppCarousel />  
                <Home />
                <AppFooter /> 
            </div>
        )
    }
}

export default Homepage