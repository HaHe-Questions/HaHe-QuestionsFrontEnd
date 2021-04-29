import React, { useState, useEffect } from 'react';

function Kysymyslista() {
    const [kyselyt, setKyselyt] = useState([]);
    const [kysymykset, setKysymykset] = useState([]);

    useEffect(() => {
        fetchKyselyt();
        fetchKysymykset();
      }, []);

    const fetchKyselyt = () => {
        fetch('https://hahequestions.herokuapp.com/kyselyt')
        .then(response => response.json())
        .then(data => setKyselyt(data))
        .catch(err => console.error(err))
      }

    const fetchKysymykset = () => {
        fetch('https://hahequestions.herokuapp.com/kysely/4/kysymykset')
        .then(response => response.json())
        .then(data => setKysymykset(data))
        .catch(err => console.error(err))
        }   

      return(
          <div>
              {kysymykset.map(kysymys => <div>{kysymys.kysymysteksti}</div>)}
          </div>
      )   
    }


export default Kysymyslista;