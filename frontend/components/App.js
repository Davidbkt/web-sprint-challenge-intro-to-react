import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API

  // State to hold the data from the API
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);

  // Effect to fetch data from the API
  useEffect(() => {
    const fetchDate = async () => {
        try {
            // Fetch characters data
            const charactersResponse = await axios.get(urlPeople);
            const charactersData = charactersResponse.data;

            //Fetch planets data
            const planetsResponse = await axios.get(urlPlanets);
            const planetsData = planetsResponse.data;

            const completedCharacters = charactersData.map (character => {
              return {
                ...character, 
                homeworld: planetsData.find(planet => {
                  return planet.id === character.homeworld
                })
              }
            })

            //Set characters data to state
            setCharacters(completedCharacters);
            setPlanets(planetsData);
        } catch (error) {
          console.error('Error fetching data:', error)
        }
      };

      fetchDate(); // call the fetcDada function
    }, []); // Empty dependency array to run this effect only once on component mount.

      //const object
  
  // ❗ Create effects to fetch the data and put it in state

  //console.log(planets)
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
    
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */
}
      {characters.map(character => (
        <Character key={character.id} character={character} planets={planets}/>
        ))}
    </div>
  );
      }


export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
