import React from 'react';
export const ThankYou = () => {
    return (
        <div>
            <header className="site-header" id="header">
                <h1 className="site-header__title" data-lead-id="site-header-title">THANK YOU!</h1>
            </header>

            <div className="main-content">
                <i className="fa fa-check main-content__checkmark" id="checkmark"></i>
                {/* <p className="main-content__body" data-lead-id="main-content-body">Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.</p> */}
            </div>

            <footer className="site-footer" id="footer">
                <p className="site-footer__fineprint" id="fineprint">Copyright ©2021 | All Rights Reserved</p>
            </footer>
        </div>
    );
}

export default ThankYou;