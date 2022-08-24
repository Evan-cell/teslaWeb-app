import React from 'react'
import '../components/Section.css'
import styled from 'styled-components'
function Section() {
  return (
   <Wrap></Wrap>
  )
}

export default Section
const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/images/model-s.jpg')
`