import profilePic from "./assets/logo.png"

function Card() {
    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="Profile"></img>
            <h1 className="card-title">Daniel</h1>
            <p className="card-text">I like to play Pokemon Unite</p>
        </div>
    );
}

export default Card