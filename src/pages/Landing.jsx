import React from 'react';
import SolidButton from '../components/assets/SolidButton';
// import OutlinedButton from '../components/assets/OutlinedButton';
import PublicNav from '../components/navigation/PublicNav';
import HeroSection from '../components/landing/HeroSection';
import WholesomeImage from '../img/landing/wholesome.svg';
import WholesomeImage1 from '../img/landing/2.svg';
import WholesomeImage2 from '../img/landing/3.svg';

function Landing() {
    return <div className='landing'>
        <div><PublicNav /></div>
        <div id='features'><HeroSection 
            image={<img src={WholesomeImage} alt='' />}
            heading='Productivity System' 
            body='Combining kanban boards and the pomodoro method to get you into flow and get things done.'
            action={<SolidButton name='Enter Flow' link='/signup'/>} />
        </div>

        <div id='about'><HeroSection 
            reverse={true}
            image={<img src={WholesomeImage2} alt='' />}
            heading='About' 
            body={
                <div>Inspired by Mihaly Csikszentmihalyi's book <i>Flow</i>, this tool combines productivity techniques and fun incentives to help you get into flow state.</div>} />
        </div>

        <div id='source'><HeroSection 
            image={<img src={WholesomeImage1} alt='' />}
            heading='Source Code' 
            body='See the front end source code!'
            action={<a href='https://github.com/mei-lu/flowstate' target='_blank' rel='noopener noreferrer'><button className='outlined-button'>View on Github</button></a>} />
        </div>
    </div>

}
export default Landing;