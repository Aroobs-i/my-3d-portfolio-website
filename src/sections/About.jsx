
const About = () => {
  return (
    <section className="c-space my-20">
        <div 
        className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full"
        >
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img 
                    src="/assets/grid1.png" 
                    alt="grid"
                    className="w-full sm:h-[276px] h-fit object-contain" 
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
                    <img src="/assets/grid2_2.jpg" alt="grid-2"
                       className="w-full sm:w-[276px] h-fit object-contain" 
                    />
                    <div>
                        <p className="grid-headtext">
                            Tech Stack
                        </p>
                        <p className="grid-subtext">
                            I specialize in JS/TS with a focus on React and Next.js ecosystems.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About