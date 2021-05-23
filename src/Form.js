import React, { useState } from 'react';
import './form.css';

function Form(){
const [name,setName]=useState("")


const [sname,ssetName]=useState("")


const [email,setEmail]=useState("")

const [phone,setPhone]=useState("")

const[gender,setGender]=useState("")

    function add(event){
        var name1=event.target.value;
        setName(name1)
    }
     
    function add1(event){
        var name2=event.target.value;
        ssetName(name2) 
    }
    function add2(event){
        var name3=event.target.value;
        setEmail(name3) 
    }
    function add3(event){
        var name4=event.target.value;
        setPhone(name4) 
        
    }
    function add4(event){
        var name5=event.target.value;
        setGender(name5) 
        
    }

    function listItem(e){
        e.preventDefault();
        console.log(name,sname,phone,email,gender)
        
    }
     
    return (
    <>
    <h1 className="heading">Fill Form</h1>
    <form className="form_head" onSubmit={listItem}>
    <input type="text"  placeholder="Name" 
    value={name} 
    className="input" 
    onChange={add}
    />
    <input type="text"  placeholder="Last Name" 
    value={sname} 
    className="input" 
    onChange={add1}
    />
    <input type="email"  placeholder="Email" 
    value={email} 
    className="input" 
    onChange={add2}
    />
    <input type="number"  placeholder="Phone Number" 
    value={phone} 
    className="input" 
    onChange={add3}
    />

<input type="date" id="birthday" name="birthday" required=""/>

    <select type="select" id="sex" placeholder="Gender" onSelect={add4}>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="TransGender">TransGender</option>
  
  </select>

  <select name="Nationality" id="Nationality">
  <option value="">Nationality</option>
  <option value="India">India</option>
  <option value="Others">Others</option>

  </select>

     
    <button type="submit" >Submit</button>
    </form>
    
    </>

    );
}


export default Form;
