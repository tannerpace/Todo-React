
import React, { useEffect, useState } from 'react';
import Clock from 'react-clock';
import { Box } from '@mui/system';
import { nanoid } from "nanoid";
import 'react-clock/dist/Clock.css';
import { Container } from '@mui/material';

function Form(props) {

    const [name, setName] = useState('')

    function handleChange(e) {
        setName(e.target.value)
    }

    function nanTest() {
        let a = nanoid()
        alert(a)
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    function randomNumber() {
        let a = Math.ceil(Math.random() * 1000);
        alert(`Your Lucky Number is ${a}`)
    }
   
    
    const MyClock = () => {
      const [value, setValue] = useState(new Date());
    
      useEffect(() => {
        const interval = setInterval(
          () => setValue(new Date()),
          1000
        );
    
        return () => {
          clearInterval(interval);
        }
      }, []);
    
      return (
       
  <Clock value={value}  />
      
      )
    }
    return (<>   <MyClock style={{margin:"auto",width:"40%"}}/>
        <form onSubmit={handleSubmit} required>
   
            <h2 className="label-wrapper">  
         
                <label htmlFor="new-todo-input" className="label__lg">What needs to be done?</label>
            </h2>
          
            <input

                type="text"
                id={Math.ceil(Math.random() * 1000)}
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}

            />
            <div class="button__wrap"><button className="button btn btn__primary btn__lg" 
            type="submit">ADD</button>
    <div class="button__shadow"></div>
</div>
          
            

        </form>
        </>
    )
}

export default Form;