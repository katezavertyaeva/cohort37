import "./styles.css";

function TextArea({placeholder, name, label}) {
    return (
        <div className="text-area-container">
            <label>{label}</label>
            <textarea placeholder={placeholder} name={name}></textarea>
        </div>
    )
}

export default TextArea;