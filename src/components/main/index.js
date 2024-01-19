import "./main.css"

function Main()
{

    return(
        <>
            <section className="bio-section">
                <div>
                    <h1>Front-end focused full-stack developer with a design background, passionate about crafting creative and useful digital experiences.</h1>
                </div>
                <div></div>
            </section>
            <section className="contact-section">
                <div className="contact-detail-container">
                    <p className="bold">Contact</p>
                    <p><a className="link" href="mailto:benpeake.dev@gmail.com" target="_blank">benpeake.dev@gmail.com</a></p>
                </div>
                <div className="contact-detail-container">
                    <p className="bold">Github</p>
                    <p><a className="link" href="https://github.com/Benpeake" target="_blank" rel="noopener">@benpeake</a></p>
                </div>
                <div className="contact-detail-container">
                    <p className="bold">Location</p>
                    <p>Bath, UK</p>
                </div>
            </section>
        </>
    )

}

export default Main