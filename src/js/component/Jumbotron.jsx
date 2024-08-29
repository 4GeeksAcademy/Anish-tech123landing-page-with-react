import React from "react";

const Jumbotron = () => {
    return (
        <div className="bg-light rounded my-4 p-4" >
            <h1 className = "display-2"> <b> A Warm Welcome !</b></h1>
            <div className= "my-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta elit et nisl condimentum, vel luctus arcu scelerisque. Aenean dictum sapien sit amet varius tincidunt. Proin in lectus eget ex.</p>
            <p className = "lead">
                <a className = "btn-primary btn btn-lg" href = "#" role = "button" >Call to Action!</a>
            </p>
            </div>
        </div>
    )
}

export default Jumbotron;