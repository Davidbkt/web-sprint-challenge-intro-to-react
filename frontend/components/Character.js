
import React, {useState} from 'react'

function Character({character}) { // Add the props
  // State to hold whether the homeworld is rendering or rend
  const [showHomeworld, setShowHomeworld] = useState(false);

  // Click handler to toggle the visibility of the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };
  //console.log(character)
  console.log(character)
  return (
    <div onClick={toggleHomeworld} className='character-card'>  
      <h3 className='character-name'>{character.name}</h3>
      
      {showHomeworld && (
        <div>
          <p>Planet: 
            <span className='character-planet'>
              {/* {character.homeworld} */}
              </span>{character.homeworld.name}</p>
          {/* <p>Population: {character.homeworld.population}</p> */}
          {/* Add more details about homeworld if available */
          }
        </div>
      )}
      
    </div>
  );
}

export default Character
