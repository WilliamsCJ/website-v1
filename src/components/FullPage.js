import ReactFullpage from "@fullpage/react-fullpage";
import React from "react";
import {Section1} from "./Section1";

require('dotenv').config()
console.log(process.env.LICENCE);

const pluginWrapper = () => {
    require('../static/fullpage.scrollHorizontally.min')
}

export const Fullpage = () => (
    <ReactFullpage
        //fullpage options
        licenseKey = {process.env.LICENCE}
        scrollingSpeed = {1000} /* Options here */
        pluginWrapper={pluginWrapper}
        scrollHorizontally = {true}  /* Because we are using the extension */
        scrollHorizontallyKey = {process.env.LICENCE}

        render={({ state, fullpageApi }) => {
            return (
                <ReactFullpage.Wrapper>
                    <div className="section">
                        <h2  className='sub'>is</h2>
                        <div className="slide" data-anchor="slide1">
                            <p>a student at the University of St Andrews</p>
                        </div>
                        <div className="slide" data-anchor="slide2">
                            {/*<p>a freelance software developer</p>*/}
                            <p>{process.env.LICENCE}</p>
                        </div>
                        <div className="slide" data-anchor="slide3">
                            <p>looking for internships</p>
                        </div>
                        <div className="slide" data-anchor="slide4">
                            <p>available for hire</p>
                        </div>
                    </div>
                    <div className="section">
                        <h2>is on social media</h2>
                        <a href="github.com">GITHUB</a>
                        <p/>
                        <a href="github.com">LINKEDIN</a>
                        <p/>
                        <a href="github.com">TWITTER</a>
                    </div>
                </ReactFullpage.Wrapper>
            );
        }}
    />
);
