import emailjs  from "@emailjs/browser";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useRef } from "react"
import CanvasLoader from "../components/CanvasLoader";
import gsap from "gsap";
import PixelHeart from "../components/PixelHeart";
import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import Developer from "../components/Developer.jsx";


const Contact = () => {
    const formRef = useRef();
    const typingLock = useRef(false);

    const { alert, showAlert, hideAlert } = useAlert();
    const [typingField, setTypingField] = useState("");

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isTyping, setIsTyping] = useState(false);

    const [showHeart, setShowHeart] = useState(false);
    const heartRef = useRef();

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: { name,value } }) => {  
        setForm({...form, [name]: value});

        setTypingField(name);

        if (!typingLock.current) {
           typingLock.current = true;
           setIsTyping(true);

           setTimeout(() => {
             setIsTyping(false);
             typingLock.current = false;
    }, 1200); // wait for animation to finish
  }       
}

    const animateHeart = () => {
      if (!heartRef.current) return;
    
      const tl = gsap.timeline({
        onComplete: () => setShowHeart(false)
      });
    
      tl.fromTo(
        heartRef.current.position,
        { y: -4 }, // start below
        { y: 6, duration: 2, ease: "power2.out" } // fly up
      );
    
      tl.fromTo(
        heartRef.current.rotation,
        { x: 0, y: 0, z: 0 },
        { x: Math.PI * 2, y: Math.PI * 4, duration: 2, ease: "power2.inOut" },
        0
      );
    
      tl.fromTo(
        heartRef.current.scale,
        { x: 1, y: 1, z: 1 },
        { x: 0, y: 0, z: 0, duration: 1.5, ease: "power1.in" },
        0.5
      );
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

            emailjs.send(
                'service_bm3qa5o',
                'template_6nz442m',
                {
                    from_name: form.name,
                    to_name: 'Arooba',
                    from_email: form.email,
                    to_email: 'iftikhar8995@gmail.com',
                    message: form.message
                },
                'MsbnhSOJwdPb02hq_',
            )
            .then(     
              () => {
                setLoading(false);
                setIsSubmitted(true);
                setTypingField("");
                setIsTyping(false);
                showAlert({
                  show: true,
                  text: 'Thank you for your message 😃',
                  type: 'success',
                });

                 setShowHeart(true); // show heart when submitted
                 animateHeart();

                 setTimeout(() => {
                 hideAlert(false);
                 setIsSubmitted(false);
                 setForm({
                   name: '',
                   email: '',
                   message: ''
                 });
                  },3000);
               },
              (error) => {
                 setLoading(false);
                 console.log(error);

                 showAlert({
                   show: true,
                   text: "I didn't receive your message 😢",
                   type: 'danger',
                 });
        },
      );
    }

    const getAnim = () => {
      if (isSubmitted) return "victory";
    
      if (isTyping && typingField === "name") return "clapping";
    
      if (isTyping && (typingField === "email" || typingField === "message"))
        return "salute";
    
      return "idle";
    };
    
    const animationName = getAnim();

  return (
    <section className="c-space my-20" id="contact">
            {alert.show && <Alert {...alert} />}

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
            <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
            <h3 className="head-text mt-8">Let's talk</h3>
            <p className="text-lg text-white-600 mt-3">I'm currently looking for internship opportunities where I can apply my skills and continue learning.
            Feel free to reach out. I'd love to connect!
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                <label className="space-y-3">
                    <span className="field-label">Full Name</span>
                    <input 
                    type="text" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required 
                    className="field-input"
                    placeholder="John Doe"
                    />
                </label>
                <label className="space-y-3">
                    <span className="field-label">Email</span>
                    <input 
                    type="email" 
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required 
                    className="field-input"
                    placeholder="johndoe@example.com"
                    />
                </label>
                <label className="space-y-3">
                    <span className="field-label">Your Message</span>
                    <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5} 
                    className="field-input"
                    placeholder="Hi, I wanna give you a job....."
                    />
                </label>
                <button className="field-btn" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                    <img src="/assets/arrow-up.png" alt="arrow" className="field-btn_arrow" />
                </button>
            </form>
            </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
            <ambientLight intensity={5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1}/> 
            <Center> 
            <Suspense fallback={<CanvasLoader />}>
                 <group>
                  <Developer scale={3.1} position-y={-3} rotation={[0.64, 0, 0]}    //-3.3
                   animationName={animationName}
                  />
                 </group>
                 
                  {showHeart && (
                    <group ref={heartRef} scale={1.2} position={[0, -5, 0]}>
                      <PixelHeart />
                    </group>
                  )}
            </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom = {false} /> 
            </Canvas>
        </div>
      </div>
    </section>
  )
}

export default Contact