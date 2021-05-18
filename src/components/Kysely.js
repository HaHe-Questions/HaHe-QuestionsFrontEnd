import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Kysely(props) {
  const [kysymykset, setKysymykset] = useState([]);
    const params = useParams();
    const kyselyid = params.paramsid;
    const [vastaukset, setVastaukset] = useState([]);

  useEffect(() => {
    console.log(kyselyid);
    fetchKysymykset();
  }, []);

  const fetchKysymykset = () => {
    fetch('https://hahequestions.herokuapp.com/kysely/' + kyselyid + '/kysymykset')
      .then(response => response.json())
      .then(data => setKysymykset(data))
      .catch(err => console.error(err))
  }

  const inputChanged = (event, kysymys_id, index) => {
        // setVastaukset({...vastaukset, [event.target.name]: event.target.value});
        // setVastaukset({ "vastausteksti": "Kevät on erittäin kiva.", "kysymys": { "kysymys_id": 2 }})
       // setVastaukset({ "vastausteksti": event.target.value, "kysymys": { "kysymys_id": kysymys_id }})
      // setVastaukset(...vastaukset, { "vastausteksti": event.target.value, "kysymys": { "kysymys_id": kysymys_id }})
      let apuVastauksetList = [...vastaukset, { "vastausteksti": event.target.value, "kysymys": { "kysymys_id": kysymys_id }}]; // new array need to update
      setVastaukset(apuVastauksetList); // update the state
      console.log(vastaukset);
  }

        const addVastaus = () => {
          // fetch('http://localhost:8080/tallennavastaus',
          fetch('http://localhost:8080/tallennavastaukset',
          {
            method: 'POST',
            body: JSON.stringify(vastaukset),
            headers: { 'Content-type' : 'application/json'  }
          })
          .then(_ => alert("kiitos vastauksesta"))
          .catch(err => console.error(err))
        }
      
      return(
          <div>
              {kysymykset.map((kysymys, index) =>  <div key={kysymys.kysymys_id}><a href={'/kysymys/'+kysymys.kysymys_id}>{kysymys.kysymysteksti}</a><br></br>
              <TextField 
                id="outlined-basic" 
                label="Vastaus" 
                variant="outlined" 
                onBlur={e => inputChanged(e, kysymys.kysymys_id, index)}
                //name="vastausteksti"
                //value={vastaukset.vastausteksti}
                multiline
                />
                </div>)}
                <Button onClick={addVastaus} color="primary">
                 Tallenna
              </Button>
          </div>
      )   
    
      }


export default Kysely;