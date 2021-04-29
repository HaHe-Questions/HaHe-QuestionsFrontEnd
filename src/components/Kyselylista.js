import React, { useState, useEffect } from 'react';

function Kyselylista() {
    const [kyselyt, setKyselyt] = useState([]);
    
    let url="/kysymyslista";

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
              {kyselyt.map(kyselyt => <div>{kyselyt.nimi} <a href={url}>Linkki</a></div>)}
              
          </div>
      )   
    }


export default Kyselylista;