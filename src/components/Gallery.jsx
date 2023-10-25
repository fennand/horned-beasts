import HornedBeast from "./HornedBeast";
import data from "../assets/beast-data";

export default function Gallery({ setSelectedBeast, setIsModalShowing }) {
  return (
    <div className="Gallery">
      {data.map((beast, index) => {
        return (
          <div key={beast.title}>
            <HornedBeast
              index={index}
              title={beast.title}
              imageUrl={beast.imageUrl}
              description={beast.description}
              setSelectedBeast={setSelectedBeast}
              setIsModalShowing={setIsModalShowing}
            />
          </div>
        );
      })}
    </div>
  );
}
