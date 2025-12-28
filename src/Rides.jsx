import { useEffect, useState } from "react";

const rides = [
  {
    name: "Pirates Revenge",
    images: ["assets/rides/pirates_revenge.jpg", "assets/rides/pirate_revenge_photo2.jpg", "assets/rides/pirate_revenge_photo3.jpg"],
    description: "A miniature swinging pirate ship that delivers classic amusement park thrills for kids, teens, and adults."
  },
  {
    name: "Ballistic Swing Ride",
    images: ["assets/rides/Ballistic_Swing_Ride.png", "assets/rides/BALLISTIC_SWING_RIDE_PHOTO2.jpg", "assets/rides/BALLISTIC_SWING_RIDE_PHOTO3.jpg"],
    description: "A high-flying chair swing ride that lifts riders to near 45 degrees with music and eye-catching LED lights."
  },
  {
    name: "Reckless Mechanical Ride",
    images: ["assets/rides/reckless_main_photo.jpg", "assets/rides/reckless_mechanical_photo1.jpg", "assets/rides/reckless_mechanical_photo3.jpg"],
    description: "A thrilling swing-and-spin ride designed to challenge balance and deliver nonstop excitement for teens and adults."
  },
  {
    name: "Tornado Ride",
    images: ["assets/rides/tornado.png"],
    description: "A fast-spinning carnival ride that combines swinging motion with intense rotation for thrill seekers."
  },
  {
    name: "Rodeo Pumpkin Mechanical Ride",
    images: ["assets/rides/Rodeo_Pumpkin_Ride.jpg"],
    description: "A fun Halloween-themed mechanical ride where riders try to stay on a bouncing jack-o’-lantern."
  },
  {
    name: "Mechanical Bull Ride",
    images: ["assets/rides/bull_ride.png"],
    description: "A classic mechanical bull experience that tests balance, skill, and stamina one rider at a time."
  },
  {
    name: "Mind Winder",
    images: ["assets/rides/MIND_WINDER.jpg", "assets/rides/MIND_WINDER2.jpg", "assets/rides/MIND_WINDER3.jpg"],
    description: "A high-energy ride that mixes chair swings and spinning motion, reaching up to 16 rotations per minute."
  },
  {
    name: "Saddle Up Mechanical Ride",
    images: ["assets/rides/saddle_up.png"],
    description: "A western-themed bench swing ride that seats large groups and can be adjusted for all ages."
  },
  {
    name: "Wrecking Ball",
    images: ["assets/rides/wrecking_ball1.jpg", "assets/rides/wrecking_ball2.jpg", "assets/rides/wrecking_ball3.jpg"],
    description: "A powerful swinging and spinning ride that lets riders face each other for an exciting group experience."
  },
  {
    name: "Turbo Tubs of Fun",
    images: ["assets/rides/turbo_tubs.png"],
    description: "Bright, spinning tubs that provide fast-paced fun for kids and family-friendly events."
  },
  {
    name: "Berry Go Round",
    images: ["assets/rides/berry.png"],
    description: "A gentle spinning ride designed for younger riders and relaxed family entertainment."
  },
  {
    name: "Jitter Bug",
    images: ["assets/rides/jitter.png"],
    description: "A classic carnival swing ride that lifts riders into the air while spinning for timeless fun."
  },
  {
    name: "Zip Line (Spectrum)",
    images: ["assets/rides/zipline.png"],
    description: "An exciting zip line attraction that lets riders safely soar through the air at your event."
  }
];

export default function Rides() {
  const [open, setOpen] = useState(false);
  const [activeRide, setActiveRide] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (ride) => {
    setActiveRide(ride);
    setActiveIndex(0);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setActiveRide(null);
    setActiveIndex(0);
  };

  const next = () => {
    if (!activeRide) return;
    setActiveIndex((i) => (i + 1) % activeRide.images.length);
  };

  const prev = () => {
    if (!activeRide) return;
    setActiveIndex((i) => (i - 1 + activeRide.images.length) % activeRide.images.length);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden"; 
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, activeRide]);



  useEffect(() => {
  const els = document.querySelectorAll(".reveal, .reveal-stagger");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    },
    { threshold: 0.15 }
  );

  els.forEach((el) => io.observe(el));

  return () => io.disconnect();
}, []);


  return (
    <section className="rides-section" id="rides">
      <h2 className="section-title reveal">Our Rides</h2>

      <div className="rides-grid reveal-stagger">
        {rides.map((ride, i) => (
          <div
            className="ride-card"
            key={i}
            role="button"
            tabIndex={0}
            onClick={() => openModal(ride)}
            onKeyDown={(e) => e.key === "Enter" && openModal(ride)}
          >
            <img src={`/${ride.images[0]}`} alt={ride.name} />
            <div className="ride-content">
              <h3>{ride.name}</h3>
              <p>{ride.description}</p>
            </div>
          </div>
        ))}
      </div>

      {open && activeRide && (
        <div className="rides-modal-overlay" onClick={closeModal}>
          <div className="rides-modal" onClick={(e) => e.stopPropagation()}>
            <button className="rides-modal-close" onClick={closeModal} aria-label="Close">
              ✕
            </button>

            <div className="rides-modal-header">
              <h3>{activeRide.name}</h3>
              <p>{activeRide.description}</p>
            </div>

            <div className="rides-modal-viewer">
              {activeRide.images.length > 1 && (
                <button className="rides-modal-nav rides-modal-prev" onClick={prev} aria-label="Previous photo">
                  ‹
                </button>
              )}

              <img
                className="rides-modal-image"
                src={`/${activeRide.images[activeIndex]}`}
                alt={`${activeRide.name} photo ${activeIndex + 1}`}
              />

              {activeRide.images.length > 1 && (
                <button className="rides-modal-nav rides-modal-next" onClick={next} aria-label="Next photo">
                  ›
                </button>
              )}
            </div>

            {activeRide.images.length > 1 && (
              <div className="rides-modal-thumbs">
                {activeRide.images.map((img, idx) => (
                  <button
                    key={img + idx}
                    className={`rides-thumb ${idx === activeIndex ? "active" : ""}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <img src={`/${img}`} alt="" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
