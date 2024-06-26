/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-16 py-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 min-w-screen min-h-screen mx-auto bg-[#efeff1]">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-[#36186d] font-medium">
          Best quality of raw materials.
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold text-[#252329]">
          Raw Herbs
        </h3>
        <p className="text-base md:text-lg text-[#645e6e] my-4 md:my-6">
          We have the best quality of <strong>Raw Herbs, Spices and Powder</strong> that are sourced directly from farmers or grwon inhouse.
          We ensure that the quality of the raw materials are top notch.
        </p>
        <button className="bg-[#9971e0] text-white font-medium py-2 px-4 rounded transition-all hover:bg-[#36186d] active:scale-95">
          About Us
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://merlionnaturals.in/cdn/shop/articles/ashwagandha-merlion-naturals_900x.jpg?v=1676958103",
    alt: "Ashwagandha, Withania Somnifera, Indian Ginseng, Ashwa, Ashwagandha, Asgandh, Asgandha, Asgand, Asgandh, Asgand",
  },
  {
    id: 2,
    src: "https://m.media-amazon.com/images/I/51Z9BNZOgNL._AC_UF1000,1000_QL80_.jpg",
    alt: "Chia Seeds, Sabja Seeds, Basil Seeds, Tukmaria Seeds, Falooda Seeds, Sweet Basil Seeds, Selashi Seeds, Sabja Ginjalu, Sabja Vithai, Tukmaria, Tulsi Seeds, Tulsi Dana, Tukmalanga, Tukmalanga",
  },
  {
    id: 3,
    src: "https://5.imimg.com/data5/SELLER/Default/2022/10/UM/TC/JF/45859230/guduchi-extract-500x500.jpg",
    alt: "Guduchi, Giloy, Tinospora Cordifolia, Amrita, Gurcha, Heart-Leaved Moonseed, Guduchi Satva, Amrita Satva, Amritavalli, Chinnaruha",
  },
  {
    id: 4,
    src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/t/6/c/100-dry-amla-marwal-creation-original-imagy4s5bznzaycj.jpeg?q=20&crop=false",
    alt: "Amla, Indian Gooseberry, Phyllanthus Emblica, Emblic Myrobalan, Emblic, Amlaki, Amlakhi, Aavla, Aavlekaayi, Nellikkai, Nellikka, Usirikai, Amalaki, Dhatri, Dhatriphala, Amalika, Amalaki, Amalakam, Amalakamu",
  },
  {
    id: 5,
    src: "https://5.imimg.com/data5/ANDROID/Default/2023/1/JM/AG/BK/6411974/product-jpeg-500x500.jpg",
    alt: "Shatavri, Asparagus, Asparagus Racemosus, Asparagus Racemosa, Asparagus Shatavari, Asparagus Satavar, Asparagus Sariva, Asparagus Sariva, Asparagus Satavari, Asparagus Satavari, Asparagus Satavar, Asparagus Satavar",
  },
  {
    id: 6,
    src: "https://www.researchgate.net/publication/354518896/figure/fig3/AS:1066785021382657@1631352777581/Moringa-seeds-and-leaves-extract.png",
    alt: "Moringa, Drumstick Tree, Horseradish Tree, Ben Oil Tree, Benzoil Tree, La Mu, Malunggay, Marango, Mlonge, Mulangay, Shevaga, Sajna, Sajna, Sajina, Shajna, Shajna, Shevaga, Shevaga",
  },
  {
    id: 7,
    src: "https://static.wixstatic.com/media/313fb0_17f7f87c28f24bceabb04c1d2aa3fe2b~mv2.jpg/v1/fill/w_480,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/313fb0_17f7f87c28f24bceabb04c1d2aa3fe2b~mv2.jpg",
    alt: "Belgiri, Bael, Bilva, Bilwa, Bel, Beli, Bela, Belapatra, Belaphal, Belaphala",
  },
  {
    id: 8,
    src: "https://m.media-amazon.com/images/I/41Fhl0mghvS._AC_UF1000,1000_QL80_.jpg",
    alt: "Neem, Nimba, Arishta, Arishtha, Azadirachta Indica, Margosa, Nimbay, Nimbaka, Nimbi, Nimbya, Vembu, Vepa, Veppam",
  },
  {
    id: 9,
    src: "https://m.media-amazon.com/images/I/61ChANNqdZL._AC_UF1000,1000_QL80_.jpg",
    alt: "Tulsi, Holy Basil, Ocimum Tenuiflorum, Ocimum Sanctum, Ocimum Sanct",
  },
  {
    id: 10,
    src: "https://ayurvedastoreonline.com/cdn/shop/products/Harad_1200x1200.jpg?v=1658566356",
    alt: "Harad, Haritaki, Terminalia Chebula",
  },
  {
    id: 11,
    src: "https://thepaharilife.com/cdn/shop/products/dry-stevia-leaf-glass-cup-wooden-tray-old-wooden-floor-dry-stevia-leaf-161412235_800x.jpg?v=1584275647",
    alt: "Stevia, Sweet Leaf, Sugar Leaf, Sweet Herb of Paraguay, Sweet Herb, Honey Leaf, Candy Leaf, Sweet Chrysanthemum, Sweet Mary, Sugar Plant, Stevia Rebaudiana, Sweet Plant, Sweet Weed, Sweet Grass, Sweet Herb, Sweet Leaf of Paraguay, Sweet Leaf of Brazil, Sweet Leaf of Mexico, Sweet Leaf of South America, Sweet Leaf of North America, Sweet Leaf of Central America, Sweet Leaf of the Americas, Sweet Leaf of the World, Sweet Leaf of the Universe, Sweet Leaf of the Galaxy, Sweet Leaf of the Solar System, Sweet Leaf of the Milky Way",
  },
  {
    id: 12,
    src: "https://m.media-amazon.com/images/I/71i4WL1pepL._AC_UF1000,1000_QL80_.jpg",
    alt: "FenuGreek, Methi, Trigonella Foenum-Graecum, Greek Hay, Greek Hay Seed, Bird's Foot, Cow's Horn, Cow's Horn Clover"
  },
  {
    id: 13,
    src: "https://gonefarmers.com/cdn/shop/products/image_804109dd-2bb8-4665-92b7-80710f2dfe43_1200x1200.jpg?v=1591725087",
    alt: "Dhania, Coriander, Coriandrum Sativum, Chinese Parsley"
  },
  {
    id: 14,
    src: "https://5.imimg.com/data5/SELLER/Default/2023/9/345593437/GT/CN/NS/16713292/terminalia-bellerica-fruit-bibhitaki-baheda-500x500.png",
    alt: "Baheda, Terminalia Bellerica, Bibhitaki, Vibhitaki, Vibheetaki, Vibheetaaki, Vibheeta"
  },
  {
    id: 15,
    src: "https://theayurvedaexperience.com/cdn/shop/articles/dry-ginger-benefits-ginger-powder-uses-ayurvedic-remedies-ginger-powder-tea-recipe-216039_900x.jpg?v=1595411803",
    alt: "Dry Ginger, Sunth, Sonth, Zingiber Officinale, Shunthi, Adrak, Adraka, Adrakh, Adrakam, Adrakamu"
  },
  {
    id: 16,
    src: "https://m.media-amazon.com/images/I/518uwsXHnAL._AC_UF1000,1000_QL80_.jpg",
    alt: "Rose Petals, Gulab Ke Phool, Rosa, Rosa Indica, Rosa Damascena, Rosa Centifolia, Rosa Gallica, Rosa Chinensis, Rosa Moschata, Rosa Rugosa, Rosa Canina, Rosa Laevigata, Rosa Roxburghii, Rosa Multiflora, Rosa Banksiae, Rosa Gigantea, Rosa Foetida, Rosa Sempervirens"
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full rounded-sm shadow-md hover:scale-125"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  const shuffleSquares = useCallback(() => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  }, []);

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, [shuffleSquares]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;