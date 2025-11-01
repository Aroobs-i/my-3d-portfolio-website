
const CertificateCard = ({title, img, file}) => {
  return (
    <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
    <div 
      className="group relative w-full h-60 bg-black border border-black-300 
      flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={() => window.open(file, "_blank")}
    >
      <img src={img} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 duration-300" />
      <span className="absolute inset-0 border border-black-200 group-hover:animate-pulse mix-blend-screen"></span>
      <p className="absolute bottom-2 text-black-300 text-sm font-mono bg-black/50 px-2 rounded">
        {title}
      </p>
    </div>
    </div>
  );
}

export default CertificateCard