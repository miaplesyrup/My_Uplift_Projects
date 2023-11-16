import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { Link, useParams } from "react-router-dom";
import {motion} from "framer-motion";


const initialState = { cuisine: [] };

function reducer(state, action) {
  switch (action.type) {
    case 'setCuisine':
      return { ...state, cuisine: action.payload };
    default:
      throw new Error();
  }
};

function Cuisine() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const params = useParams();
  
    const getCuisine = async () => {
        
      await fetch('../api.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then(function (response) {
          const data = response.json();
          return data;
        })
        .then(function (data) {
          const filteredObject = data.recipes.filter(
            (item) => item.cuisines === params.name
          );
          if (filteredObject.length > 0) {
            dispatch({ type: 'setCuisine', payload: filteredObject });
          }
        });
    };

    useEffect(() => {
        getCuisine();
    });

    return (
        <Grid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
        {state.cuisine.map((item) => {
            return (
            <Card key={item.id}>
                <Link to={'/recipe/' + item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
                </Link>
            </Card>
            );
        })}
        </Grid>
    );
}
// FOR COMPARISON TO USESTATE

// function Cuisine() {

//   const [ cuisine, setCuisine ] = useState([]);
//   let params = useParams();

//   const getCuisine = async () => {
//       /* const data = await fetch('../api.json');
//       const recipes = await data.json();
//       const filteredObject = recipes.recipes.filter(item => item.cuisines == params.name)

//       if (filteredObject.length > 0){
//           setCuisine(filteredObject);
//       } */
     
//       await fetch('../api.json',{
//           headers : { 
//               'Content-Type': 'application/json',
//               'Accept': 'application/json'
//           }})
//           .then(function(response){
//               const data = response.json();
//               return data
//           })
//           .then(function(data){
//               const filteredObject = data.recipes.filter(item => item.cuisines === params.name)
//               if (filteredObject.length > 0){
//                   setCuisine(filteredObject);
//               }
//           })
//   };

//   useEffect(() => {
//       getCuisine();
//   },[params.name]);

//   return (
//        <Grid
//           animate={{opacity: 1}}
//           initial={{opacity: 0}}
//           exit={{opacity: 0}}
//           transition={{ duration: 0.5 }}
//        >
//       {cuisine.map((item) => {
//           return (
//               <Card key={item.id}>
//                   <Link to={'/recipe/' + item.id}>
//                       <img src={item.image} alt="" />
//                       <h4>{item.title}</h4>
//                   </Link>
//               </Card>
//           )
//           }) 
//       }
//       </Grid>
//   )
// }


const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 3rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;

export default Cuisine;





