import React from 'react';
import './base.css';
import SideNavBar from '../components/sidenavigation';

class BaseScreen extends React.Component {

    render() {
        return (
            <div className='base-body'>
                <div className='sidenavbar-container'>
                    <SideNavBar />
                </div>
                <div className='content-area'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default BaseScreen;