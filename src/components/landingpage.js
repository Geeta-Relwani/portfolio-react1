import React, { Component } from 'react';
import {Grid , Cell} from 'react-mdl';
//import img from './profile-pic.jpg'

class Landing extends Component {
    render(){
        return(
            <div style = {{ width: '100%' , margin: 'auto'}}>
            <Grid className='landing-grid'>
                <Cell col ={12}>
                    <img class='avatar-img' src="http://www.binarysolutions.jo/Image/avatar_female.png"
                    />

                    <div className='banner-text'>
                        <h1>Front-End Web Developer</h1>
                        <hr/>

                        <p> React | JavaScript | JQuery | Bootstrap | HTML | CSS</p>
                        <div className='social-icons'>
                        {/* LinkedIn */}
                        <a rel='noopener noreferrer' href='http://g' target='_blank'>
                            < i className="fa fa-linkedin-square" aria-hidden = 'true'/>
                        </a>

                        {/* GitHub */}
                        <a rel='noopener noreferrer' href='http://g' target='_blank'>
                            < i className="fa fa-github-square" aria-hidden = 'true'/>
                        </a>

                        {/*Freecodecamp */}
                        
                        <a rel='noopener noreferrer' href='http://g' target='_blank'>
                            < i className="fa fa-free-code-camp" aria-hidden = 'true'/>
                        </a>

                        </div>
                    </div>

                    


                </Cell>
            </Grid>
                
            </div>

        );
    }
}

export default Landing;