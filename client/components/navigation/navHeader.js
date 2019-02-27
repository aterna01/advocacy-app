import React from 'react';
import BurgerMenu from './burgerMenu';

import '../../styles/css/styles.css';

const NavHeader = () => (
    <div>
        <BurgerMenu pageWrapId={'page-wrap'} outerContainerId={'App'} />
        <div className="nav-container">
            <div className="nav-container--white" />
        </div>
    </div>
);

export default NavHeader;
