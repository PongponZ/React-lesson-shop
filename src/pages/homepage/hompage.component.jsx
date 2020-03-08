import React from 'react'
import './hompage.style.scss'
import Directory from '../../components/directory/directory.component'
import { HomePageContrainer } from './homepage.style'


const Homepage = ({history}) => (
    <HomePageContrainer>
       <Directory history={history}/>
    </HomePageContrainer>
)

export default Homepage