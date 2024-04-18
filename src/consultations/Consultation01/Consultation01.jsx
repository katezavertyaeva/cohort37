import "./styles.css";
import TextArea from "../../components/TextArea/TextArea";

function Consultation_01() {
    return(
        <div className="textarea-wrapper">
            <TextArea label="Name" placeholder="message" name="first_name"/>
            <TextArea label="Surname" placeholder="comment" name="last_name"/>
        </div>
    )
}

export default Consultation_01;