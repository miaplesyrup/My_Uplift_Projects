import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react'

function Recipe() {

    let params = useParams();

    const [ details, setDetails ] = useState({});
    const [ activeTab, setActiveTab ] = useState("instructions");

    
    const fetchDetails = async () => {
        /* const data = await fetch(`http://api.spoonacular.com/recipes/${params.name}/information?apiKey=116228182f9248778d8786bf89a0643a`)
        const detailData = await data.json(); */

        await fetch('../api.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }})
        .then(function(response){
            const data = response.json();
            return data
        })
        .then(function(data){
            
            const filteredObject = data.recipes.filter(item => parseInt(item.id) === parseInt(params.name))
            console.log(filteredObject)
            // if (params.name.length > 0){
            //         setDetails(filteredObject[0]);
            //     }
            if (filteredObject.length > 0){
                setDetails(filteredObject[0]);
            }
        })
    };

    useEffect(() => {
        fetchDetails();
    });


    return ( 
        <DetailWrapper>
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt="" />
            </div>
            <Info>
                <Controls>
                    <Button
                        className={activeTab === "instructions" ? "active" : ""} 
                        onClick={() => setActiveTab("instructions")}
                    >
                        Instructions
                    </Button>
                    <Button
                        className={activeTab === "ingredients" ? "active" : ""} 
                        onClick={() => setActiveTab("ingredients")}
                    >
                        Ingredients
                    </Button>
                </Controls>
                {activeTab === 'instructions' && (
                <div>
                    <p dangerouslySetInnerHTML={{__html: details.summary}}></p>
                    <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                </div>
                )}
                {activeTab === "ingredients" && (    
                <ul>
                    {details.extendedIngredients.map((ingredient) => 
                        <li key={ingredient.id}>  
                            {ingredient.original}
                        </li>
                    )}
                </ul>
                )}
            </Info>
        </DetailWrapper>
    );
}

const DetailWrapper = styled.div`
    margin-top: 5rem;
    margin-bottom: 5rem; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    .active{
        background: #4f6d78;
        color: white;
    }
    h2 {
        margin-bottom: 2rem;
        color: #FFF;
    }
    li {
        font-size: 1.3rem;
        line-height: 2.5rem;
        margin-left: 10vw;
    }
    ul {
        margin-top: 2rem;
    }
    img {
        border-radius: 1rem;
        margin-bottom: 2rem;
        border: 2px solid white;
        width: 100%;
    }
    p {
        font-size: 1.3rem;
        line-height: 2rem;
    }
`;

const Controls = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 1.5rem;
`;

const Button = styled.button`
    padding: 1rem;
    color: #313131;
    background: white;
    border: 2px solid white;
    border-radius: 1rem;
    font-weight: 600;
    font-size: 2vw;
    width: 20vw;
`;

const Info = styled.div`
    color: white;
    }

    p{
        margin-bottom: 1rem;
        text-align: left;
        padding-top: 1rem;
    }

    a{
        color: #454545;
        text-decoration: none;
    }
    ul{
        text-align: left;
        margin-left: 2rem;
    }
`;

export default Recipe;