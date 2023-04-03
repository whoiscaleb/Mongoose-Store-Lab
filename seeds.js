const mongoose = require("mongoose")
const Product = require('models/products')

const seedProducts = [
    {
      name: 'Jordan 1 x Union LA',
      description: 'Lights, Cameras, Action! Nike has officially gone Hollywood and released the Jordan 1 Retro High Union Los Angeles Black Toe. This unique Jordan 1 comes with a white leather upper with a red accent, black Nike "Swoosh", cream midsole, and red sole.',
      img: 'https://unsplash.com/photos/BjhKc5QBzlg',
      price: $190,
      qty: 82
    }, 
    {
      name: 'Air Force One Low 07',
      description: "The Nike Air Force 1 Low White 2007 features an all-white leather upper with a perforated toe box and Swoosh overlays. A Nike heel embroidery and white sole completes the design.",
      img: 'https://m.media-amazon.com/images/I/81uiWMk9dnL._AC_UL1500_.jpg',
      price: 110,
      qty: 17
    }, {
      name: 'Staple Pigeon Nike SB Dunk',
      description: 'Kung Fu Panda would probably lose his mind after seeing the Nike SB Dunk Low Staple Panda Pigeon. This Nike SB comes in a white upper with black accents, white Nike "Swoosh", black midsole and translucent sole. ',
      img: 'https://images.stockx.com/images/Nike-SB-Dunk-Low-Panda-Pigeon-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607048105',
      price: 850,
      qty: 8
    },   {
        name: 'Nike Air Max 1 OG 86',
        description: 'The Air Max 1 ‘86 Big Bubble released as Nikes premier Air Max Day release in 2023. The sneakers are constructed using grey nubuck, white mesh and red suede across the uppers and a large air unit on the midsole. Nike used Sport Red branding on the tongue and heel of the sneaker.',
        img: 'https://media.endclothing.com/end-features/f_auto,q_auto:eco,w_1520/prodfeatures/df24a3c2-2246-452e-9b64-2bf9a8457f28_DQ3989-100_launches_hero_landscape_1.png?auto=compress,format',
        price: 150,
        qty: 110
      }, {
        name: 'New Balance 550',
        description: "The New Balance 550 White Green features a smooth white leather upper with a grey suede toe wrap and green detailing. From there, a New Balance Basketball woven tongue label and matching sole completes the design.",
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.highsnobiety.com%2Fp%2Fbest-new-balance-550-buy-online%2F&psig=AOvVaw1qzkdbAah8sf67AZXb9DOI&ust=1680557914073000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMjH5p2UjP4CFQAAAAAdAAAAABB5',
        price: 110,
        qty: 17
      }, {
        name: 'Adidas Ultra Boost White Multi Color',
        description: 'This Ultra Boost 4 is categorized under adidas running shoes. Its upper part is made of woven Primeknit that is complemented with multicolored yarns. An Ultra Boost branding can be seen on the back right side of the right shoe, with a similar branding spotted on the back left side of the left shoe. A white midsole sits on a black outsole to complete the look of this sneaker.',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstockx.com%2Fadidas-ultra-boost-4-white-multi-color&psig=AOvVaw0e8jbs_jjYo0N7U7FlVPwD&ust=1680558013083000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCMDglM2UjP4CFQAAAAAdAAAAABAK',
        price: 180,
        qty: 8
      },
  ];

  const seedDB = async () => {
    await Product.deleteMany({});
    await Product.insertMany(seedProducts);
  };

  seedDB().then(() => {
    mongoose.connection.close;
  });


