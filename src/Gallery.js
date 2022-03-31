import "./App.css";
import Imgix from "react-imgix";

export const Gallery = (props) => (
  <div className="gallery">
    {props.images.map((image) => (
      <Imgix
        className="gallery__item"
        sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
        src={props.buildURL(image)}
        key={image}
        imgixParams={{
          fit: "crop",
          fm: "jpg",
        }}
        width={props.width}
        height={props.height}
      />
    ))}
  </div>
);
