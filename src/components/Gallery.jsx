import HornedBeast from "./HornedBeast";
import data from "../assets/beast-data.json";

export default function Gallery() {
  return (
    <div>
      {data.map((beast) => {
        return (
          <div key={beast.title}>
            <HornedBeast
              title={beast.title}
              imageUrl={beast.imageUrl}
              description={beast.description}
            />
          </div>
        );
      })}
    </div>
  );
}
