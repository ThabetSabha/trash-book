import Image from 'next/image';

const Features = ({ theme }) => {
    return (
        <div className={`features-container ${theme}`}>

            <section className="features" id="features">

                <h2>Features</h2>

                <div className="cards">

                    <div className="card">
                        <Image src="/images/feature1.jpg" alt="feature1" width={1200} height={800} />
                        <h3>Powerful</h3>
                        <p>Play all your trash games at a glorious 10fps.</p>
                        <p>Because it's Trash-can not Trash-can't.</p>

                    </div>


                    <div className="card">
                        <Image src="/images/feature2.jpg" alt="feature2" width={1200} height={800} />
                        <h3>Killer Connectivity</h3>
                        <p>With internet speeds reaching up to 500kbps, you can now stream all the trash content you like.</p>
                    </div>


                    <div className="card">
                        <Image src="/images/feature3.jpg" alt="feature3" width={1200} height={800} />
                        <h3>Modern Design</h3>
                        <p>
                            Like Eminem man once said:
                        </p>
                        <p>Same sh*t different toilet.</p>
                    </div>


                </div>

            </section>

            <div className="wave">
                <Image src="/images/wave.png" alt="wave" height={409} width={1440} />
            </div>

        </div>
    )
}

export default Features;