import "./App.css";
import { Gallery } from "./Gallery";
import { HeroImage } from "./HeroImage";
import Navbar from "./Navbar";

function App() {
  const imagesMinecraft = [
    "S_Nagrodzeni-za-Minecraft.6.jpg",
    "S_Nagrodzeni-za-Minecraft.5.jpg",
    "S_Nagrodzeni-za-Minecraft.4.jpg",
    "S_Nagrodzeni-za-Minecraft.3.jpg",
    "S_Nagrodzeni-za-Minecraft.2.jpg",
    "S_Nagrodzeni-za-Minecraft.1.jpg",
    "S_Nagrodzeni-za-Minecraft.9.jpg",
    "S_Nagrodzeni-za-Minecraft.7.jpg",
    "S_Nagrodzeni-za-Minecraft.8.jpg",
  ];
  const imagesTrip = [
    "20191127_123309-768x363.jpg",
    "20191127_123239-768x363.jpg",
    "20191127_123204-768x363.jpg",
  ];
  const imageTripSecond = ["received_657971532075575-225x300.jpeg"];
  const buildMinecraftURL = (imagePath) =>
    `https://info.kanal6.pl/wp-content/uploads/2022/03/${imagePath}`;
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
