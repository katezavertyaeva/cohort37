import "./styles.css";
import Button from "../../components/Button/Button";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { lionData, zebraData, normalizeName } from "./data";
import userAvatar from "../../assets/avatar.jpg";

// родительский компонет для компонентов <Button />, которые являются дочерними компонентами
function Lesson03() {
  const isPrimary = false;

  return (
    <div className="buttons-container">
      <AnimalCard
        animalData={lionData}
        animalName={normalizeName(lionData.name)}
      >
        <p>Main Character</p>
        <h4>Title</h4>
      </AnimalCard>
      <AnimalCard
        animalData={zebraData}
        animalName={normalizeName(zebraData.name)}
      >
        <p>Main Character</p>
      </AnimalCard>
      <img src={userAvatar} />
      {/* <Button isPrimaryButton />
      <Button buttonName="Send data" isPrimaryButton={isPrimary} /> */}
    </div>
  );
}

export default Lesson03;
