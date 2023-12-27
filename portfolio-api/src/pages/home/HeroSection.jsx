export default function HeroSection () {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Hey, I am Purnima
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title-color">
                            Game 
                        </span>{""}
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                    I am a level and game designer, artist, creative collaborator, writer and storyteller with 6 years experience making games.
                        <br /> 
                        <br />
                        If you are creative and passoniate about gaming career and want to contact?
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    )
}