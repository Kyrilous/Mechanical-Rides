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



function Gallery() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Mechanical Rides</h1>

      <div className="row">
        {rides.map((ride, index) => {
          const carouselId = `rideCarousel-${index}`;

          return (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm ride-card">
                
                {/* Carousel */}
                <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    {ride.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                      >
                        <img
                          src={img}
                          className="d-block w-100"
                          alt={`${ride.name} photo ${imgIndex + 1}`}
                          style={{ height: "220px", objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {ride.images.length > 1 && (
                    <>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#${carouselId}`}
                        data-bs-slide="prev"
                      >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>

                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#${carouselId}`}
                        data-bs-slide="next"
                      >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </>
                  )}
                </div>

                {/* Text */}
                <div className="card-body text-center">
                  <h5 className="card-title">{ride.name}</h5>
                  <p className="card-text">{ride.description}</p>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
