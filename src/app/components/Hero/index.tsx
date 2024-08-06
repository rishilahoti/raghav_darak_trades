/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

const ShuffleHero = () => {

  const handleEmailClick = () => {
    console.log('Email button clicked');
    window.location.href = 'mailto:herbalnorganic@gmail.com?subject=Inquiry&body=Hello, I would like to know more about your products.';
  };

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
          We have the best quality of <strong>Raw Herbs, Spices and Powder</strong> that are sourced directly from farmers or grown inhouse.
          We ensure that the quality of the raw materials are top notch and as per your needs.
        </p>
        <button onClick={handleEmailClick} className="bg-[#9971e0] text-white font-medium py-2 px-4 rounded transition-all hover:bg-[#36186d] active:scale-95">
          About Us
        </button>
      </div>
      <Image src='/images/descri-2.jpg' alt='spices' width={500} height={300} className='w-auto h-auto rounded-sm'/>
    </section>
  );
};

// const shuffle = (array: (typeof squareData)[0][]) => {
//   let currentIndex = array.length,
//     randomIndex;

//   while (currentIndex != 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// };

// const squareData = [
//   {
//     id: 1,
//     src: "/images/hero/ashwa.jpg",
//     alt: "Ashwagandha, Withania Somnifera, Indian Ginseng, Ashwa, Ashwagandha, Asgandh, Asgandha, Asgand, Asgandh, Asgand",
//   },
//   {
//     id: 2,
//     src: "/images/hero/chia.jpg",
//     alt: "Chia Seeds, Sabja Seeds, Basil Seeds, Tukmaria Seeds, Falooda Seeds, Sweet Basil Seeds, Selashi Seeds, Sabja Ginjalu, Sabja Vithai, Tukmaria, Tulsi Seeds, Tulsi Dana, Tukmalanga, Tukmalanga",
//   },
//   {
//     id: 3,
//     src: "/images/hero/giloy.jpg",
//     alt: "Guduchi, Giloy, Tinospora Cordifolia, Amrita, Gurcha, Heart-Leaved Moonseed, Guduchi Satva, Amrita Satva, Amritavalli, Chinnaruha",
//   },
//   {
//     id: 4,
//     src: "/images/hero/amla.jpg",
//     alt: "Amla, Indian Gooseberry, Phyllanthus Emblica, Emblic Myrobalan, Emblic, Amlaki, Amlakhi, Aavla, Aavlekaayi, Nellikkai, Nellikka, Usirikai, Amalaki, Dhatri, Dhatriphala, Amalika, Amalaki, Amalakam, Amalakamu",
//   },
//   {
//     id: 5,
//     src: "/images/hero/shatavri.jpg",
//     alt: "Shatavri, Asparagus, Asparagus Racemosus, Asparagus Racemosa, Asparagus Shatavari, Asparagus Satavar, Asparagus Sariva, Asparagus Sariva, Asparagus Satavari, Asparagus Satavari, Asparagus Satavar, Asparagus Satavar",
//   },
//   {
//     id: 6,
//     src: "/images/hero/moringa.jpg",
//     alt: "Moringa, Drumstick Tree, Horseradish Tree, Ben Oil Tree, Benzoil Tree, La Mu, Malunggay, Marango, Mlonge, Mulangay, Shevaga, Sajna, Sajna, Sajina, Shajna, Shajna, Shevaga, Shevaga",
//   },
//   {
//     id: 7,
//     src: "/images/hero/belgiri.jpg",
//     alt: "Belgiri, Bael, Bilva, Bilwa, Bel, Beli, Bela, Belapatra, Belaphal, Belaphala",
//   },
//   {
//     id: 8,
//     src: "/images/hero/neem.jpg",
//     alt: "Neem, Nimba, Arishta, Arishtha, Azadirachta Indica, Margosa, Nimbay, Nimbaka, Nimbi, Nimbya, Vembu, Vepa, Veppam",
//   },
//   {
//     id: 9,
//     src: "/images/hero/tulsi.jpg",
//     alt: "Tulsi, Holy Basil, Ocimum Tenuiflorum, Ocimum Sanctum, Ocimum Sanct",
//   },
//   {
//     id: 10,
//     src: "/images/hero/harad.jpg",
//     alt: "Harad, Haritaki, Terminalia Chebula",
//   },
//   {
//     id: 11,
//     src: "/images/hero/stevia.jpg",
//     alt: "Stevia, Sweet Leaf, Sugar Leaf, Sweet Herb of Paraguay, Sweet Herb, Honey Leaf, Candy Leaf, Sweet Chrysanthemum, Sweet Mary, Sugar Plant, Stevia Rebaudiana, Sweet Plant, Sweet Weed, Sweet Grass, Sweet Herb, Sweet Leaf of Paraguay, Sweet Leaf of Brazil, Sweet Leaf of Mexico, Sweet Leaf of South America, Sweet Leaf of North America, Sweet Leaf of Central America, Sweet Leaf of the Americas, Sweet Leaf of the World, Sweet Leaf of the Universe, Sweet Leaf of the Galaxy, Sweet Leaf of the Solar System, Sweet Leaf of the Milky Way",
//   },
//   {
//     id: 12,
//     src: "/images/hero/methi.jpg",
//     alt: "FenuGreek, Methi, Trigonella Foenum-Graecum, Greek Hay, Greek Hay Seed, Bird's Foot, Cow's Horn, Cow's Horn Clover"
//   },
//   {
//     id: 13,
//     src: "images/hero/dhania.jpg",
//     alt: "Dhania, Coriander, Coriandrum Sativum, Chinese Parsley"
//   },
//   {
//     id: 14,
//     src: "images/hero/baheda.jpg",
//     alt: "Baheda, Terminalia Bellerica, Bibhitaki, Vibhitaki, Vibheetaki, Vibheetaaki, Vibheeta"
//   },
//   {
//     id: 15,
//     src: "images/hero/ginger.jpg",
//     alt: "Dry Ginger, Sunth, Sonth, Zingiber Officinale, Shunthi, Adrak, Adraka, Adrakh, Adrakam, Adrakamu"
//   },
//   {
//     id: 16,
//     src: "images/hero/rose.jpg",
//     alt: "Rose Petals, Gulab Ke Phool, Rosa, Rosa Indica, Rosa Damascena, Rosa Centifolia, Rosa Gallica, Rosa Chinensis, Rosa Moschata, Rosa Rugosa, Rosa Canina, Rosa Laevigata, Rosa Roxburghii, Rosa Multiflora, Rosa Banksiae, Rosa Gigantea, Rosa Foetida, Rosa Sempervirens"
//   },
// ];

// const generateSquares = () => {
//   return shuffle(squareData).map((sq) => (
//     <motion.div
//       key={sq.id}
//       layout
//       transition={{ duration: 1.5, type: "spring" }}
//       className="w-full h-full rounded-sm shadow-md hover:scale-125"
//       style={{
//         backgroundImage: `url(${sq.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     ></motion.div>
//   ));
// };

// const ShuffleGrid = () => {
//   const timeoutRef = useRef<any>(null);
//   const [squares, setSquares] = useState(generateSquares());

//   const shuffleSquares = useCallback(() => {
//     setSquares(generateSquares());

//     timeoutRef.current = setTimeout(shuffleSquares, 3000);
//   }, []);

//   useEffect(() => {
//     shuffleSquares();
//     return () => clearTimeout(timeoutRef.current);
//   }, [shuffleSquares]);

//   return (
//     <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
//       {squares.map((sq) => sq)}
//     </div>
//   );
// };

export default ShuffleHero;