import React from 'react'
import { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ItemCount from './ItemCount';
import ItemList from './ItemList';
import SpinnerLoading from './SpinnerLoading';

const Glovesimg = require.context('../assets/img/products/gloves', true);
const Bagsimg = require.context('../assets/img/products/bags', true);
const Padskickshieldsimg = require.context('../assets/img/products/pads-kickshields', true);
const Protectionsimg = require.context('../assets/img/products/protections', true);
const Accessoriesimg = require.context('../assets/img/products/accessories', true);

const products = [
  { id: 1, name: "Blue Gloves", category:"gloves", description: "Blue professional boxing gloves for competitions.", price: "45", stock:5, img: Glovesimg('./bluegloves.png')},
  { id: 2, name: "Red Gloves", category:"gloves", description: "Red professional boxing gloves for competitions.", price: "45", stock:5, img: Glovesimg('./redgloves.png')},
  { id: 3, name: "White Gloves", category:"gloves", description: "White professional boxing gloves for competitions.", price: "49,99", stock:5, img: Glovesimg('./whitegloves.png')},
  { id: 4, name: "Snake White Gloves", category:"gloves", description: "Snake white professional boxing gloves for competitions.", price: "60", stock:5, img: Glovesimg('./snakewhitegloves.png')},
  { id: 5, name: "Snake Yellow Gloves", category:"gloves", description: "Snake yellow professional boxing gloves for competitions.", price: "60", stock:5, img: Glovesimg('./snakeyellowgloves.png')},
  { id: 6, name: "Dionel Bag", category:"bags", description: "Designed to help you work out and develop better swinging skills.", price: "89,99", stock:5, img: Bagsimg('./bag1.png')},
  { id: 7, name: "Heavy Kick Shield", category:"pads/kickshields", description: "Use this MMA kick shield to boost your kicking power, speed, accuracy, and overall form.", price: "144,99", stock:5, img: Padskickshieldsimg('./escudo.png')},
  { id: 8, name: "Boxing Strike Pad", category:"pads/kickshields", description: "Designed to help you work out and develop better swinging skills", price: "129,99", stock:5, img: Padskickshieldsimg('./gobernadora.png')},
  { id: 9, name: "Taekwondo Kick Pad", category:"pads/kickshields", description: "This strike pad is designed to be extremely durable and long-lasting.", price: "12,99", stock:5, img: Padskickshieldsimg('./palmeta.png')},
  { id: 10, name: "Kick Pad", category:"pads/kickshields", description: "It easily absorbs full contact strikes and the double layered webbing, re-enforced buckle straps ensures a more secure fit.", price: "159,99", stock:5, img: Padskickshieldsimg('./paolowkick.png')},
  { id: 11, name: "Target Punch Pad", category:"pads/kickshields", description: "The pads can be used for punching kicking, martial arts and general fitness.", price: "14,99", stock:5, img: Padskickshieldsimg('./paos.png')},
  { id: 12, name: "Boxing Pads", category:"pads/kickshields", description: "These pads have a unique design with balance force mechanism for ultimate stability and performance.", price: "14,49", stock:5, img: Padskickshieldsimg('./paosvelocidad.png')},
  { id: 13, name: "Boxing Head Guard Blue", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: "12,49", stock:5, img: Protectionsimg('./cabezalazul.png')},
  { id: 14, name: "Boxing Head Guard Cyan", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: "12,49", stock:5, img: Protectionsimg('./cabezalceleste.png')},
  { id: 15, name: "Boxing Head Guard Black", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: "12,49", stock:5, img: Protectionsimg('./cabezalnegro.png')},
  { id: 16, name: "Boxing Head Guard Red", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: "12,49", stock:5, img: Protectionsimg('./cabezalrojo.png')},
  { id: 17, name: "Premium Boxing Head Guard Yellow", category:"protections", description: "This boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai.", price: "30,49", stock:5, img: Protectionsimg('./cabezaltipo2.png')},
  { id: 18, name: "Premium Boxing Head Guard Green", category:"protections", description: "This boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai.", price: "30,49", stock:5, img: Protectionsimg('./cabezaltipo2verde.png')},
  { id: 19, name: "Premium Boxing Head Guard Violet", category:"protections", description: "This boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai.", price: "30,49", stock:5, img: Protectionsimg('./cabezaltipo2violeta.png')},
  { id: 20, name: "Inguinal", category:"protections", description: "Provides support for a single or double inguinal hernia, relieves pain and discomfort caused by inguinal or sports hernia.", price: "9,99", stock:5, img: Protectionsimg('./enguinal.png')},
  { id: 21, name: "Shin Guards Blue ", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: "11,99", stock:5, img: Protectionsimg('./tibialesazules.png')},
  { id: 22, name: "Shin Guards Red", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: "11,99", stock:5, img: Protectionsimg('./tibialesrojos.png')},
  { id: 23, name: "Shin Guards Cyan", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: "13,49", stock:5, img: Protectionsimg('./tibialescelestes.png')},
  { id: 25, name: "Shin Guards Orange", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: "13,49", stock:5, img: Protectionsimg('./tibialesnaranjas.png')},
  { id: 26, name: "Boxing Pads", category:"protections", description: "Provides the necessary foot coverage, go for Muay Thai, Kick boxing, MMA, BJJ, Karate and more. Shin insteps cover your legs and act as a shield against high impact shock.", price: "25,99", stock:5, img: Protectionsimg('./tibialespremiumnegros.png')},
  { id: 24, name: "Boxing Pads", category:"protections", description: "Provides the necessary foot coverage, go for Muay Thai, Kick boxing, MMA, BJJ, Karate and more. Shin insteps cover your legs and act as a shield against high impact shock.", price: "25,99", stock:5, img: Protectionsimg('./tibialespremiumvioleta.png')},
  { id: 27, name: "Boxing Pads", category:"protections", description: "Provides the necessary foot coverage, go for Muay Thai, Kick boxing, MMA, BJJ, Karate and more. Shin insteps cover your legs and act as a shield against high impact shock.", price: "25,99", stock:5, img: Protectionsimg('./tibialespremiumdorados.png')},
  { id: 28, name: "Protector Boxing Mouthguard Blue", category:"accessories", description: "With integrated breathing channels that make it easy to breathe and a heavy duty silicone construction, this mouthguard ensures ease of use and comfortable wear whether you're training up or out putting everything you've worked for into full motion.", price: "8,25", stock:5, img: Accessoriesimg('./bucalazul.png')},
  { id: 29, name: "Protector Boxing Mouthguard Red", category:"accessories", description: "With integrated breathing channels that make it easy to breathe and a heavy duty silicone construction, this mouthguard ensures ease of use and comfortable wear whether you're training up or out putting everything you've worked for into full motion.", price: "8,25", stock:5, img: Accessoriesimg('./bucalrojo.png')},
  { id: 30, name: "Protector Boxing Mouthguard Golden", category:"accessories", description: "With integrated breathing channels that make it easy to breathe and a heavy duty silicone construction, this mouthguard ensures ease of use and comfortable wear whether you're training up or out putting everything you've worked for into full motion.", price: "8,25", stock:5, img: Accessoriesimg('./bucaldorado.png')},
  { id: 31, name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas1.png')},
  { id: 32, name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas2.png')},
  { id: 33, name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas3.png')},
  { id: 34, name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas4.png')},
  { id: 35, name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas5.png')},
]


export default function ItemListContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let catalegue = true;
    const getData = new Promise(resolve => {
      setTimeout(() => {
        if(catalegue) {
          resolve(products);
        } else {
          reject('An error has occurred')
        }
      }, 2000);
    }); 
    /* getData.then(res => setData(res)) */


    getData
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      })
      
  }, [])
  

  const onAdd = (quantity) => {
    alert(`Agregaste ${quantity} productos`)
  }

  return (
    <>
    {/* <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
      <strong className="me-auto">Bootstrap</strong>
      <small>11 mins ago</small>
    </Toast.Header> 
    <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
  </Toast> */}
   <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    {loading ? <SpinnerLoading />: <ItemList data={data} />}
    </>
  )
}
