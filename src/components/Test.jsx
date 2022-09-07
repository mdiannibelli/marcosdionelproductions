import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Test() {
  function handleClick(e) {
    //e.preventDefault()
  }
  function handleKeyDown(e) { //keydown para cuando se presiona una tecla y keyup para cuando se suelta
  //e.preventDefault()
  }


  function handleResize(e) { // cada vez que muevo la ventana del explorer
    //e.preventDefault()
  }
useEffect(() => {
  window.addEventListener('resize', handleResize); // cuando se monta
  return() => {
    window.removeEventListener('resize', handleResize) // cuando se desmonta pasa esto
  }
}, []);



    useEffect(() => {
        const [email, setEmail] = useState('');
        <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'ingrese su email'} />


        
        
    }, [])
// primer ejemplo //
    /* const vowels = ['a', 'e','i', 'o', 'u'];

    function onKey(e){

        if(vowels.find(vowel=>vowel=== e.key)){
            e.preventDefault()
        }
    }
    const [email, setEmail] = useState('');

  return (
    <div>Evento
        <div className='full-div' style={{ border: '3px solid red', margin: '20px', padding: '20px' }}>
            <h1 onClick={handleClick}>Helloo</h1>
            <input onKeyDown={onKey} type={'text'} /> 
            <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'ingrese su email'} /> 
        </div>
    </div>
  ) */



  // segundo ejemplo
  const handlerChange = (e) => {
    if ('aeiou'.includes(e.key.toLowerCase())) {
      e.preventDefault();
      toast.custom((t) => <Tostadita t={t} />);
    }
  };
  return (
    <div>
      <input placeholder="no se permiten vocales" onKeyDown={handlerChange} />
      <Toaster
        containerStyle={{
          top: 80,
          left: 20,
          bottom: 20,
          right: 20,
        }}
        toastOptions={{
          duration: 1500,
        }}
      />
    </div>
  );
}

