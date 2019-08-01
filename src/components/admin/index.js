import React from 'react'
import AppHeader from '../../common/AppHeader';
import AdminBody from '../../common/AdminBody';
import ProductAdmin from './ProductAdmin';

class HomeAdmin extends React.Component {


    render(){
        return(
            <div>
                <AppHeader />
                <ProductAdmin/>
            </div>
        )
    }
} export default HomeAdmin