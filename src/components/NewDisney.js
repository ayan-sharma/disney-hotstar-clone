import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';
import { selectNewDisney, selectOriginal } from '../features/user/movie/movieSlice';

function NewDisney(props) {
    let okat = useSelector(selectNewDisney);
    let okay = useSelector(selectOriginal);
    const movies =[...okat, ...okay];
  return (
    <Container>
        <h1>Disney plus</h1>
        <Content>
            {movies && 
                movies.map((movie ,key) =>(
                    <Wrap key={key}>
                        {movie.id}
                        <Link to={`/detail/` + movie.id}>
                            <img src={movie.cardImg} alt={movie.title}/>
                        </Link>
                    </Wrap>
                ))}
        </Content>
    </Container>
  )
}

const Container = styled.div`
    padding:0px 0px 26px ;
   
`;

const Content = styled.div`
    display:grid;
    grid-gap:25px;
    gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
    margin-top:30px;
     @media (max-width:768px){
        grid-template-columns: repeat(2,minmax(0,1fr));
    }

`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    box-shadow:rgb(0,0,0/69%) 0px 26px 30px -10px ,
    rgb(0 ,0 ,0 /73%) 0px 16px 10px -10px ;
    cursor: pointer;
    overflow:hidden;
    position:relative;
    border:3px solid rgba(249,249,249,0.1);
    /* width:100%;
    height:100; */
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    inset:0px;

    img{
        width:100%;
        height:100%;
        position:absolute;
        display:block;
        object-fit:cover;
        opacity:1;
        inset:0px;
        transition:opacity 500ms ease-in-out 0s;
        z-index:1;
        top:0px;
    }

    &:hover{

        box-shadow:rgb(0,0,0/80%) 0px 40px 58px -16px ,
            rgb(0 ,0 ,0 /73%) 0px 30px 22px -10px ;  
            transform:scale(1.05);
            border-color:rgba(249,249,249,0.8);    }
`;
export default NewDisney