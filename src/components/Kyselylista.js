import React, { useState, useEffect } from 'react';

function Kyselylista() {
    const [kyselyt, setKyselyt] = useState([]);
    
    useEffect(() => {
        fetchKyselyt();
      }, []);

    const fetchKyselyt = () => {
        fetch('https://hahequestions.herokuapp.com/kyselyt')
        .then(response => response.json())
        .then(data => setKyselyt(data))
        .catch(err => console.error(err))
      }

      return(
          <div>
            {kyselyt.map(kysely => (
               <div><a href={'kysely/'+kysely.kysely_id}>{kysely.nimi}</a>
              </div>
               ))}
                  
          </div>
      )   
    }


export default Kyselylista;