import React from 'react';
import Homepage from '../pages/Homepage';
import PolarBearPage from '../pages/PolarBearPage';
import TutorialPage from '../pages/Tutorialpage';
import LoeamPage from '../pages/Loeampage';
import LoeafPage from '../pages/Loeafpage';
import LoeasPage from '../pages/Loeaspage';
import LoeauPage from '../pages/Loeaupage';
import AmvPage from '../pages/Amvpage';
import AmePage from '../pages/Amepage';
import AmcPage from '../pages/Amcpage';
import AfvPage from '../pages/Afvpage';
import AfePage from '../pages/Afepage';
import AfcPage from '../pages/Afcpage';
import AsvPage from '../pages/Asvpage';
import AsePage from '../pages/Asepage';
import AscPage from '../pages/Ascpage';
import AuvPage from '../pages/Auvpage';
import AuePage from '../pages/Auepage';
import AucPage from '../pages/Aucpage';
import Worldmap from '../pages/Worldmappage';
import QuizPage from '../pages/PolarBearQuizPage1';
import QuizResultsPage from '../pages/PolarBearQuizResultsPage';

const PolarBear1 = require('../Imgs/polarbear1.jpg');
const PolarBear2 = require('../Imgs/polarbear2.jpg')

export default {
    title: 'pages',
    component: Homepage,
    component: PolarBearPage,
    component: TutorialPage, 
    component: LoeamPage,
    component: LoeafPage,
    component: LoeasPage,
    component: LoeauPage,
    component: AmvPage,
    component: AmePage,
    component: AmcPage,
    component: AfvPage,
    component: AfePage,
    component: AfcPage,
    component: AsvPage,
    component: AsePage,
    component: AscPage,
    component: AuvPage,
    component: AuePage,
    component: AucPage,
    component: Worldmap,    
    component: QuizPage,
    component: QuizResultsPage,
}

export const MyHomepage = () => <Homepage />
export const MyPolarBearPage = () => <PolarBearPage 
    img={PolarBear2}
    />
export const MyTutorialPage = () => <TutorialPage />
export const MyLoeamPage = () => <LoeamPage />
export const MyLoeafPage = () => <LoeafPage />
export const MyLoeasPage = () => <LoeasPage />
export const MyLoeauPage = () => <LoeauPage />
export const MyAmvPage = () => <AmvPage />
export const MyAmePage = () => <AmePage />
export const MyAmcPage = () => <AmcPage />
export const MyAfvPage = () => <AfvPage />
export const MyAfePage = () => <AfePage />
export const MyAfcPage = () => <AfcPage />
export const MyAsvPage = () => <AsvPage />
export const MyAsePage = () => <AsePage />
export const MyAscPage = () => <AscPage />
export const MyAuvPage = () => <AuvPage />
export const MyAuePage = () => <AuePage />
export const MyAucPage = () => <AucPage />
export const MyMapPage = () => <Worldmap />
export const MyPolarBearQuizPage1 = () => <QuizPage />
export const MyPolarBearQuizResultsPage = () => <QuizResultsPage />
