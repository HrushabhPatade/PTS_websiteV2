import victus from "../images/HP Victus.jpg";
import g15 from "../images/dell g15.jpg";
import omen from "../images/hp-omen-16.jpg";
const products = [
    { id:1,
      title: "DELL G15",
      specs: "Dell Gaming G15 Ryzen Edition D560804WIN9W R5-5600H Win 11 + Office H&S 2021 8GB DDR4 512GB SSD NVIDIA® GEFORCE® RTX 3050 (4GB GDDR6) 15.6 FHD WVA AG 250 nits 120Hz Narrow Border Backlit Keyboard Orange Phantom Grey with speckles Dell Gaming Lite 1 Year Onsite Hardware",
      price: 65999,
      image: g15,
    },
    { id:2, 
      title: "HP Victus",
      specs: "12th Generation Intel® Core™ i7 processor Windows 11 Home 39.6 cm (15.6) diagonal FHD display 144 Hz, 9 ms response time NVIDIA® GeForce RTX™ 4050 16 GB DDR4-3200 MHz RAM 512 GB PCIe® Gen4 NVMe™ TLC M.2 SSD Hard drive Baclit keyboard with numeric keypad, Wide Vision 720p HD camera, B&O Speakers",
      price: 165999,
      image: victus,
    },
    { id:3,
      title: "HP OMEN",
      specs: "13th Generation Intel® Core™ i7 processor Windows 11 Home 40.6 cm (16) diagonal, WQXGA 240 Hz refresh rate, 7 ms response time display NVIDIA® GeForce RTX™ 4050 512 GB PCIe® NVMe™ SSD Hard drive 16 GB RAM DDR5 Backlit RGB 4-zone Keyboard/True Vision 1080p FHD IR camera/B&O Speakers/Weighs: 2.09 kg",
      price: 75000,
      image: omen,
    },
    
    // Add more products as needed
  ];
  
  export default products;