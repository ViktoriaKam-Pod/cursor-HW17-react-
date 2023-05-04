
import './App.css';
import React, { Fragment } from "react";
import { useState } from "react";
import contactsAll from "./contact"


function Contact(props){
    return(
        <div className="card">
            <p>Прізвище: {props.lastName}</p>
            <p>Ім'я: {props.firstName}</p>
            <p>Номер телефону: {props.phone}</p>
        </div>
    )
}

function Contacts(){
    const [search, setSearch] = useState("");

    const handleSearchChange = contactsAll.filter(el => {
        return el.lastName.includes(search)
    })

    let element=[];
    handleSearchChange.forEach((elem,i) => {
        element.push(
            <Contact firstName={elem.firstName} lastName={elem.lastName} phone={elem.phone} key={i} />
        )
    });

        return(
            <Fragment>
                <input className='search' placeholder='Введіть прізвище' value={search} 
                onChange={(event) => setSearch(event.target.value)}/>
                <div className="main-card">
                    {element}
                </div>
            </Fragment>
        )
}
    export default Contacts
