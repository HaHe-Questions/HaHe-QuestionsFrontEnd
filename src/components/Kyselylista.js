import React, { useState, useEffect } from 'react';
import Kysely from './Kysely';

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

      // {kyselyt.map(kysely => <div><a href={url+'/'+kysely.kysely_id}>{kysely.nimi}</a></div>)}
      // {kyselyt.map(kysely => <div><a href={'kysely/'+kysely.kysely_id + '/kysymykset'}>{kysely.nimi}</a></div>)}

      return(
          <div>
            {kyselyt.map(kysely => (
               <div><a href={'kysely/'+kysely.kysely_id + '/kysymykset'}>{kysely.nimi}</a>
               <Kysely id = {kysely.kysely_id} nimi = {kysely.nimi}/> </div>
               ))}
                  
          </div>
      )   
    }


export default Kyselylista;