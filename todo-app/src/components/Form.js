import React, { useState } from 'react';

function Form(props) {



    const [name, setName] = useState('')

    function handleChange(e) {

        console.log(e.target.value);
        // if (e.target.value.length == 0) { alert("HI Dummy this is required!") } else {

        setName(e.target.value)

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
            <button onClick={randomNumber} className="btn btn">Click here for random number</button>
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