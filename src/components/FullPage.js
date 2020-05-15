import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";

// require("./overrides.css");

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
        scrollHorizontallyKey = {process.env.REACT_APP_KEY}
        navigation = {false}
        // anchors= {['ABOUT', 'SOCIAL', 'CONTACT']}
        navigationTooltips = {['HI', 'ABOUT', 'WORK', 'SOCIAL', 'CONTACT']}
        showActiveTooltip = {false}
        slidesNaviation = {false}
        paddingBottom = {'10vh'}

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section" id="s1">
                        <h2>has a website</h2>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href="#" onClick={() => fullpageApi.moveSectionDown()}>
                            SCROLL DOWN
                        </a>
                    </div>
                    <div className="section" id="s2">
                        <h3  className='sub'>is</h3>
                        <div className="slide" data-anchor="uni">
                            <p>a student at the University of St Andrews</p>
                        </div>
                        <div className="slide" data-anchor="freelance">
                            <p>a freelance software developer</p>
                        </div>
                        <div className="slide" data-anchor="internships">
                            <p>looking for internships</p>
                        </div>
                        <div className="slide" data-anchor="work">
                            <p>available for work</p>
                        </div>
                    </div>
                    <div className="section" id="s3">
                        <h3  className='sub'>has worked with</h3>
                        <div className="slide" data-anchor="darkbeam">
                            <a href="https://www.darkbeam.com/">DARKBEAM</a>
                        </div>
                        <div className="slide" data-anchor="investment">
                            <a href="http://www.the-investment.co.uk/">THE INVESTMENT PARTNERSHIP</a>
                        </div>

                    </div>
                    <div className="section" id="s4">
                        <h2>is on social media</h2>
                        <a href="https://github.com/CJWilliams20">GITHUB</a>
                        <p/>
                        <a href="https://www.linkedin.com/in/cjwilliams20/">LINKEDIN</a>
                        <p/>
                        <a href="https://twitter.com/CJ___Williams">TWITTER</a>
                        <p/>
                        <a href="https://medium.com/@cj_williams">MEDIUM</a>
                    </div>
                    <div className="section" id="s5">
                        <h2>wants to talk</h2>
                        <a href="mailto:contact@cjwilliams.io">contact@cjwilliams.io</a>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);
