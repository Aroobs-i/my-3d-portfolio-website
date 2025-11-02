import emailjs  from "@emailjs/browser";
import { Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useRef } from "react"
import CanvasLoader from "../components/CanvasLoader";
import Telephone from "../components/Telephone";

const Contact = () => {
    const formRef = useRef();
    const [isTyping, setIsTyping] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: { name,value } }) => {  
        setForm({...form, [name]: value});

        setIsTyping(true);
        clearTimeout(window.typingTimer);
        window.typingTimer = setTimeout(() => setIsTyping(false), 400);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
           await emailjs.send(
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
            );
            setLoading(false);
            alert('Your message has been sent :)');
            setForm({
                name: '',
                email: '',
                message: ''
            });

            setIsSubmitted(true);
           setTimeout(() => setIsSubmitted(false), 1200);

        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong :(')
        }
    }

  return (
    <section className="c-space my-20" id="contact">
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
            <directionalLight position={[5, 10, 5]} intensity={3}/> 
            <Center> 
            <Suspense fallback={<CanvasLoader />}>
                  <group scale={180} position={[0, -2, 0]} rotation={[0, -0.1, 0]}>
                    <Telephone isTyping={isTyping} isSubmitted={isSubmitted} />
                  </group>
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