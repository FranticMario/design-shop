 const products = [
    {
      name: "Kanken Art Laptop 15\" Special Edition Backpack",
      brand: "Fjallraven",
      price: "$119.00",
      image: "1.png",
      link: "https://amzn.to/32MmHgL"
    },
    {
      name: "Swing Arm Wood Desk Lamp",
      brand: "Tomons",
      price: "$36.00",
      image: "d2.png",
      link: "https://amzn.to/2WX7vtD"
    },
    {
      name: "Hajo Backpack",
      brand: "Ucon Acrobatics",
      price: "$89.00",
      image: "u6.png",
      link: "https://amzn.to/2I3WvXM"
    },
    {
      name: "Zed Bamboo Longboard",
      brand: "Retrospec",
      price: "$60.00",
      image: "u10.png",
      link: "https://amzn.to/2YX3043"
    },
    {
      name: "Electric Pour-Over Kettle",
      brand: "Fellow",
      price: "$149.00",
      image: "u9.png",
      link: "https://amzn.to/2KfP3ee"
    },
    {
      name: "Woodie Vintage Car",
      brand: "Candylab Toys",
      price: "$35.00",
      image: "h17.png",
      link: "https://amzn.to/2FYB3zT"
    },
    {
      name: "Logo Modernism",
      brand: "Taschen",
      price: "$60.00",
      image: "c3.png",
      link: "https://www.bookdepository.com/Logo-Modernism-Jens-Muller-R-Roger-Remington/9783836545303/?a_aid=1991"
    },
    {
      name: "Dieter Rams: As Little Design as Possible",
      brand: "Sophie Lovell",
      price: "$150.00",
      image: "d7.png",
      link: "https://amzn.to/2YQLnCV"
    },
    {
      name: "The Eye",
      brand: "Nathan Williams",
      price: "$28.00",
      image: "c6.png",
      link: "https://amzn.to/2I3lbQ7"
    },
    {
      name: "Gather Desk Organizer",
      brand: "Ugmonk",
      price: "$149.00",
      image: "h13.png",
      link: "https://amzn.to/2IifSvA"
    },
    {
      name: "Dipped Canteen",
      brand: "Corkcicle.",
      price: "$28.00",
      image: "h8.png",
      link: "https://amzn.to/2G84CiT"
    },
    {
      name: "Sayl Office Chair White",
      brand: "Herman Miller",
      price: "$599.00",
      image: "h2.png",
      link: "https://amzn.to/2YWPz3N"
    },
    {
      name: "Three Cherry Wood Notebook",
      brand: "Field Notes",
      price: "$13.00",
      image: "d5.png",
      link: "https://amzn.to/2KhwTsz"
    },
    {
      name: "From Japan",
      brand: "Counter Print",
      price: "$16.00",
      image: "c5.png",
      link: "https://www.bookdepository.com/From-Japan/9780957081659?a_aid=1991"
    },
    {
      name: "Arigato Desk Lamp",
      brand: "Grupa",
      price: "$380.00",
      image: "h6.png",
      link: "http://www.grupaproducts.com/arigato/"
    },
    {
      name: "Winston Regal Watch",
      brand: "Komono",
      price: "$58.00",
      image: "u7.png",
      link: "https://amzn.to/2CZiPxO"
    },
    {
      name: "Letter H Poster",
      brand: "Hey Studio",
      price: "$45.00",
      image: "d4.png",
      link: "https://heyshop.es/collections/home/products/h-hey"
    },
    {
      name: "Coffee Can",
      brand: "Blue Bottle Company",
      price: "$11.00",
      image: "u11.png",
      link: "https://amzn.to/2UGLHEQ"
    },
    {
      name: "Beoplay H4",
      brand: "Bang & Olufsen",
      price: "$160.00",
      image: "h9.png",
      link: "https://amzn.to/2UFjEWp"
    },
    {
      name: "Make It Now",
      brand: "Anthony Burrill",
      price: "$22.00",
      image: "p2.png",
      link: "https://amzn.to/2OTHEQg"
    },
    {
      name: "Black Side Chair",
      brand: "Eames Style",
      price: "$54.00",
      image: "h4.png",
      link: "https://amzn.to/2UFHfGt"
    },
    {
      name: "Min: The New Simplicity in Graphic Design",
      brand: "Thames & Hudson",
      price: "$28.00",
      image: "c22.png",
      link: "https://amzn.to/2Ij1IKA"
    },
    {
      name: "Grid systems in graphic design",
      brand: "Josef Müller-Brockmann",
      price: "$42.00",
      image: "c1.png",
      link: "https://amzn.to/2UxtLww"
    },
    {
      name: "Card Wallet",
      brand: "Herschel",
      price: "$15.00",
      image: "u12.png",
      link: "https://amzn.to/2I5vxiq"
    },
    {
      name: "Classic Advice Print Black",
      brand: "Good Fucking Design Advice",
      price: "$30.00",
      image: "p3.png",
      link: "https://goodfuckingdesignadvice.com/products/classic-advice-print"
    },
    {
      name: "Magic Mouse 2",
      brand: "Apple",
      price: "$92.00",
      image: "life-15.png",
      link: "https://amzn.to/2D3yZWX"
    },
    {
      name: "Travel Tumbler",
      brand: "Kinto",
      price: "$34.00",
      image: "life-17.png",
      link: "https://amzn.to/2WTbsPL"
    },
    {
      name: "Magic Keyboard",
      brand: "Apple",
      price: "$139.00",
      image: "life-16.png",
      link: "https://amzn.to/2GbCf4A"
    },
    {
      name: "Bottle Grinder",
      brand: "Menu",
      price: "$75.00",
      image: "u8.png",
      link: "https://amzn.to/2WMJbdy"
    },
    {
      name: "Geo Thermos",
      brand: "Normann Copenhagen",
      price: "$62.00",
      image: "home-8.png",
      link: "https://amzn.to/2JLtxvk"
    },
    {
      name: "Womb Chair & Ottoman",
      brand: "Kardiel",
      price: "$799.00",
      image: "home-10.png",
      link: "https://amzn.to/2YdSBPy"
    },
    {
      name: "Water Filter Glass Carafe",
      brand: "Soma",
      price: "$30.00",
      image: "home-9.png",
      link: "https://amzn.to/2LCEfGP"
    }
  ];
  

  export default products;