import HornedBeast from "./HornedBeast";

export default function Gallery() {
  return (
    <div>
      <HornedBeast
        title="Horny Beast 1"
        imageUrl="https://static.wikia.nocookie.net/enfuturama/images/2/25/A_Bicyclops_Built_for_Two_%28Main_Episode%29_-_410.png"
        description="Some alien beast with a horn."
      />
      <HornedBeast
        title="Horny Beast 2"
        imageUrl="https://i.natgeofe.com/n/0a158445-5d94-465f-82e7-e1653784f7d9/35950.jpg"
        description="Scottish horned beast."
      />
    </div>
  );
}
