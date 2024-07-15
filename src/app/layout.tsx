import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organic Herbal",
  description: "We provide a wide variety of high-quality herbs, spices, and their powders. Perfect for culinary and medicinal uses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="StKnFVMdxYtC2pDJPSr7oQjfKmXrAl1UXRLLkokFj8o" />
        <meta name="description" content="Discover a wide variety of high-quality herbs, spices, and their powders. Perfect for culinary and medicinal uses." />
        <meta name="keywords" content="herbs, spices, herb powders, spice powders, culinary herbs, medicinal herbs Lata Kasturi - Musk Dana	Abelmoschus Moschatus
                                        Apamarga	Achyranthes Aspera
                                        Latjeera	Achyranthes Aspera
                                        Atis - Atees - Aconite	Aconitum Heterophyllum
                                        Vacha - Bach	Acorus Calamus
                                        Adusa - Vasa	Adhatoda Vasika
                                        Bel	Aegle Marmelos
                                        Jawasa	Alhagi Maurorum
                                        Onion	Allium cepa
                                        Garlic	Allium Sativum
                                        Aloevera	Aloe Barbadensis
                                        Kulanjan	Alpinia Galanga
                                        Akarkara	Anacyclus Pyrethrum
                                        Kalmegh	Andrographis Paniculata
                                        Vettiver - Khus Grass	Andropogon Muricatus
                                        Chamomile - Babuna	Anthemis Nobillis
                                        Ajmoda	Apium Graveolens
                                        Vidhara - Patha	Argyreia Nervosa
                                        Dashmool	Ayurvedic Preparation
                                        Neem	Azardirachta lndica
                                        Brahmi Jal - Nir	Bacopa Monnieri
                                        Hingot - Hingan - Angavriksha	Balanites Aegyptiaca
                                        Bansalochan	Bambusa Arundinacea
                                        Kachnar	Bauhinia Variegata
                                        Daru Haldi	Berberis Aristata
                                        Pashanbhed - Pakhanved	Bergenia Ligulata
                                        Chukundar - Beet Root	Beta Vulgaris
                                        Annato Seeds	Bixa Orellana
                                        Punernawa	Boerhaavia Diffusa
                                        Chironji- Charoli	Buchanania Lanzan
                                        Kamarkas - Palash	Butea Monosperma
                                        Pa lash - Tesu	Butea Monosperma
                                        Aak - Arka - Akda	Calotropis Gigantea
                                        Waykumbhi	Careya Arbobrea
                                        Papaya - Papita	Carica Papaya
                                        Kusum - Safflower	Carthamus Tinctorius
                                        Amaltas	Cassia Fistula
                                        Fuwad Seeds	Cassia Tora
                                        Deodar - Devdaru	Cedrus Deodara
                                        Malkangani	Celastrus Paniculatus
                                        Brahmi - Mandukparni	Centella Asiatica
                                        Kali Jeeri	Centratherum Anthelminticum
                                        Kasani	Cichorium lntybus
                                        Kasni - Chicory	Cichorium lntybus
                                        Hathjod	Cissus Quadrangularis
                                        lndrayan	Citrullus Colocynthis
                                        Mosambi Chilka	Citrus Limetta
                                        Lemon Peel	Citrus Limon
                                        Arni - Agnimantha	Clerodendrum Phlomidis
                                        Bharangi	Clerodendrum Serratum
                                        Blue Pea Flower - Aprajita	Clitoria Ternatea
                                        Jal Jamni	Cocculus Hirsutus
                                        Coleus - Pathrachur	Coleus Forskohlii
                                        Guggal	Commiphora Mukul
                                        Lisoda	Cordia Myxa
                                        Anantmool Black - Kali Dudhi	Cryptolepis Buchananii
                                        Pumpkin - Kaddu	Cucurbita Pepo
                                        Kali Musli	Curculigo Orchioides
                                        Amba Haldi	Curcuma Amada
                                        Nar Kachur	Curcuma Caesia
                                        Kachur	Curcuma Zedoaria
                                        Guar	Cyamopsis Tetragonoloba
                                        Lemongrass	Cymbopogon
                                        Nagarmotha	Cyperus Scariosus
                                        Dhatura	Datura Stramonium
                                        Barahikand - Varahikand	Dioscorea Bulbifera
                                        Bhringraj	Eclipta Prostrata
                                        Vaividang - Baibirang	Embelia Ribes
                                        Mamejoa	Enicostemma Littorale
                                        Eucalyptus Leaves	Eucalyptus Globulus
                                        Bargad - Banyan	Ficus Benghalensis
                                        Gular	Ficus Racemosa
                                        Multani Mitti - Fullers Earth	Fuller's Earth Clay
                                        Garcinia - Kokum	Garcinia lndica
                                        Kalihari	Gloriosa Superba
                                        Mulethi - Jethimadh - Yasthimadhu	Glycyrrhiza Glabra
                                        Gambhari	Gmelina Arborea
                                        Kapas - Cotton	Gossypium Herbaceum
                                        Gangadi - Gangeran - Gengchi	Grewia Tenax
                                        Gudmar	Gymnema Sylvestre
                                        Pink Himalayan Salt - Saindha Namak	Halite
                                        Kapur Kachri	Hedychium Spicatum
                                        Marod fali	Helicteres lsora
                                        Anantmool Red - Sarsaparilla	Hemidesmus lndicus
                                        Kuda	Holarrhena Antidysenterica
                                        Khursani Ajwain	Hyoscyamus Niger
                                        Henna	Lawsonia lnermis
                                        Jivanti	Leptadenia Reticulata
                                        Kabit	Limonia Acidissima
                                        Alsi - Flax Seed	Linum Usitatissimum
                                        Indigo	lndigofera Tinctoria
                                        Kala Dana	lpomoea Hederacea
                                        Kulthi - Horse Gram	Macrotyloma Uniflorum
                                        Mahua	Madhuca Longifolia
                                        Aam - Mango	Mangifera lndica
                                        Noni	Marinda Citrifolia
                                        Kakanasa - Bicchu Fal	Martynia Annua
                                        Mulberry	Marus
                                        Gudhal Fool	Matricaria Chamomilla
                                        Bakayan-Mahaneem	Melia Azedarach
                                        Mint - Pudhina	Mentha Arvensis
                                        Peppermint Leaves	Mentha Piperita
                                        Nageshwar - Nagkesar	Mesua Ferrea
                                        Lajwanti - Lajjalu	Mimosa pudica
                                        Karela	Momordica Charantia
                                        Moritnga - Shajana - Sahijan	Moringa Oleifera
                                        Kaunch	Mucuna Pruriens
                                        Curry - Kadi Leaves	Murraya Koenigu
                                        Jatamansi	Nardostachys Jatamansi
                                        Kamal - Lotus	Nelumbo Nucifera
                                        Kuchila - Poison Nut	Nux Vomica
                                        Parijat - Harsingar	Nyctanthes arbor-tristis
                                        Nilophar	Nymphaea alba
                                        Tulsi - Rama, Shyama, Vana	Ocimum Tenuiflorum
                                        Nishoth - Nishotar	Operculina Turpethum
                                        Poppy - Khas Khas - Pasta	Papaver Somniferum
                                        Chadila	Parmelia Perlata
                                        Dagarfool	Parmotrema perlatum
                                        Gokhru Bada	Pedalium Murex
                                        Mudgaparni	Phaseolus Trilobus
                                        Amla - Awala - Amlaki	Phyllanthus Emblica
                                        Bhui Awla	Phyllanthus Niruri
                                        Kukti	Picrorhiza Kurroa
                                        Kankol	Piper Cubeba
                                        Pipal - Pippali	Piper Longum
                                        Chavya	Piper Retrofractum
                                        lsabgol	Plantago lspagula
                                        Morpankhi - Vidya - Thuja	Platycladus Orientalis
                                        Chitrak Mool	Plumbago lndica
                                        Karanj	Pongamia Pinnata
                                        Apricot - Khubani	Prunus Armeniaca
                                        Amrud - Guava	Psidium Guajava
                                        Bawachi	Psoralea Corylifolia
                                        Vijaysar	Pterocarpus Marsupium
                                        Vidarikand	Pueraria Tuberosa
                                        Anar - Pomegranate	Punica Granatum
                                        Puwad - Fuwad	Puwad - Fuwad
                                        Quinoa	Quinoa
                                        Rajgira - Ramdana	Rajgira - Ramdana
                                        Raktcha ndan	Raktcha ndan
                                        Ramtil - Niger Seed	Ramtil - Niger Seed
                                        Rasna	Rasna
                                        Ratanjot - Jatropha	Ratanjot - Jatropha
                                        Rati - Gunja - Chirmiti	Rati - Gunja - Chirmiti
                                        Reetha - Soapnut	Reetha - Soapnut
                                        Castor - Arandi - Erand	Ricinus Communis
                                        Rohitak	Rohitak
                                        Rose Pink	Rose Pink
                                        Rose Red	Rose Red
                                        Rosemary	Rosemary
                                        Manjistha	Rubia Cordifolia
                                        Sadabhar - Baramasi - Vinca	Sadabhar - Baramasi - Vinca
                                        Safed Musli	Safed Musli
                                        Sagargota - Gataran - Karanjwa	Sagargota - Gataran - Karanjwa
                                        Salai Guggal - Kundru	Salai Guggal - Kundru
                                        Salparnm	Salparnm
                                        Chia Seeds	Salvia Hispanica
                                        Santra - Orange	Santra - Orange
                                        Saptaparni	Saptaparni
                                        Saptrangi	Saptrangi
                                        Ashoka	Saraca Asoca
                                        Sarfonka	Sarfonka
                                        Sarpaga ndha	Sarpaga ndha
                                        Satyanashi - Yellow Dhatura	Satyanashi - Yellow Dhatura
                                        Schezuan Pepper - Tamar - Timur	Schezuan Pepper - Tamar - Timur
                                        Seasame - Tilli	Seasame - Tilli
                                        Semal - Shalmali - Mochras	Semal - Shalmali - Mochras
                                        Bhilawa	Semecarpus Anacardium
                                        Kher	Senegalia Catechu
                                        Senna - Sanai	Senna - Sanai
                                        Shahtara - Pit Papda	Shahtara - Pit Papda
                                        Shankhpushpi	Shankhpushpi
                                        Shatawari White & Yellow	Shatawari White & Yellow
                                        Shikakam	Shikakam
                                        Shisham	Shisham
                                        Shivlingi	Shivlingi
                                        Bala	Sida Cordifolia
                                        Milk Thistle	Silybum Marianum
                                        Singhada	Singhada
                                        Siras	Siras
                                        Sitaphal - Custard Apple	Sitaphal - Custard Apple
                                        Brihati - Kateli	Solanum lndicum
                                        Makoy	Solanum Nigrum
                                        Kantkari - Kateli	Solanum Surattense
                                        Gorakhmundi	Sphaeranthus lndicus
                                        Padal - Padar	Stereosprmum Sauvealens
                                        Stevia	Stevia
                                        Nirmali - Clearing Nut	Strychnos Potatorum
                                        Lodhra	Symplocos Racemosa
                                        Jamun	Syzygium Cumini
                                        Tagar - Sugandhbala	Tagar - Sugandhbala
                                        Marigold - Genda	Tagetes Erecta
                                        Talimkhana - Kokilaksha	Talimkhana - Kokilaksha
                                        Talispatra	Talispatra
                                        lmli	Tamarindus lndica
                                        Dandelion - Dudal	Taraxacum Officinale
                                        Mashparni	Teramnus Labialis
                                        Arjuna	Terminalia Arjuna
                                        Baheda	Terminalia Belerica
                                        Harad - Himej - Haritaki - Myrobalan	Terminalia Chebula
                                        Thyme	Thyme
                                        Giloy	Tinospora Cordifolia
                                        Gokhru Chota	Tribulus Terrestris
                                        Prishnaparni	Ura ria pi eta
                                        Nettle Stinging - Bichu	Urtica Dioica
                                        Babul	Vachellia Nilotica
                                        Nirgundi - Samalu	Vitex Negundo
                                        Grape - Draksh - Kishmish	Vitis Cinifera
                                        Paneer Fool - Dodi	Withania Coagulans
                                        Ashwagandha	Withania Somnifera
                                        Kuth Meetha - Wild Asgandh	Withania somnifera
                                        Dhawai Fool	Woodfordia Floribunda
                                        Kutaj	Wrightia Antidysenterica
                                        lndrajaw	Wrightia Tinctoria
                                        Ginger - Sounth	Zingiber Officinale
                                        Unnab - Lal Bor	Zizyphus Vulgaris" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
