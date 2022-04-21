import React from 'react'
import styled from 'styled-components';
import Badge from './Badge';
import {darkThemeColor} from '../../../utils/index.js'
import avatarImg from '../../../assets/images.png'
import { RiHomeLine,RiFileCopyLine } from 'react-icons/ri'
import { AiOutlinePieChart } from 'react-icons/ai'
import { FaWallet } from 'react-icons/fa';
const Sidebar=()=>{
    return (
    <>

<Container>
            <ProfileContainer>
            <Avatar src={avatarImg} alt='this image' />
            <Name>Sirak Tesfaye</Name>
            <Badge content="Pro Level "></Badge>
        </ProfileContainer>
    <LinksContainer>
        <Links>
            <Link>
                <RiHomeLine/>
                <h4>Dashboard</h4>
            </Link>
            <Link>
                <RiFileCopyLine/>
                <h4>Tenders</h4>
            </Link>
            <Link>
                <FaWallet/>
                <h4>Officers</h4>
            </Link>
            <Link>
                <AiOutlinePieChart/>
                <h4>Suppliers</h4>
            </Link>
        </Links>
        <ContactContainer>
            <span>Having Troubles</span>
            <a href='www.github.com/Tiliksew'>Contact Us</a>
        </ContactContainer>
    </LinksContainer>
</Container>
    </>)
}
const Container=styled.div`
width:30%;
height:100% !important;
border-radius:2rem;
background-color:#091322;
display :flex;
flex-direction:column ;
align-items:center;
gap:3rem;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer=styled.div`
display: flex;
justify-content:center;
align-items:center;
flex-direction:column ;
padding-top: 1.5rem;
`;
const Name=styled.h1`
color: white;
font: 1.5rem;
font-weight:400 ;
margin: 0.8rem 0 0.5rem 0;
`;
const Avatar=styled.img`
height: 7rem;
border-radius:6rem ;
marigin-top:20%;
`;

    const LinksContainer=styled.div`
background-color:${darkThemeColor} ;
height: 100%;
width: 100%;
border-radius:2rem ;
`;
const Links=styled.ul`
list-style-type:none;
/* display: flex;z */
padding-top:1rem ;
height: 60%;

`;
const Link=styled.li`
margin-left:10% ;
margin-bottom:0.5rem ;
display: flex;
gap: 1.2rem;
color: #e4e4e4;
cursor: pointer;
h4{
    font-weight:300 ;
    }
svg{
    font-size:1.1rem;
    margin-top:10%;
}
`;
const ContactContainer=styled.div`
width: 80%;
background-color:#091322 ;
color: #c4c4c4;
height: 10%;
margin: 2rem auto;
border-radius:1rem;
display: flex;
flex-direction:column ;
padding: 1rem;
a{
    color: white;

}
@media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
    

  }
`;

export default Sidebar