import "../css/House.css";
import housePic from "../images/farmhouse.jpeg";

const House = (props) => {
    return (
        <section className="house">
            <h1>{props.name}</h1>
            <img src={housePic} alt="house" />
            <p>Num Bedrooms: {props.num_bedrooms}</p>
        </section>
    );
};

export default House;