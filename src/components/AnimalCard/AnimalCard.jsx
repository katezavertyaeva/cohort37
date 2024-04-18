import "./styles.css";
function AnimalCard({ animalData, animalName, children }) {
  return (
    <div className="animal-card-wrapper">
      <h2>{animalName}</h2>
      <p>{animalData.species}</p>
      <img src={animalData.image} />
      {children}
    </div>
  );
}

export default AnimalCard;
