import React from 'react';
import PropTypes from 'prop-types';
import icon from '../Assets/github-mark.svg'

// custom import
import { PROJECT_GITHUB_LINK, GITHUB_LINK_STYLE } from '../Constants/Constants'

function Header({ title }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{title}</a>

                <a href={PROJECT_GITHUB_LINK} target='_blank' rel="noopener noreferrer" style={GITHUB_LINK_STYLE}>
                    <div className='d-flex'>

                        <div className='mt-1'>
                            Github:
                        </div>
                        <img src={icon} alt="Github" width={30} className='mx-3' />
                    </div>
                </a>




                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    )
}

Header.defaultProps = {
    title: "Satya's Encoder"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;