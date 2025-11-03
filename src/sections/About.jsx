import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('iftikhar8995@gmail.com');

        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }

  return (
    <section className="c-space my-20" id="about">
        <div 
        className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"
        >
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img 
                    src="/assets/grid11.png" 
                    alt="grid"
                    className="w-full sm:h-[276px] h-fit object-contain rounded-3xl" 
                    />
                    <div>
                        <p className="grid-headtext">Hi, I'm Arooba</p>
                        <p className="grid-subtext">
                            Passionate about web development and currently expanding my skills in frontend and backend technologies, with a growing interest in 3D and animated interfaces.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid27.png" alt="grid-2"
                       className="w-full sm:w-[276px] h-fit object-contain rounded-3xl mx-6 xs:mx-0" 
                    />
                    <div>
                        <p className="grid-headtext mt-9">
                            Tech Stack
                        </p>
                        <p className="grid-subtext">
                            I specialize in Javascript/Typescript with a focus on React and Next.js ecosystems.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe
                         height={326}
                         width={326}
                         backgroundColor="rgba(0,0,0,0)"
                         backgroundImageOpacity={0.5}
                         showAtmosphere
                         showGraticules
                         globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                         bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                         labelsData={[{ lat: 30.3753, lng: 69.3451, text: 'Pakistan', color: 'white', size: 14 }]}
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">
                            I am very flexible with time zone communications & locations.
                        </p>
                        <p className="grid-subtext">
                            I'm based in Pakistan, and open to remote work worldwide.
                        </p>
                        <a href="#contact" className="w-fit">
                        <Button
                          name="Contact Me"
                          isBeam 
                          containerClass="w-full mt-10"
                        />
                        </a>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext mt-9">
                            My Passion for Coding
                        </p>
                        <p className="grid-subtext">
                            I love solving problems and building things through code. Coding isn't just my profession - it is my passion.
                        </p>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img 
                    src="/assets/grid4.png" 
                    alt="grid-4" 
                    className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" 
                    />
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                iftikhar8995@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
