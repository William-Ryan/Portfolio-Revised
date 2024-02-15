import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Paper, Button } from '@mui/material';
import { styled } from '@mui/material/styles'

const HeaderText = styled(Typography)(({theme}) => ({
    color: "white",
    fontSize: "3rem",
    textAlign: "center",
    padding: "4% 0% 0%",
    margin: "0% 0% 1%"
  }))

  const LinkTexts = styled(Button)(({theme}) => ({
    color: "white",
    fontSize: "1.5rem",
    padding: "0.5% 2%",
    margin: "0% 1%",
    backgroundColor: "green"
  }))

const Home = () => {
    return (
        <div style={{ backgroundImage: "url(https://res.cloudinary.com/dmtkcjrqv/image/upload/v1708010570/Portfolio/aron-visuals-bZZp1PmHI0E-unsplash_zzsgrp.jpg)", display: "flex", flexDirection: "column", padding: "18% 0%"}}>
            <HeaderText>William Ryan's Portfolio</HeaderText>
            <div style={{ display: "flex", justifyContent: "center"}}>
                <LinkTexts>Websites</LinkTexts>
                <LinkTexts>About Me</LinkTexts>
                <LinkTexts>Contact Me</LinkTexts>
            </div>
        </div>
    )
}

export default Home;