import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Kysely(props) {
    //const [kyselyt, setKyselyt] = useState([]);
    const [kysymykset, setKysymykset] = useState([]);
    const kyselyId = 4;
    const params = useParams();
    //const kyselyId = params.id;
    const [kkysely, setKkysely] = useState({
      id: props.id, 
      nimi: props.nimi  
    });

    useEffect(() => {
      console.log(kkysely);
        //fetchKyselyt();
        fetchKysymykset();
      }, []);

    /*const fetchKyselyt = () => {
        fetch('https://hahequestions.herokuapp.com/kyselyt')
        .then(response => response.json())
        .then(data => setKyselyt(data))
        .catch(err => console.error(err))
      }
      */

    const fetchKysymykset = () => {
        fetch('https://hahequestions.herokuapp.com/kysely/'+kyselyId+'/kysymykset')
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


export default Kysely;