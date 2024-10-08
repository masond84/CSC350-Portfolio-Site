import React from 'react';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import DownloadResume from '../components/DownloadResume';
import About1 from '../assets/images/AboutElon1.webp'; 
import About2 from '../assets/images/AboutElon2.webp'; 
import Header from '../components/AboutMeHeader';


const AboutPage = () => {
    return (
        <div className="relative w-full h-full min-h-screen bg-[#0A0D17] mx-auto">
            {/* Header */}
            <Header />

            {/* New Section Added */}
            <section className="relative bg-gray-900 flex justify-center pt-10">
                <div className="bg-gray-200 h-fit w-11/12 justify-normal items-center rounded-xl">
                    <div style={{ width: "300px", height: "33px", left: "50px", top: "50px", position: "relative", color: "#5D5A88", fontSize: "50px", fontFamily: "verdana", fontWeight: 900, lineHeight: "40px", wordWrap: "break-word" }}>
                    About me
                    </div>
                    <div style={{ width: "1000px", height: "350px", top: "120px", left: "50px", position: "relative", background: "#D9D9D9" }}>
                        <div style={{ width: "800px", height: "376px", top: "20px", left: "20px", position: "relative" }}>
                            <span style={{ color: "#5D5A88", fontSize: "20px", fontFamily: "arial", fontWeight: 400, lineHeight: "20px", wordWrap: "break-word" }}>
                            I’m Elon Musk, an entrepreneur with a passion for blending innovation and technology. I graduated from the University of Pennsylvania with degrees in Economics and Physics, and since then, I’ve been fortunate to work on a wide range of projects that challenge me to think outside the box. Whether it’s building electric cars with Tesla, advancing space exploration with SpaceX, or pushing the limits of renewable energy with SolarCity, I love finding solutions that are both ambitious and transformative. <br /><br />
                            My journey into entrepreneurship started early. At 12, I sold my first video game, and after graduating, I co-founded Zip2. That venture ignited my passion for creating groundbreaking companies, which has led to PayPal, Tesla, SpaceX, and more. Each step has reinforced my belief in pushing boundaries to create a future that inspires, and I haven’t looked back since.
                            </span>
                        </div>
                    </div>
                    <img src={About1} alt="About1" style={{ width: "388px", height: "430px", top: "-270px", left: "900px", position: "relative", borderRadius: "100px" }}/>
                    <img src={About2} alt="About2" style={{ width: "388px", height: "430px", top: "-270px", left: "50px", position: "relative", borderRadius: "100px", zIndex: 10 }}/>
                    <div style={{ width: "870px", height: "350px", top: "-650px", left: "400px", position: "relative", background: "#D9D9D9", justifyContent: "center", verticalAlign: "middle" }}>
                    <div style={{ width: "800px", height: "350px", top: "20px", left: "60px", position: "relative", justifyContent: "center", verticalAlign: "middle" }}>
                        <span style={{ color: "#5D5A88", fontSize: "20px", fontFamily: "arial", fontWeight: 400, lineHeight: "20px", wordWrap: "break-word", justifyContent: "center", verticalAlign: "middle" }}>
                            When I’m not immersed in my businesses, I like to unwind with a mix of activities that fuel my creativity and curiosity. I enjoy spending time with my five sons, often playing video games or watching science fiction movies. I’ve always had a fascination with the future, and exploring new technologies or innovations that could one day shape our world is something I love. In my downtime, I also enjoy reading books on history and science, and occasionally I engage in some friendly banter on Twitter. These moments help me recharge and keep me connected to the bigger picture of what’s possible.
                      </span>
                    </div>
                  </div>
                </div>
            </section>

            <Skills />
            <DownloadResume />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutPage;