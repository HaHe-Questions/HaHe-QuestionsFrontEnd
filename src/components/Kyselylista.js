import React, { useState, useEffect } from 'react';

function Kyselylista() {
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
        fetch('https://hahequestions.herokuapp.com/kyselyt')
        .then(response => response.json())
        .then(data => setKysymykset(data))
        .catch(err => console.error(err))
        }   

      return(
          <div>
              {kyselyt.map(kysely => <div>{kysely.nimi}{kysely.kysymykset.kysymysteksti}</div>)}
              

          </div>
      )


      
    }


export default Kyselylista;