import "./Civilian.css"; // We'll style it separately
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Navbar";
import "./Civilian.css";

import pic1 from "../assets/p1.jpg";
import pic2 from "../assets/p2.jpg";
import pic3 from "../assets/p3.jpg";
import pic4 from "../assets/p4.jpg";
import pic5 from "../assets/p5.jpg";
import pic6 from "../assets/p6.jpg";
import pic7 from "../assets/p7.jpg";
import pic8 from "../assets/p8.jpg";
import pic9 from "../assets/p9.jpg";
import pic10 from "../assets/p10.jpg";

export default function Civilian() {
  const [images] = useState([pic1, pic2, pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10]); // Add more as needed

  const { ref: bioRef, inView: bioVisible } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: galleryRef, inView: galleryVisible } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="civilian-page">

      <Navbar />
      {/* Short Bio */}
      <section className="bio-section">
        <h1>Welcome to My Civilian Life!</h1>
        <p>
          I love exploring new hobbies, taking photos,
          and learning new things every day. This is a peek into my personal habits and interests.
        </p>
      </section>

      {/* Gallery */}
      <section
        ref={galleryRef}
        className={`gallery-section ${galleryVisible ? "fade-in" : ""}`}
      >
        <h2>My Photo Gallery</h2>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className="gallery-item">
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}