import { useEffect, useState } from "react";
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from "react-router-dom";

function Dishes() {

  const [ dishes, setDishes ] = useState([]);

  useEffect(() => {
    getDishes();
  },[]);

  const getDishes = async () => {

    await fetch('api.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }
    )
      .then(function(response){
        
        const data = response.json();
        // console.log(data);
        return data
      })
      .then(function(data) {
        setDishes(data.recipes);
      } 
    )
  };

  return (
    <div>
      <Wrapper>
        <h3>Dishes of the Week</h3>
        <hr/>
        <Splide 
        options={{
          perPage: 2,
          // arrows: false,
          pagination: false,
          width: '100vw',
          drag: false,
          gap: '3rem',
          padding: { left: '2.5rem', right: '2.5rem'}
        }}
        >
        {dishes.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/' + recipe.id}>
                  <img src={recipe.image} alt={recipe.title} />
                  <p>{recipe.title}</p>
                </Link>
              </Card>
            </SplideSlide>
          )
        })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  // margin: 3rem 0rem;
  // width: 100%;

  h3{
    color: #FFF;
    font-size: 2vw;
  }

  hr{
    height: 1px;
    background-color: #ccc;
    border: none;
    margin-bottom: 1rem;
  }
`;

const Card = styled.div`
  min-height: 200px;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 1rem;
    // position: absolute;
    left: 0;
    width: 100%;
    object-fit: cover;
  };

  p {
    position: relative;
    // z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: #FFF;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 2vw;
    margin-top: .5rem;
    display: flex;
    justify-content: center;
    align-items: center; 
  };

  a {
    text-decoration: none;
  }
  a > p:hover{
    color:  #263f40;
  }
`;

export default Dishes;