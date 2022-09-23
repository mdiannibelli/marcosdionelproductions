const Glovesimg = require.context('../assets/img/products/gloves', true);
const Bagsimg = require.context('../assets/img/products/bags', true);
const Padskickshieldsimg = require.context('../assets/img/products/pads-kickshields', true);
const Protectionsimg = require.context('../assets/img/products/protections', true);
const Accessoriesimg = require.context('../assets/img/products/accessories', true);
export const products = [
    { id: '01', name: "Blue Gloves", category:"gloves", size1: '12oz', size2: '14oz', size3: '16oz', description: "Blue professional boxing gloves for competitions.", price: 45, stock:5, img: Glovesimg('./bluegloves.png'), descriptionadded: `Our Original Leather Boxing Gloves boast the quality and attention to detail you would expect from Revgear at an affordable price point. The simple, no-frills design is ideal for entry-level participants who want a high quality glove that is built to last through countless rigorous training sessions. Enjoy a comfortable, secure fit so you can focus on your performance. Choose your favorite color combination to match your unique sense of style.\nFeatures: \n-Attached thumb for safety \n-Ultra-Lock™ hook and loop closure for secure fit and support \n-Built to last with all leather construction \n-Available in four sizes: 10, 12, 14, and 16 oz\n-Available in three color combinations: black/blue, black/red and black/white`},
    { id: '02', name: "Red Gloves", category:"gloves", size1: '12oz', size2: '14oz', size3: '16oz', description: "Red professional boxing gloves for competitions.", price: 45, stock:5, img: Glovesimg('./redgloves.png'), descriptionadded: `Our Original Leather Boxing Gloves boast the quality and attention to detail you would expect from Revgear at an affordable price point. The simple, no-frills design is ideal for entry-level participants who want a high quality glove that is built to last through countless rigorous training sessions. Enjoy a comfortable, secure fit so you can focus on your performance. Choose your favorite color combination to match your unique sense of style.\nFeatures: \n-Attached thumb for safety \n-Ultra-Lock™ hook and loop closure for secure fit and support \n-Built to last with all leather construction \n-Available in four sizes: 10, 12, 14, and 16 oz\n-Available in three color combinations: black/blue, black/red and black/white`},
    { id: '03', name: "White Gloves", category:"gloves", size1: '12oz', size2: '14oz', size3: '16oz', description: "White professional boxing gloves for competitions.", price: 45, stock:5, img: Glovesimg('./whitegloves.png'), descriptionadded: `Our Original Leather Boxing Gloves boast the quality and attention to detail you would expect from Revgear at an affordable price point. The simple, no-frills design is ideal for entry-level participants who want a high quality glove that is built to last through countless rigorous training sessions. Enjoy a comfortable, secure fit so you can focus on your performance. Choose your favorite color combination to match your unique sense of style.\nFeatures: \n-Attached thumb for safety \n-Ultra-Lock™ hook and loop closure for secure fit and support \n-Built to last with all leather construction \n-Available in four sizes: 10, 12, 14, and 16 oz\n-Available in three color combinations: black/blue, black/red and black/white`},
    { id: '04', name: "Snake White Gloves", category:"gloves", size1: '12oz', size2: '14oz', size3: '16oz', description: "Snake white professional boxing gloves for competitions.", price: 60, stock:5, img: Glovesimg('./snakewhitegloves.png'), descriptionadded: `Our Original Leather Boxing Gloves boast the quality and attention to detail you would expect from Revgear at an affordable price point. The simple, no-frills design is ideal for entry-level participants who want a high quality glove that is built to last through countless rigorous training sessions. Enjoy a comfortable, secure fit so you can focus on your performance. Choose your favorite color combination to match your unique sense of style.\nFeatures: \n-Attached thumb for safety \n-Ultra-Lock™ hook and loop closure for secure fit and support \n-Built to last with all leather construction \n-Available in four sizes: 10, 12, 14, and 16 oz\n-Available in two color combinations: black/yellow and black/white`},
    { id: '05', name: "Snake Yellow Gloves", category:"gloves", size1: '12oz', size2: '14oz', size3: '16oz', description: "Snake yellow professional boxing gloves for competitions.", price: 60, stock:5, img: Glovesimg('./snakeyellowgloves.png'), descriptionadded: `Our Original Leather Boxing Gloves boast the quality and attention to detail you would expect from Revgear at an affordable price point. The simple, no-frills design is ideal for entry-level participants who want a high quality glove that is built to last through countless rigorous training sessions. Enjoy a comfortable, secure fit so you can focus on your performance. Choose your favorite color combination to match your unique sense of style.\nFeatures: \n-Attached thumb for safety \n-Ultra-Lock™ hook and loop closure for secure fit and support \n-Built to last with all leather construction \n-Available in four sizes: 10, 12, 14, and 16 oz\n-Available in two color combinations: black/yellow and black/white`},
    { id: '06', name: "Dionel Bag", category:"bags", description: "Designed to help you work out and develop better swinging skills.", price: 89.99, stock:5, img: Bagsimg('./bag1.png'), descriptionadded: `As we know, boxing is a good way to practice your reflecting ability and endurance. However, boxing is full of dangerous, preparing good equipment's is necessary. Today, we introduce you this Thai MMA Boxing Set. This Sandal Hanging Hollow Sandbags are made of high quality material, durable for you to use during boxing process. Specially designed to develop hand and foot technique, this boxing equipment can be applied to train professional boxing athletes. What a useful boxing equipment you should not miss out!

Features: 
100cm/3ft Thai MMA Boxing Set Heavy Punching Bag w/ Gloves, Bandages, Hook, Chain.
Designed with high-quality material, it is practical and durable
The punch bag will enhance your endurance, speed and accuracy It is a great workout tool for home or gym use.
This target is used for Boxing Sandbag (or other martial arts) fans to practice
The punch bag can be used for punching kicking, martial arts and general fitness
    
Specifications:
-Material: Oxford
-Length: 100cm/39"
-Diameter: 30cm/11.8"
-Color: Red & Black
-Weight: About 1kg
-Capacity: About 80kg
Package Lists:
-1 x Pouching bag (Empty)
-1 x Hook
-1 x Chains
-1pair x Boxing gloves (Radom Color)

Notes:
This product is an empty boxing bag that needs to be filled before use.
Recommended fillings: sand, saw dust, ripped rags, shredded foam, peanut shell, corncob, rice hull, etc.`},
    { id: '07', name: "Heavy Kick Shield", category:"padsykickshields", description: "Use this MMA kick shield to boost your kicking power, speed, accuracy, and overall form.", price: 144.99, stock:5, img: Padskickshieldsimg('./escudo.png'), descriptionadded: `This premium Kick Shield is infused with revolutionary high-tech foam configuration to absorb Heavy Hitter strikes even better than just about any other shield you will find. Made with the highest quality American craftmanship, the high performance 22 ounce shell is abrasion resistant and weighted to provide optimal performance, even after extended sessions with the heaviest hitters. 

Whether you’re training for a competition or just working on increasing your power, an MMA kick shield is an essential piece of equipment. Using a kick shield for martial arts with a partner is often more effective than kicking a stationary bag, as a moving target helps to improve your accuracy and speed. This rugged, thickly padded shield can take whatever punishment you dish out, so place your order with confidence.
    
Features:
-Side handles allow excellent maneuverability and versatility
-Unique foam configuration provides unparalleled protection for the holder
-Heavy 22 oz vinyl coated nylon and triple stitching for unwavering durability
-Firm striking surface. Foam cushion disperses impact effectively.
-Dimensions: 17" x 7" x 27" (about 43.18cm x 17.78cm x 68.58cm)
-Weight: 7 pounds

Your Satisfaction Guaranteed
At Revgear, we go the extra mile for the martial arts community, whether you’re buying just one MMA kick shield for personal use or stocking up your training facility with equipment with a wholesale account. You can count on Revgear to be there every step of your MMA journey.
    
Shop Revgear Today
This kick shield for martial arts offers exceptional quality and value, providing the perfect complement to our other sparring target products, including our Clapper Focus Target, Kickfit Forearm Shield, and Tombsone I. Use this MMA kick shield to boost your kicking power, speed, accuracy, and overall form.
    
-Heavy 22 oz vinyl coated nylon and triple stitching can withstand any punishment you can dish out
-Side handles make this pad more versatile than any shield you have ever used
-Dimensions: 25 inches by 16 inches. 6 inches thick (about 64cm x 41cm x 15cm).`},
    { id: '08', name: "Boxing Strike Pad", category:"padsykickshields", description: "Designed to help you work out and develop better swinging skills.", price: 129.99, stock:5, img: Padskickshieldsimg('./gobernadora.png'), descriptionadded: `Features:

1. High density filling fabric core, high density foam cushion rebound layer, wear resistance, high density and tear resistant PU leather.
2. The pad is very durable and has a recommended depth of strike which should be maintained throughout the pad to ensure maximum protection.
3. Excellent liner sponges provide a life‑like effect, better protection for boxers, increased protection and the ability to withstand the strongest shocks.
4. Designed to enhance focusing and solid hitting, spreading the impact of force evenly throughout the pad.
5. Not easy to deformation and can minimize the possible of injury. Wonderful training pad.
    
Specifications:
    
-Condition: 100% Brand New
-Item Type: Boxing Target
-Material: PU + Sponge
-Diameter: Approx. 34cm / 13.4in
-Thickness: Approx. 17cm / 6.7in
    
Package List:
    
-1 x Boxing Target 
-Not easy to deformation and can minimize the possible of injury. Wonderful training pad.
-High density filling fabric core, high density foam cushion rebound layer, wear resistance, high density and tear resistant PU leather.
-Excellent liner sponges provide a life‑like effect, better protection for boxers, increased protection and the ability to withstand the strongest shocks.`},
    { id: '09', name: "Taekwondo Kick Pads", category:"padsykickshields", description: "This strike pad is designed to be extremely durable and long-lasting.", price: 12.99, stock:5, img: Padskickshieldsimg('./palmeta.png'), descriptionadded: `This taekwondo training equipment can withstand even the toughest kicks. Designed for combat athletes and mixed martial arts enthusiasts, our karate gear can be used for Tae Kwon Do, MMA, Karate, Boxing, or Hapkido. This equipment helps to develop stronger kick combinations and defense moves. Our kicking pads for martial arts are made of strong PU leather to ensure durability. Each red kick paddle features a wrist strap to keep the gear from slipping.
    
-Taekwondo Kick Pads: Includes 2 packs, double-sided kickboxing pads that can be used for Tae Kwon Do, MMA, Karate, Boxing, Muay Thai, or Hapkido
-Martial Arts Training Equipment: This taekwondo sparring gear is made for heavy hits, kicking combos, and speed training; the karate kick pads are excellent for practicing low and high kicks
-Built to Last: This pair of martial arts kicking targets is made of durable, flexible faux leather (PU); built-in boards produce a loud striking sound to help you measure the quality of strikes
-Easy to Use: Just grab the end straps of the striking pads, wrap them around your wrist and start training; you won't have to worry about the karate pads slipping
-Dimensions: The taekwondo paddles measure approximately 15 x 2.5 x 7.5 inches each`},
    { id: '10', name: "Kick Pad", category:"padsykickshields", description: "It easily absorbs full contact strikes and the double layered webbing, re-enforced buckle straps ensures a more secure fit.", price: 159.99, stock:5, img: Padskickshieldsimg('./paolowkick.png'), descriptionadded: `Multi Angled Curved Body Punch and Kicking Shield. Made of durable and easy to clean 22oz vinyl coated nylon built to uphold against hard hits in your home or commercial gym. Size: 20" x 12" x 5"

-Safely train leg and knee strikes with ease. Multi Angled Curved Body Punch and Kicking Shield.
-Made of durable and easy to clean 22oz vinyl coated nylon built to uphold against hard hits in your home or commercial gym.
-Six handles enable you to practice shin kicks and other hard to practice techniques.
-Multi-layered foam padding designed for heavy hitters.
-Durable straps with triple stitching
-Size: 20" x 12" x 5"
-Sold Individually.`},
    { id: '11', name: "Target Punch Pad", category:"padsykickshields", description: "The pads can be used for punching kicking, martial arts and general fitness.", price: 14.99, stock:5, img: Padskickshieldsimg('./paos.png'), descriptionadded: `Hide Leather Thai Pads are ideal for honing your skills in the area of combat sports like MMA, Muay Thai, Kickboxing, and Brazilian Jiu-Jitsu among various others. The tri-layered padding in the pads helps them diffuse the force as the target is punched, or kicked, while the Maya Hide Leather and a unique, industrial grade stitching ensure that the Thai Pads do not tear or split during training. With a light and ergonomic design that combines with Quick-EZ hook-and-loop closure on the straps, the Thai Pads are easy to use, train with, and secure on hands during practice.
    
Features:

-RDX G-Core all Leather Pads ( 33cm High 20cm Wide 10cm Depth )
-The pads are of an oval type design shape
-Filled with 'IMT' three layers of Gel integrated thick Foam for heavy duty shock absorption, high density foam to take the most grueling hits
-Pads are light with a good ergonomic design
-Sold as pair`},
    { id: '12', name: "Boxing Pads", category:"padsykickshields", description: "These pads have a unique design with balance force mechanism for ultimate stability and performance.", price: 14.49, stock:5, img: Padskickshieldsimg('./paosvelocidad.png'), descriptionadded: `Durable and high quality, this boxing target pad is made of light weight and flexible foam which provides superior shock absorbency,and the PU leather is easy to clean and maintain.
Separate finger design to keep your force is evenly distributed on the hook & jab punching pads.
Elastic and adjustable strap design to keep your hands snug and in place even during the sweatiest training sessions.
Highly flexible and density sponge, the sponge of this punch mitts is highly flexible, will rapid recovery after hitting,not hurt the trainer or coach.
Reasonable size, these gloves are great for kids and adults because of their unique design ,help kids and adults to improve struck skills,guarantee the training effect.
    
Specifications:

-Material: PU.
-Color: black, white.
-Size: 20 * 24cm.
    `},
    { id: '13', name: "Boxing Head Guard Blue", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: 12.49, stock:5, img: Protectionsimg('./cabezalazul.png'), descriptionadded:`Made from resilient Maya hide leather to endure relentless beatings for a long time. The headgear is infused with max. Shock equilibrium foam to provide maximum shock absorption against blunt impact. The G-core technology further allows zero feel against these heavy impacts. Made highly impactful; by the addition of a compressed EVA-LUTION sheet, this head guard is made almost invincible along with the addition of SpongeX padding for added resistance. The anatomic design fits the contours of your head and the open face design allows maximum breathability during sweaty workouts. The Quick EZ hook & loop closure strap provides a firm fit and removes any chances of slippage and provides optimum head flexion.

-Intended with resilient Maya Hide leather. This sturdy patented leather is crafted to perfection, it resists wear & tear during Boxing, Kickboxing, Muay Thai, MMA, and more.
-EVA-Duration Foam padding absorbs and dissipates the incoming force impact from unfortunate kicks and punches when engaged in a close fight, hence guarding and cushioning your young champs.
-Ergonomically manufactured in an open face design to allow maximum breathability and almost full visibility to tackle low blows. Shaped to the head’s natural contour an ideal fit and zero budge.
-Jumbolon Padding in-ears disperses the impact of force and delivers eventual impact resistance. The shock resistance foam and padding make this head protector almost invincible, against jabs and hooks.
-Quick-EZ hook-and-loop strap provides a firm fit, reducing the chances of any slippage of this head and ear protector. It stabilizes it solidly and allows the optimum amount of head flexion.`},
    { id: '14', name: "Boxing Head Guard Cyan", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: 12.49, stock:5, img: Protectionsimg('./cabezalceleste.png'), descriptionadded:`Made from resilient Maya hide leather to endure relentless beatings for a long time. The headgear is infused with max. Shock equilibrium foam to provide maximum shock absorption against blunt impact. The G-core technology further allows zero feel against these heavy impacts. Made highly impactful; by the addition of a compressed EVA-LUTION sheet, this head guard is made almost invincible along with the addition of SpongeX padding for added resistance. The anatomic design fits the contours of your head and the open face design allows maximum breathability during sweaty workouts. The Quick EZ hook & loop closure strap provides a firm fit and removes any chances of slippage and provides optimum head flexion.
    
-Intended with resilient Maya Hide leather. This sturdy patented leather is crafted to perfection, it resists wear & tear during Boxing, Kickboxing, Muay Thai, MMA, and more.
-EVA-Duration Foam padding absorbs and dissipates the incoming force impact from unfortunate kicks and punches when engaged in a close fight, hence guarding and cushioning your young champs.
-Ergonomically manufactured in an open face design to allow maximum breathability and almost full visibility to tackle low blows. Shaped to the head’s natural contour an ideal fit and zero budge.
-Jumbolon Padding in-ears disperses the impact of force and delivers eventual impact resistance. The shock resistance foam and padding make this head protector almost invincible, against jabs and hooks.
-Quick-EZ hook-and-loop strap provides a firm fit, reducing the chances of any slippage of this head and ear protector. It stabilizes it solidly and allows the optimum amount of head flexion.`},
    { id: '15', name: "Boxing Head Guard Black", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: 12.49, stock:5, img: Protectionsimg('./cabezalnegro.png'), descriptionadded:`Made from resilient Maya hide leather to endure relentless beatings for a long time. The headgear is infused with max. Shock equilibrium foam to provide maximum shock absorption against blunt impact. The G-core technology further allows zero feel against these heavy impacts. Made highly impactful; by the addition of a compressed EVA-LUTION sheet, this head guard is made almost invincible along with the addition of SpongeX padding for added resistance. The anatomic design fits the contours of your head and the open face design allows maximum breathability during sweaty workouts. The Quick EZ hook & loop closure strap provides a firm fit and removes any chances of slippage and provides optimum head flexion.
    
-Intended with resilient Maya Hide leather. This sturdy patented leather is crafted to perfection, it resists wear & tear during Boxing, Kickboxing, Muay Thai, MMA, and more.
-EVA-Duration Foam padding absorbs and dissipates the incoming force impact from unfortunate kicks and punches when engaged in a close fight, hence guarding and cushioning your young champs.
-Ergonomically manufactured in an open face design to allow maximum breathability and almost full visibility to tackle low blows. Shaped to the head’s natural contour an ideal fit and zero budge.
-Jumbolon Padding in-ears disperses the impact of force and delivers eventual impact resistance. The shock resistance foam and padding make this head protector almost invincible, against jabs and hooks.
-Quick-EZ hook-and-loop strap provides a firm fit, reducing the chances of any slippage of this head and ear protector. It stabilizes it solidly and allows the optimum amount of head flexion.`},
    { id: '16', name: "Boxing Head Guard Red", category:"protections", description: "This helmet is not only strengthen the head protection, but also reduce the player's wounds.", price: 12.49, stock:5, img: Protectionsimg('./cabezalrojo.png'), descriptionadded:`Made from resilient Maya hide leather to endure relentless beatings for a long time. The headgear is infused with max. Shock equilibrium foam to provide maximum shock absorption against blunt impact. The G-core technology further allows zero feel against these heavy impacts. Made highly impactful; by the addition of a compressed EVA-LUTION sheet, this head guard is made almost invincible along with the addition of SpongeX padding for added resistance. The anatomic design fits the contours of your head and the open face design allows maximum breathability during sweaty workouts. The Quick EZ hook & loop closure strap provides a firm fit and removes any chances of slippage and provides optimum head flexion.
    
-Intended with resilient Maya Hide leather. This sturdy patented leather is crafted to perfection, it resists wear & tear during Boxing, Kickboxing, Muay Thai, MMA, and more.
-EVA-Duration Foam padding absorbs and dissipates the incoming force impact from unfortunate kicks and punches when engaged in a close fight, hence guarding and cushioning your young champs.
-Ergonomically manufactured in an open face design to allow maximum breathability and almost full visibility to tackle low blows. Shaped to the head’s natural contour an ideal fit and zero budge.
-Jumbolon Padding in-ears disperses the impact of force and delivers eventual impact resistance. The shock resistance foam and padding make this head protector almost invincible, against jabs and hooks.
-Quick-EZ hook-and-loop strap provides a firm fit, reducing the chances of any slippage of this head and ear protector. It stabilizes it solidly and allows the optimum amount of head flexion.`},
    { id: '17', name: "Premium Boxing Head Guard Yellow", category:"protections", description: "This boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai.", price: 30.49, stock:5, img: Protectionsimg('./cabezaltipo2.png'), descriptionadded:`This premium head guard is a living example of superior craftsmanship. The boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai. The protective headgear acts as a barrier against shock and impact that can cause unwanted stress. Sparring Headgear provides the necessary shock absorption without compromising your mobility. Boxing head gear is easy to wear and is appropriate for people with different head circumference. Full face helmet also acts as a barrier against any high impact shots targeted to your face and cheeks. This spar helmet protects you at all costs and giving you the opportunity to express yourself with authority.

Key Features:
-MAYA HIDE ConvEX SKIN LEATHER coverage assures extra-long life and professional training results. Ultra-pliable material does not wear out unattractively. Go for Boxing, MMA, Muay Thai, Kickboxing with full confidence.
-POLYGONAL FUSION PU-MOULD, Max-Shock Equilibrium Foam, shock absorbing EVA-Lution padded impact resistant foam padding at the forehead and cheeks, plus added coverage foams over the ears, sides, back and top.
-ADJUSTABLE BUCKLE CHIN STRAP offers fully adjustable back and top hook-and-loop closure that assures a secure, no slip, custom fit every time.
-OPEN TOP AND EAR DESIGN coupled with inner dazzle fabric, all new quick drying and anti-slip inside lining is sweat wicking. Stylish contrast stitching for professional results and extended life.
-SUPER CONVENIENT REAR ENTRY design makes for the best on and off application. Multi-layer shock absorbing and resilient inner foams offer ideal fit, coverage and training comfort.
-MMA head guard has leather exterior
-Padded head support
-Sparring headgear having face protection
-Spar helmet featuring ear padding
-Fighting head gear possessing Hook and loop closure
-Dynamic size range
-Maya hide leather Head guard- is durable and resist the unwanted wear and tear. A gear that allows you to practice MMA, Boxing, Kickboxing, Muay Thai and more.
-Padded spar helmet- provides impact resistance so you can focus where it matters the most. Whether you engage in light sparring or full blown out boxing match, the head guard acts as a shield against high velocity shots.
-Sparring headgear having hook and loop closure- gives a perfect fit every time you wear this fighting head gear for protection.
-Protective headgear - protects your face against high impact shots so you can focus in pinning down your opponent
-Martial arts helmet- has ear padding in place to provide cushion to your ears so you can spar and train with full authority.`},
    { id: '18', name: "Premium Boxing Head Guard Green", category:"protections", description: "This boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai.", price: 30.49, stock:5, img: Protectionsimg('./cabezaltipo2verde.png'), descriptionadded:`This premium head guard is a living example of superior craftsmanship. The boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai. The protective headgear acts as a barrier against shock and impact that can cause unwanted stress. Sparring Headgear provides the necessary shock absorption without compromising your mobility. Boxing head gear is easy to wear and is appropriate for people with different head circumference. Full face helmet also acts as a barrier against any high impact shots targeted to your face and cheeks. This spar helmet protects you at all costs and giving you the opportunity to express yourself with authority.

Key Features:
-MAYA HIDE ConvEX SKIN LEATHER coverage assures extra-long life and professional training results. Ultra-pliable material does not wear out unattractively. Go for Boxing, MMA, Muay Thai, Kickboxing with full confidence.
-POLYGONAL FUSION PU-MOULD, Max-Shock Equilibrium Foam, shock absorbing EVA-Lution padded impact resistant foam padding at the forehead and cheeks, plus added coverage foams over the ears, sides, back and top.
-ADJUSTABLE BUCKLE CHIN STRAP offers fully adjustable back and top hook-and-loop closure that assures a secure, no slip, custom fit every time.
-OPEN TOP AND EAR DESIGN coupled with inner dazzle fabric, all new quick drying and anti-slip inside lining is sweat wicking. Stylish contrast stitching for professional results and extended life.
-SUPER CONVENIENT REAR ENTRY design makes for the best on and off application. Multi-layer shock absorbing and resilient inner foams offer ideal fit, coverage and training comfort.
-MMA head guard has leather exterior
-Padded head support
-Sparring headgear having face protection
-Spar helmet featuring ear padding
-Fighting head gear possessing Hook and loop closure
-Dynamic size range
-Maya hide leather Head guard- is durable and resist the unwanted wear and tear. A gear that allows you to practice MMA, Boxing, Kickboxing, Muay Thai and more.
-Padded spar helmet- provides impact resistance so you can focus where it matters the most. Whether you engage in light sparring or full blown out boxing match, the head guard acts as a shield against high velocity shots.
-Sparring headgear having hook and loop closure- gives a perfect fit every time you wear this fighting head gear for protection.
-Protective headgear - protects your face against high impact shots so you can focus in pinning down your opponent
-Martial arts helmet- has ear padding in place to provide cushion to your ears so you can spar and train with full authority.`},
    { id: '19', name: "Premium Boxing Head Guard Violet", category:"protections", description: "This boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai.", price: 30.49, stock:5, img: Protectionsimg('./cabezaltipo2violeta.png'), descriptionadded:`This premium head guard is a living example of superior craftsmanship. The boxing headgear is a versatile gear that can be used for practicing MMA, Boxing, Kickboxing and Muay Thai. The protective headgear acts as a barrier against shock and impact that can cause unwanted stress. Sparring Headgear provides the necessary shock absorption without compromising your mobility. Boxing head gear is easy to wear and is appropriate for people with different head circumference. Full face helmet also acts as a barrier against any high impact shots targeted to your face and cheeks. This spar helmet protects you at all costs and giving you the opportunity to express yourself with authority.

Key Features:
-MAYA HIDE ConvEX SKIN LEATHER coverage assures extra-long life and professional training results. Ultra-pliable material does not wear out unattractively. Go for Boxing, MMA, Muay Thai, Kickboxing with full confidence.
-POLYGONAL FUSION PU-MOULD, Max-Shock Equilibrium Foam, shock absorbing EVA-Lution padded impact resistant foam padding at the forehead and cheeks, plus added coverage foams over the ears, sides, back and top.
-ADJUSTABLE BUCKLE CHIN STRAP offers fully adjustable back and top hook-and-loop closure that assures a secure, no slip, custom fit every time.
-OPEN TOP AND EAR DESIGN coupled with inner dazzle fabric, all new quick drying and anti-slip inside lining is sweat wicking. Stylish contrast stitching for professional results and extended life.
-SUPER CONVENIENT REAR ENTRY design makes for the best on and off application. Multi-layer shock absorbing and resilient inner foams offer ideal fit, coverage and training comfort.
-MMA head guard has leather exterior
-Padded head support
-Sparring headgear having face protection
-Spar helmet featuring ear padding
-Fighting head gear possessing Hook and loop closure
-Dynamic size range
-Maya hide leather Head guard- is durable and resist the unwanted wear and tear. A gear that allows you to practice MMA, Boxing, Kickboxing, Muay Thai and more.
-Padded spar helmet- provides impact resistance so you can focus where it matters the most. Whether you engage in light sparring or full blown out boxing match, the head guard acts as a shield against high velocity shots.
-Sparring headgear having hook and loop closure- gives a perfect fit every time you wear this fighting head gear for protection.
-Protective headgear - protects your face against high impact shots so you can focus in pinning down your opponent
-Martial arts helmet- has ear padding in place to provide cushion to your ears so you can spar and train with full authority.`},
    { id: '20', name: "Inguinal", category:"protections", description: "Provides support for a single or double inguinal hernia, relieves pain and discomfort caused by inguinal or sports hernia.", price: 9.99, stock:5, img: Protectionsimg('./enguinal.png'), descriptionadded:`Wonder Care- Inguinal Hernia support Belt help to relieve pressure and accelerate the healing process for the Inguinal Hernia surgical procedure.It also helps to relieve pain and apply pressure to the affected groin areas.On wearing this belt the occurrence of herniation gets eliminated. Hernia belt is available in skin color, can be easily worn inconspicuously under clothing.Removable foam compression pads give gentle, gradual pressure to help reduce inguinal hernias (single or double).This belt provide you with the support and comfort, needed to maintain your active lifestyle.

-HELPS REDUCE INGUINAL HERNIA & RELIEVE PAIN: the cushions are used to apply pressure to the left, right, or both sides depending on the location of the hernia. Gentle and gradual pressure provide bilateral hernia support. This specially designed hernia belt for men is made to provide hernia pain relief and help in the treatment process. Unlike hernia briefs for men, this is the perfect solution to heal left side hernia, right side hernia, or hernias on both sides.
-It has velcroes on each side so its very adjustable and it has two pads, one on each side , that presses against it to hold it in place. The pads are removable so if you want to remove it from the non hernia side then you can.This belt provides the right amount of pressure to provide relief from a congenital hernia. It is made of great quality materials and is very durable.This is a very well made inguinal support brace. It's comfortable enough to wear under your clothes and for long periods of time. It's not a permenant solution but it helps a great deal in coping with the pain.
-The straps are adjustable to fit to the perfect size. It definitely hold you and giving a little relief to the herniated area. It can be used this after and before hernia surgery`},
    { id: '21', name: "Shin Guards Blue", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: 11.99, stock:5, img: Protectionsimg('./tibialesazules.png'), descriptionadded:`This shin guards are constructed from a blend of cotton material that ensures breathability, longevity, and comfort. The premium fabric of our mma shin guards for kids offers high-performance moisture wicking fabric. These shin pads muay thai also has a non-slip top so you can work out like a beast. This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection. Sometimes it’s easy to forget that they’re even there. Our youth shin protector come in a wide array of colors and sizes.

-Quality tested and long lasting protection
-Recommended for both men and women
-Constructed with high-impact protection foam which absorbs even the toughest strikes
-Non-slip design gives a very comfortable and snug fit for your shin
-It can be adjusted at the top using the velcroed strap for added security
-Great fit and design
-Available in wide array of colors and sizes
-Use these guards for kickboxing gear, sparring, mma fighting, or wrestling
-Quality cotton with reinforced stitching to withstand kicks, strikes, and blocks
-Perfect muay thai gear or wrestling kick pads
-Come with the ideal resilience and strength necessary for intensive training sessions
-Protect your entire shin and the metatarsal of your feet`},
    { id: '22', name: "Shin Guards Red", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: 11.99, stock:5, img: Protectionsimg('./tibialesrojos.png'), descriptionadded:`This shin guards are constructed from a blend of cotton material that ensures breathability, longevity, and comfort. The premium fabric of our mma shin guards for kids offers high-performance moisture wicking fabric. These shin pads muay thai also has a non-slip top so you can work out like a beast. This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection. Sometimes it’s easy to forget that they’re even there. Our youth shin protector come in a wide array of colors and sizes.

-Quality tested and long lasting protection
-Recommended for both men and women
-Constructed with high-impact protection foam which absorbs even the toughest strikes
-Non-slip design gives a very comfortable and snug fit for your shin
-It can be adjusted at the top using the velcroed strap for added security
-Great fit and design
-Available in wide array of colors and sizes
-Use these guards for kickboxing gear, sparring, mma fighting, or wrestling
-Quality cotton with reinforced stitching to withstand kicks, strikes, and blocks
-Perfect muay thai gear or wrestling kick pads
-Come with the ideal resilience and strength necessary for intensive training sessions
-Protect your entire shin and the metatarsal of your feet`},
    { id: '23', name: "Shin Guards Cyan", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: 13.49, stock:5, img: Protectionsimg('./tibialescelestes.png'), descriptionadded:`This shin guards are constructed from a blend of cotton material that ensures breathability, longevity, and comfort. The premium fabric of our mma shin guards for kids offers high-performance moisture wicking fabric. These shin pads muay thai also has a non-slip top so you can work out like a beast. This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection. Sometimes it’s easy to forget that they’re even there. Our youth shin protector come in a wide array of colors and sizes.

-Quality tested and long lasting protection
-Recommended for both men and women
-Constructed with high-impact protection foam which absorbs even the toughest strikes
-Non-slip design gives a very comfortable and snug fit for your shin
-It can be adjusted at the top using the velcroed strap for added security
-Great fit and design
-Available in wide array of colors and sizes
-Use these guards for kickboxing gear, sparring, mma fighting, or wrestling
-Quality cotton with reinforced stitching to withstand kicks, strikes, and blocks
-Perfect muay thai gear or wrestling kick pads
-Come with the ideal resilience and strength necessary for intensive training sessions
-Protect your entire shin and the metatarsal of your feet`},
    { id: '25', name: "Shin Guards Orange", category:"protections", description: "This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection.", price: 13.49, stock:5, img: Protectionsimg('./tibialesnaranjas.png'), descriptionadded:`This shin guards are constructed from a blend of cotton material that ensures breathability, longevity, and comfort. The premium fabric of our mma shin guards for kids offers high-performance moisture wicking fabric. These shin pads muay thai also has a non-slip top so you can work out like a beast. This helps to ensure enhanced protection for your legs. Our youth shin guards are super lightweight and provide great protection. Sometimes it’s easy to forget that they’re even there. Our youth shin protector come in a wide array of colors and sizes.

-Quality tested and long lasting protection
-Recommended for both men and women
-Constructed with high-impact protection foam which absorbs even the toughest strikes
-Non-slip design gives a very comfortable and snug fit for your shin
-It can be adjusted at the top using the velcroed strap for added security
-Great fit and design
-Available in wide array of colors and sizes
-Use these guards for kickboxing gear, sparring, mma fighting, or wrestling
-Quality cotton with reinforced stitching to withstand kicks, strikes, and blocks
-Perfect muay thai gear or wrestling kick pads
-Come with the ideal resilience and strength necessary for intensive training sessions
-Protect your entire shin and the metatarsal of your feet`},
    { id: '26', name: "Premium Shin Guards", category:"protections", description: "Provides the necessary foot coverage, go for Muay Thai, Kick boxing, MMA, BJJ, Karate and more. Shin insteps cover your legs and act as a shield against high impact shock.", price: 25.99, stock:5, img: Protectionsimg('./tibialespremiumnegros.png'), descriptionadded: `Equip yourself with reliable protection that won't hinder your speed or movement on the field with the Umbro Ceramica Adult Stirrup Shin Guards. Whether you're kicking and passing the soccer ball on offense or guarding the net, these green-colored soccer shin guard sleeves work hard to absorb shock, shield high-performance impact, and provide durable defense so you can spend hours on the field without worry. By combining a durable PP shell and comfortable polyester sleeve material, these soccer ankle guards offer superior protection for your shins and ankles while still allowing enough room for optimal range of movement. Flexible ankle grips and adjustable upper straps featured on both soccer shin pads make finding the perfect fit needed to play your best on the field easy. These ankle and shin protector sleeves are designed for adults from 5'3" to 5'11" in height. With an exciting mix of bright yellow and black, they will draw eyes to the soccer field and add a personal flair to the game.

-Protective soccer shin guards that don't hinder speed or movement
-Absorbs shock and impact to protect shins and ankles
-Durable PP shell for defense and polyester for optimal movement range
-Adjustable upper straps makes it easy to find the best fit
-Flexible ankle grips for a snug and comfy fit
-Attractive bright yellow and black pattern
-Fits adult players from 5'3" to 5'11" in height`},
    { id: '24', name: "Premium Shin Guards", category:"protections", description: "Provides the necessary foot coverage, go for Muay Thai, Kick boxing, MMA, BJJ, Karate and more. Shin insteps cover your legs and act as a shield against high impact shock.", price: 25.99, stock:5, img: Protectionsimg('./tibialespremiumvioleta.png'), descriptionadded: `Equip yourself with reliable protection that won't hinder your speed or movement on the field with the Umbro Ceramica Adult Stirrup Shin Guards. Whether you're kicking and passing the soccer ball on offense or guarding the net, these green-colored soccer shin guard sleeves work hard to absorb shock, shield high-performance impact, and provide durable defense so you can spend hours on the field without worry. By combining a durable PP shell and comfortable polyester sleeve material, these soccer ankle guards offer superior protection for your shins and ankles while still allowing enough room for optimal range of movement. Flexible ankle grips and adjustable upper straps featured on both soccer shin pads make finding the perfect fit needed to play your best on the field easy. These ankle and shin protector sleeves are designed for adults from 5'3" to 5'11" in height. With an exciting mix of bright yellow and black, they will draw eyes to the soccer field and add a personal flair to the game.

-Protective soccer shin guards that don't hinder speed or movement
-Absorbs shock and impact to protect shins and ankles
-Durable PP shell for defense and polyester for optimal movement range
-Adjustable upper straps makes it easy to find the best fit
-Flexible ankle grips for a snug and comfy fit
-Attractive bright yellow and black pattern
-Fits adult players from 5'3" to 5'11" in height`},
    { id: '27', name: "Premium Shin Guards", category:"protections", description: "Provides the necessary foot coverage, go for Muay Thai, Kick boxing, MMA, BJJ, Karate and more. Shin insteps cover your legs and act as a shield against high impact shock.", price: 25.99, stock:5, img: Protectionsimg('./tibialespremiumdorados.png'), descriptionadded: `Equip yourself with reliable protection that won't hinder your speed or movement on the field with the Umbro Ceramica Adult Stirrup Shin Guards. Whether you're kicking and passing the soccer ball on offense or guarding the net, these green-colored soccer shin guard sleeves work hard to absorb shock, shield high-performance impact, and provide durable defense so you can spend hours on the field without worry. By combining a durable PP shell and comfortable polyester sleeve material, these soccer ankle guards offer superior protection for your shins and ankles while still allowing enough room for optimal range of movement. Flexible ankle grips and adjustable upper straps featured on both soccer shin pads make finding the perfect fit needed to play your best on the field easy. These ankle and shin protector sleeves are designed for adults from 5'3" to 5'11" in height. With an exciting mix of bright yellow and black, they will draw eyes to the soccer field and add a personal flair to the game.

-Protective soccer shin guards that don't hinder speed or movement
-Absorbs shock and impact to protect shins and ankles
-Durable PP shell for defense and polyester for optimal movement range
-Adjustable upper straps makes it easy to find the best fit
-Flexible ankle grips for a snug and comfy fit
-Attractive bright yellow and black pattern
-Fits adult players from 5'3" to 5'11" in height`},
    { id: '28', name: "Protector Boxing Mouthguard Blue", category:"accessories", description: "With integrated breathing channels that make it easy to breathe and a heavy duty silicone construction, this mouthguard ensures ease of use and comfortable wear whether you're training up or out putting everything you've worked for into full motion.", price: 8.25, stock:5, img: Accessoriesimg('./bucalazul.png'), descriptionadded:`Dionel mouth guard features thick cushioning base, designed to absorb shock, distributes the force of an impact evenly, which is good for sports that require dental protection. This sports mouth guard can be applied for many sports activities, such as basketball, football, volleyball, ice skating, boxing, jujitsu, baseball, martial arts and so on. If your family have 10-16 year old youth / kids（your son or daughter）who like to participate in intense impact sports, please choose youth mouth guard as your child's best gift.`},
    { id: '29', name: "Protector Boxing Mouthguard Red", category:"accessories", description: "With integrated breathing channels that make it easy to breathe and a heavy duty silicone construction, this mouthguard ensures ease of use and comfortable wear whether you're training up or out putting everything you've worked for into full motion.", price: 8.25, stock:5, img: Accessoriesimg('./bucalrojo.png'), descriptionadded:`Dionel mouth guard features thick cushioning base, designed to absorb shock, distributes the force of an impact evenly, which is good for sports that require dental protection. This sports mouth guard can be applied for many sports activities, such as basketball, football, volleyball, ice skating, boxing, jujitsu, baseball, martial arts and so on. If your family have 10-16 year old youth / kids（your son or daughter）who like to participate in intense impact sports, please choose youth mouth guard as your child's best gift.`},
    { id: '30', name: "Protector Boxing Mouthguard Golden", category:"accessories", description: "With integrated breathing channels that make it easy to breathe and a heavy duty silicone construction, this mouthguard ensures ease of use and comfortable wear whether you're training up or out putting everything you've worked for into full motion.", price: 8.25, stock:5, img: Accessoriesimg('./bucaldorado.png'), descriptionadded:`Dionel mouth guard features thick cushioning base, designed to absorb shock, distributes the force of an impact evenly, which is good for sports that require dental protection. This sports mouth guard can be applied for many sports activities, such as basketball, football, volleyball, ice skating, boxing, jujitsu, baseball, martial arts and so on. If your family have 10-16 year old youth / kids（your son or daughter）who like to participate in intense impact sports, please choose youth mouth guard as your child's best gift.`},
    { id: '31', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: 6.54, stock:5, img: Accessoriesimg('./vendas1.png'), descriptionadded: `Keep your knee joints protected during workouts, walking and more with this wraps. These versatile wraps are designed to help you get relief from your knee discomfort. When you are experiencing knee pain, carrying out your activities of the day can become a challenge. Wearing these knee support wraps can help relieve you of that pain and can help you move around more comfortably, whether you're working or working out. They can even offer support when doing exercises such as squats and leg presses. The knee support wraps are made from a heavy-duty knitted material that stretches, ensuring proper compression during use. When you are not using them, they easily fit in a gym bag for effortless portability. Each set comes with one pair of wraps.`},
    { id: '32', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: 6.54, stock:5, img: Accessoriesimg('./vendas2.png'), descriptionadded: `Keep your knee joints protected during workouts, walking and more with this wraps. These versatile wraps are designed to help you get relief from your knee discomfort. When you are experiencing knee pain, carrying out your activities of the day can become a challenge. Wearing these knee support wraps can help relieve you of that pain and can help you move around more comfortably, whether you're working or working out. They can even offer support when doing exercises such as squats and leg presses. The knee support wraps are made from a heavy-duty knitted material that stretches, ensuring proper compression during use. When you are not using them, they easily fit in a gym bag for effortless portability. Each set comes with one pair of wraps.`},
    { id: '33', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: 6.54, stock:5, img: Accessoriesimg('./vendas3.png'), descriptionadded: `Keep your knee joints protected during workouts, walking and more with this wraps. These versatile wraps are designed to help you get relief from your knee discomfort. When you are experiencing knee pain, carrying out your activities of the day can become a challenge. Wearing these knee support wraps can help relieve you of that pain and can help you move around more comfortably, whether you're working or working out. They can even offer support when doing exercises such as squats and leg presses. The knee support wraps are made from a heavy-duty knitted material that stretches, ensuring proper compression during use. When you are not using them, they easily fit in a gym bag for effortless portability. Each set comes with one pair of wraps.`},
    { id: '34', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: 6.54, stock:5, img: Accessoriesimg('./vendas4.png'), descriptionadded: `Keep your knee joints protected during workouts, walking and more with this wraps. These versatile wraps are designed to help you get relief from your knee discomfort. When you are experiencing knee pain, carrying out your activities of the day can become a challenge. Wearing these knee support wraps can help relieve you of that pain and can help you move around more comfortably, whether you're working or working out. They can even offer support when doing exercises such as squats and leg presses. The knee support wraps are made from a heavy-duty knitted material that stretches, ensuring proper compression during use. When you are not using them, they easily fit in a gym bag for effortless portability. Each set comes with one pair of wraps.`},
    { id: '35', name: "Boxing Hand Wraps", category:"accessories", description: "These inner hand wraps provides sufficient padding to your hands so you remain shielded against high impact strikes.", price: 6.54, stock:5, img: Accessoriesimg('./vendas5.png'), descriptionadded: `Keep your knee joints protected during workouts, walking and more with this wraps. These versatile wraps are designed to help you get relief from your knee discomfort. When you are experiencing knee pain, carrying out your activities of the day can become a challenge. Wearing these knee support wraps can help relieve you of that pain and can help you move around more comfortably, whether you're working or working out. They can even offer support when doing exercises such as squats and leg presses. The knee support wraps are made from a heavy-duty knitted material that stretches, ensuring proper compression during use. When you are not using them, they easily fit in a gym bag for effortless portability. Each set comes with one pair of wraps.`},
  ];

export const getData = new Promise((resolve, reject) => {
    let catalegue = true;
    setTimeout(() => {
      if(catalegue) {
        resolve(products);
      } else {
        reject('An error has occurred')
      }
    }, 2000)
})