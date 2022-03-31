import "./App.css";
import { Gallery } from "./Gallery";
import { HeroImage } from "./HeroImage";
import Navbar from "./Navbar";

function App() {
  const imagesMinecraft = [
    "b5/91/622b88b69a748_o_large.jpg",
    "f5/c1/622b886a1c253_o_large.jpg",
    "2b/73/622b888172294_o_large.jpg",
    "06/4d/622b8883ed792_o_large.jpg",
    "ff/c9/622b889381748_o_large.jpg",
    "33/0b/622b889bec871_o_large.jpg",
    "8d/11/622b889ea038d_o_large.jpg",
    "80/82/622b88a1a5c05_o_large.jpg",
    "cb/d0/622b88a79cb21_o_large.jpg",
    "fe/60/622b88b09b35a_o_large.jpg",
    "59/77/622b88b38cd19_o_large.jpg",
  ];
  const imagesTrip = [
    "20191127_123309-768x363.jpg",
    "20191127_123239-768x363.jpg",
    "20191127_123204-768x363.jpg",
  ];
  const imageTripSecond = ["received_657971532075575-225x300.jpeg"];
  const buildMinecraftURL = (imagePath) =>
    `https://d-art.ppstatic.pl/kadry/k/r/1/${imagePath}`;
  const buildTripURL = (imagePath) =>
    `https://new1.zsp1slupsk.pl/wp-content/uploads/2022/03/${imagePath}`;
  return (
    <div className="App">
      <Navbar />
      <HeroImage
        source="https://d-art.ppstatic.pl/kadry/k/r/1/b5/91/622b88b69a748_o_large.jpg"
        header="Nagrodzeni za Minecraft'a"
      />
      <Gallery
        buildURL={buildMinecraftURL}
        images={imagesMinecraft}
        widthImage="600"
        heightImage="600"
      />
      <HeroImage
        source="https://new1.zsp1slupsk.pl/wp-content/uploads/2022/03/20191127_122840-768x363.jpg"
        header="Wycieczka do Gdańska"
      />
      <Gallery buildURL={buildTripURL} images={imagesTrip} />
      <HeroImage
        source="https://new1.zsp1slupsk.pl/wp-content/uploads/2022/03/received_580464940305004-300x225.jpeg"
        header="Śladami latarni morskich"
      />
      <Gallery buildURL={buildTripURL} images={imageTripSecond} />
    </div>
  );
}

export default App;
