const Glovesimg = require.context('../assets/img/products/gloves', true);
const Bagsimg = require.context('../assets/img/products/bags', true);
const Padskickshieldsimg = require.context('../assets/img/products/pads-kickshields', true);
const Protectionsimg = require.context('../assets/img/products/protections', true);
const Accessoriesimg = require.context('../assets/img/products/accessories', true);
const products = [
    { id: '01', name: "Blue Gloves", category:"gloves", description: "Blue professional boxing gloves for competitions.", price: "45", stock:5, img: Glovesimg('./bluegloves.png'), descriptionadded: `Our Original Leather Boxing Gloves boast the quality and attention to detail you would expect from Revgear at an affordable price point. The simple, no-frills design is ideal for entry-level participants who want a high quality glove that is built to last through countless rigorous training sessions. Enjoy a comfortable, secure fit so you can focus on your performance. Choose your favorite color combination to match your unique sense of style.

    
    Features
    Attached thumb for safety
    Ultra-Lock™ hook and loop closure for secure fit and support
    Built to last with all leather construction
    Available in four sizes: 10, 12, 14, and 16 oz
    Available in five color combinations: black/blue, black/red, black/yellow, black/white, and black`},
    { id: '02', name: "Red Gloves", category:"gloves", description: "Red professional boxing gloves for competitions.", price: "45", stock:5, img: Glovesimg('./redgloves.png')},
    { id: '03', name: "White Gloves", category:"gloves", description: "White professional boxing gloves for competitions.", price: "49,99", stock:5, img: Glovesimg('./whitegloves.png')},
    { id: '04', name: "Snake White Gloves", category:"gloves", description: "Snake white professional boxing gloves for competitions.", price: "60", stock:5, img: Glovesimg('./snakewhitegloves.png')},
    { id: '05', name: "Snake Yellow Gloves", category:"gloves", description: "Snake yellow professional boxing gloves for competitions.", price: "60", stock:5, img: Glovesimg('./snakeyellowgloves.png')},
    { id: '06', name: "Dionel Bag", category:"bags", description: "Designed to help you work out and develop better swinging skills.", price: "89,99", stock:5, img: Bagsimg('./bag1.png')},
    { id: '07', name: "Heavy Kick Shield", category:"padsykickshields", description: "Use this MMA kick shield to boost your kicking power, speed, accuracy, and overall form.", price: "144,99", stock:5, img: Padskickshieldsimg('./escudo.png')},
    { id: '08', name: "Boxing Strike Pad", category:"padsykickshields", description: "Designed to help you work out and develop better swinging skills", price: "129,99", stock:5, img: Padskickshieldsimg('./gobernadora.png')},
    { id: '09', name: "Taekwondo Kick Pad", category:"padsykickshields", description: "This strike pad is designed to be extremely durable and long-lasting.", price: "12,99", stock:5, img: Padskickshieldsimg('./palmeta.png')},
    { id: '10', name: "Kick Pad", category:"padsykickshields", description: "It easily absorbs full contact strikes and the double layered webbing, re-enforced buckle straps ensures a more secure fit.", price: "159,99", stock:5, img: Padskickshieldsimg('./paolowkick.png')},
    { id: '11', name: "Target Punch Pad", category:"padsykickshields", description: "The pads can be used for punching kicking, martial arts and general fitness.", price: "14,99", stock:5, img: Padskickshieldsimg('./paos.png')},
    { id: '12', name: "Boxing Pads", category:"padsykickshields", description: "These pads have a unique design with balance force mechanism for ultimate stability and performance.", price: "14,49", stock:5, img: Padskickshieldsimg('./paosvelocidad.png')},
    { id: '13', name: "Boxing Head Guard Blue", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: "12,49", stock:5, img: Protectionsimg('./cabezalazul.png')},
    { id: '14', name: "Boxing Head Guard Cyan", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: "12,49", stock:5, img: Protectionsimg('./cabezalceleste.png')},
    { id: '15', name: "Boxing Head Guard Black", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: "12,49", stock:5, img: Protectionsimg('./cabezalnegro.png')},
    { id: '16', name: "Boxing Head Guard Red", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: "12,49", stock:5, img: Protectionsimg('./cabezalrojo.png')},
    { id: '17', name: "Premium Boxing Head Guard Yellow", category:"protections", description: "This boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai.", price: "30,49", stock:5, img: Protectionsimg('./cabezaltipo2.png')},
    { id: '18', name: "Premium Boxing Head Guard Green", category:"protections", description: "This boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai.", price: "30,49", stock:5, img: Protectionsimg('./cabezaltipo2verde.png')},
    { id: '19', name: "Premium Boxing Head Guard Violet", category:"protections", description: "This boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai.", price: "30,49", stock:5, img: Protectionsimg('./cabezaltipo2violeta.png')},
    { id: '20', name: "Inguinal", category:"protections", description: "Provides support for a single or double inguinal hernia, relieves pain and discomfort caused by inguinal or sports hernia.", price: "9,99", stock:5, img: Protectionsimg('./enguinal.png')},
    { id: '21', name: "Shin Guards Blue ", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: "11,99", stock:5, img: Protectionsimg('./tibialesazules.png')},
    { id: '22', name: "Shin Guards Red", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: "11,99", stock:5, img: Protectionsimg('./tibialesrojos.png')},
    { id: '23', name: "Shin Guards Cyan", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: "13,49", stock:5, img: Protectionsimg('./tibialescelestes.png')},
    { id: '25', name: "Shin Guards Orange", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: "13,49", stock:5, img: Protectionsimg('./tibialesnaranjas.png')},
    { id: '26', name: "Premium Shin Guards", category:"protections", description: "Provides the necessary foot coverage, go for Muay Thai, Kick boxing, MMA, BJJ, Karate and more. Shin insteps cover your legs and act as a shield against high impact shock.", price: "25,99", stock:5, img: Protectionsimg('./tibialespremiumnegros.png')},
    { id: '24', name: "Premium Shin Guards", category:"protections", description: "Provides the necessary foot coverage, go for Muay Thai, Kick boxing, MMA, BJJ, Karate and more. Shin insteps cover your legs and act as a shield against high impact shock.", price: "25,99", stock:5, img: Protectionsimg('./tibialespremiumvioleta.png')},
    { id: '27', name: "Premium Shin Guards", category:"protections", description: "Provides the necessary foot coverage, go for Muay Thai, Kick boxing, MMA, BJJ, Karate and more. Shin insteps cover your legs and act as a shield against high impact shock.", price: "25,99", stock:5, img: Protectionsimg('./tibialespremiumdorados.png')},
    { id: '28', name: "Protector Boxing Mouthguard Blue", category:"accessories", description: "With integrated breathing channels that make it easy to breathe and a heavy duty silicone construction, this mouthguard ensures ease of use and comfortable wear whether you're training up or out putting everything you've worked for into full motion.", price: "8,25", stock:5, img: Accessoriesimg('./bucalazul.png')},
    { id: '29', name: "Protector Boxing Mouthguard Red", category:"accessories", description: "With integrated breathing channels that make it easy to breathe and a heavy duty silicone construction, this mouthguard ensures ease of use and comfortable wear whether you're training up or out putting everything you've worked for into full motion.", price: "8,25", stock:5, img: Accessoriesimg('./bucalrojo.png')},
    { id: '30', name: "Protector Boxing Mouthguard Golden", category:"accessories", description: "With integrated breathing channels that make it easy to breathe and a heavy duty silicone construction, this mouthguard ensures ease of use and comfortable wear whether you're training up or out putting everything you've worked for into full motion.", price: "8,25", stock:5, img: Accessoriesimg('./bucaldorado.png')},
    { id: '31', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas1.png')},
    { id: '32', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas2.png')},
    { id: '33', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas3.png')},
    { id: '34', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas4.png')},
    { id: '35', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: "6,54", stock:5, img: Accessoriesimg('./vendas5.png')},
  ];

export const getData = new Promise(resolve => {
    let catalegue = true;
    setTimeout(() => {
      if(catalegue) {
        resolve(products);
      } else {
        reject('An error has occurred')
      }
    }, 2000)
})