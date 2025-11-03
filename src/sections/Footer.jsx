
const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
            <div className="social-icon">
                <a href="https://github.com/Aroobs-i" target="_blank">
                 <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 mx-3" />
                </a>
            </div>
            <div className="social-icon">
                <a href="https://www.instagram.com/aroobsfreak/" target="_blank" >
                 <img src="/assets/instagram.svg" alt="insta" className="w-1/2 h-1/2 mx-3" />
                </a>
            </div>
            <div className="social-icon">
                <a href="www.linkedin.com/in/arooba-iftikhar-a7b794306" target="_blank">
                 <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2 mx-3" />
                </a>
            </div>
        </div>

        <p className="text-white-500">&copy; 2025 Arooba. All rights reserved.</p>
    </section>
  )
}

export default Footer