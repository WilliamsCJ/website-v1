import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

require('dotenv').config()

const pluginWrapper = () => {
    require('../static/fullpage.scrollHorizontally.min')
}

export const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey = {process.env.REACT_APP_LICENCE}
        scrollingSpeed = {1000} /* Options here */
        pluginWrapper={pluginWrapper}
        scrollHorizontally = {true}  /* Because we are using the extension */
        scrollHorizontallyKey = {process.env.REACT_APP_LICENCE}

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <h2  className='sub'>is</h2>
                        <div className="slide" data-anchor="slide1">
                            <p>a student at the University of St Andrews</p>
                        </div>
                        <div className="slide" data-anchor="slide2">
                            <p>a freelance software developer</p>
                        </div>
                        <div className="slide" data-anchor="slide3">
                            <p>looking for internships</p>
                        </div>
                        <div className="slide" data-anchor="slide4">
                            <p>available for hire</p>
                        </div>
                    </div>
                    <div className="section">
                        <h2>has social media</h2>
                        <a href="https://github.com/CJWilliams20">GITHUB</a>
                        <p/>
                        <a href="https://www.linkedin.com/in/cjwilliams20/">LINKEDIN</a>
                        <p/>
                        <a href="https://twitter.com/CJ___Williams">TWITTER</a>
                        <p/>
                        <a href="https://medium.com/@cj_williams">MEDIUM</a>
                    </div>
                    <div className="section">
                        <h2>wants to talk</h2>
                        <a href="mailto:contact@cjwilliams.io">contact@cjwilliams.io</a>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);
