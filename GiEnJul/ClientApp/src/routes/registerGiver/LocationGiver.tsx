import * as React from 'react';
import { Button } from 'reactstrap';
import {Route} from 'react-router-dom'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    'Stavanger', 'Sola', 'Sandnes'
  ];

const ContactInfo: React.FC = () => {
    const [location, setLocation] = React.useState<string>('hei');
    console.log(location);

    const handleChange = (newLocation: React.SetStateAction<string>) => {
        setLocation(newLocation)
    }

    return (
    <div>
    <h2>Bli giver</h2>
    <h3>Hvor vil du gi?</h3>
    <Dropdown  options={options} onChange={ (value) => handleChange(value.value)} placeholder="Velg en by.."></Dropdown>
    <p><Route render={({ history}) => (
         <Button onClick={() => { history.push('/') }}>tilbake</Button>)}/>
    </p>
</div>
    )
}

export default ContactInfo
