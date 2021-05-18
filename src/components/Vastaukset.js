import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Vastaukset(props) {
    const [vastaukset, setVastaukset] = useState([]);
    const params2 = useParams();
    const kysymysid = params2.paramskysymys;

    useEffect(() => {
        console.log(kysymysid);
        fetchVastaukset();
    }, []);

    const fetchVastaukset = () => {
       // fetch('https://hahequestions.herokuapp.com/kysymys/' + kysymysid + '/vastaukset')
       fetch('http://localhost:8080/kysymys/' + kysymysid + '/vastaukset')
            .then(response => response.json())
            .then(data => setVastaukset(data))
            .catch(err => console.error(err))
    }

    return (
        <div>
            {vastaukset.map(vastaus => <div>{vastaus.vastausteksti}</div>)}
        </div>
    )
}

export default Vastaukset;