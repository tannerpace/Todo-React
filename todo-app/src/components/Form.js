import React, { useState } from 'react';
import { nanoid } from "nanoid";

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
        alert(a)
    }

    return (
        <form onSubmit={handleSubmit} required>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">What needs to be done?</label>
            </h2>
            <button onClick={randomNumber} className="btn btn">Hey Dummie here for random number</button>
            <button onClick={nanTest} className="btn btn">Hey Smarty here for random string</button>
            <input

                type="text"
                id={Math.ceil(Math.random() * 1000)}
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}

            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}

export default Form;