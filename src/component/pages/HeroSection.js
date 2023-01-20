

function HeroSection() {
    lightBg, topLine
    return (
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className="container">
                <div className="row home__her-row" style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                    <div className="col">
<div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}