import React from 'react';

import '../../../styles/pages/StarterPages/Projects.css';

import planet2 from '../../../Img/planet2.svg';
import planet3 from '../../../Img/planet3.svg';
import ProjectImg from '../../../Img/ProjectImg.png';
import UnderTitle from '../../../Img/UnderTitle.svg';

import Scroll from '../../../components/Scroll';
import {Link} from 'react-router-dom';


const Projects = (props) => {
    return (
        <>
            <div className={'planet2'} style={{display: props.activate === 1 ? 'none' : 'block'}}>
                <img src={planet2} alt='planet2'/>
            </div>
            <div className={'middlePageHome2 '} id={'project'}>
                <Scroll page={2} activate={props.activate}/>
                <div className='containerProject'>
                    <div className='Present'>
                        <h1>Projets</h1>
                        <img className='underTitle' src={UnderTitle} alt={'underTitle'}/>
                        <h2>Explorez mes différents projets,<br/> Je vous expliquerai comment je les ai
                            réalisés</h2>
                        <div style={{display: props.activate === 1 ? 'none' : 'block'}}>
                            <Link to='/Projects' onClick={window.scrollTo(0, 0)}>Explorez plus</Link></div>
                    </div>
                </div>
                <img className={'ProjectImg '} src={ProjectImg} alt='Projets'/>
            </div>
            <div className={'planet3'} style={{display: props.activate === 1 ? 'none' : undefined}}>
                <img src={planet3} alt='planet3'/>
            </div>
            <div className={'line2'} style={{display: props.activate === 1 ? 'none' : 'block'}}/>
        </>
    );
};

export default Projects;
