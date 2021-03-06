import React from 'react'
import {Search} from './Search'
import {Route,Routes} from 'react-router-dom';
import {Link} from 'react-router-dom'
export const Header = () => {
    return (
        <>
            <nav className="navbar row">
                <div className="col-12 col-md-3">
                    <div className="navbar-brand">
                   <Link to='/'><img src="/images/shopit_logo.png" />
                   </Link>
                    </div>
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
               <Search />
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <Link  to='/login' className="btn ml-4" id="login_btn">Login</Link>

                    <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">2</span>
                </div>
            </nav>
        </>
    )
}
