import HornedBeast from "./HornedBeast";

export default function Gallery({ data, handleShowModal }) {
  return (
    <div className="Gallery">
      {data.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.imageUrl}
            description={beast.description}
            horns={beast.horns}
            handleShowModal={handleShowModal}
          />
        );
      })}
    </div>
  );
}
