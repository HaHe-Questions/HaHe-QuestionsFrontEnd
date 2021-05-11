import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Kysely(props) {
    const [kysymykset, setKysymykset] = useState([]);
    const params = useParams();
    const kyselyid = params.paramsid;

    useEffect(() => {
      console.log(kyselyid);
        fetchKysymykset();
      }, []);

    const fetchKysymykset = () => {
        fetch('https://hahequestions.herokuapp.com/kysely/'+ kyselyid +'/kysymykset')
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