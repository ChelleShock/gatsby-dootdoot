import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo">
            <span className="icon fa-art">sDADAS</span>
        </div> */}
        <div className="content">

            <div className="inner">
                <h1>Doot.Doot</h1>
                <p>i dig art and music...and you, if you're not mean.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('paint') }}>Paint</a></li>
                {/* <li><a href="javascript:;" onClick={() => { props.onOpenArticle('videos') }}>Video</a></li> */}

                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('print') }}>Print</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
