import { useState } from "react";
import { useRef } from "react";

const BentoTilt = ({ children }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 20;
        const tiltY = (relativeX - 0.5) * -20;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`; 
        setTransformStyle(newTransform)
    }

    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return (
        <div 
        ref={itemRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: transformStyle }}
        >
            {children}
        </div>
    )
  }

const CertificateCard = ({title, img, file}) => {
  return (
    <BentoTilt>
    <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 rounded-xl 
         transition-shadow duration-300 hover:shadow-[0_0_25px_5px_rgba(255,215,0,0.7)]">
    <div 
      className="group relative w-full h-60 bg-black border border-black-300 
      flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={() => window.open(file, "_blank")}
    >
      <img src={img} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 duration-300" />
      <span className="absolute inset-0 border border-black group-hover:animate-pulse mix-blend-screen"></span>
      <p className="absolute bottom-2 text-black text-sm font-generalsans bg-black/50 px-2 rounded">
        {title}
      </p>
    </div>
    </div>
    </BentoTilt>
  );
}

export default CertificateCard