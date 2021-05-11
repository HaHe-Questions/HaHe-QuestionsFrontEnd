import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
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
        fetch('https://hahequestions.herokuapp.com/kysely/'+ kyselyid +'/kysymykset')
        .then(response => response.json())
        .then(data => setKysymykset(data))
        .catch(err => console.error(err))
        }

    const inputChanged = (event) => {
          setVastaukset({...vastaukset, [event.target.name]: event.target.value});
          console.log(vastaukset);
        }



      return(
          <div>
              {kysymykset.map(kysymys => <div>{kysymys.kysymysteksti}<br></br>
              <TextField 
                id="outlined-basic" 
                label="Vastaus" 
                variant="outlined" 
                multiline
                />
                
                </div>)}
                <Button onClick={inputChanged} color="primary">
                 Tallenna
              </Button>
          </div>
      )   
    }
  


export default Kysely;