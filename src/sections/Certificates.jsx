import CertificateCard from "../components/CertificateCard";
import { certificates } from "../constants";

const Certificates = () => {
  return (
    <section className="c-space my-20" id="certificates">
    <p className="head-text">My Certifications</p>

    <div className="grid md:grid-cols-3 gap-6 p-4 mt-12">
      {certificates.map((c, i) => (
        <CertificateCard key={i} {...c} />
      ))}
    </div>
    </section>
  );
}

export default Certificates