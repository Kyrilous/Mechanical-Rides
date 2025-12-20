const rides = [
  {
    name: "Pirates Revenge",
    images: ["assets/rides/pirates_revenge.jpg", "assets/rides/pirate_revenge_photo2.jpg", "assets/rides/pirate_revenge_photo3.jpg"],
    description: "A classic crowd-favorite ride for all ages."
  },
  {
    name: "Ballistic Swing Ride",
    images: ["assets/rides/Ballistic_Swing_Ride.png", "assets/rides/BALLISTIC_SWING_RIDE_PHOTO2.jpg", "assets/rides/BALLISTIC_SWING_RIDE_PHOTO3.jpg"],
    description: "Ride the waves without getting wet."
  },
  {
    name: "Reckless Mechanical Ride",
    images: ["assets/rides/reckless_main_photo.jpg", "assets/rides/reckless_mechanical_photo1.jpg", "assets/rides/reckless_mechanical_photo3.jpg"],
    description: "Test your balance and hang on tight!"
  },
    {
    name: "Tornado Ride",
    images: ["assets/rides/tornado.png"],
    description: "Test your balance and hang on tight!"
  },
  {
    name: "Rodeo Pumpkin Mechanical Ride",
    images: ["assets/rides/Rodeo_Pumpkin_Ride.jpg"],
    description: "Friendly competition and big laughs."
  },
  {
    name: "Mechanical Bull Ride",
    images: ["assets/rides/bull_ride.png"],
    description: "Perfect for kids and family events."
  },
  {
    name: "Mind Winder",
    images: ["assets/rides/MIND_WINDER.jpg", "assets/rides/MIND_WINDER2.jpg", "assets/rides/MIND_WINDER3.jpg"],
    description: "Winter fun, anytime of year."
  },
  {
    name: "Saddle Up Mechanical Ride",
    images: ["assets/rides/saddle_up.png"],
    description: "A classic crowd-favorite ride for all ages."
  },
    {
    name: "Wrecking Ball",
    images: ["assets/rides/wrecking_ball1.jpg", "assets/rides/wrecking_ball2.jpg", "assets/rides/wrecking_ball3.jpg"],
    description: "A classic crowd-favorite ride for all ages."
  },
  {
    name: "Turbo Tubs of Fun",
    images: ["assets/rides/turbo_tubs.png"],
    description: "Ride the waves without getting wet."
  },
  {
    name: "Berry Go Round",
    images: ["assets/rides/berry.png"],
    description: "Test your balance and hang on tight!"
  },
  {
    name: "Jitter Bug",
    images: ["assets/rides/jitter.png"],
    description: "Friendly competition and big laughs."
  },
  {
    name: "Zip Line (Spectrum)",
    images: ["assets/rides/zipline.png"],
    description: "Perfect for kids and family events."
  }
];



// function Gallery() {
//   return (
    
//     <div className="article-list">
//       <h1 className="article-list-title"> Mechanical Rides!</h1>
//       <div className="container">
//         <div className="row articles">
//           <div className="col-sm-6 col-md-4 item">
//             <a href="#">
//               <img
//                 src="https://image.ibb.co/g9PEKz/img1.jpg"
//                 className="img-fluid"
//                 alt="Games"
//               />
//             </a>
//             <h3 className="name">GAMES</h3>
//             <p className="description">
//               Aenean tortor est, vulputate quis leo in, vehicula rhoncus
//               lacus...
//             </p>
//           </div>
//           <div className="col-sm-6 col-md-4 item">
//             <a href="#">
//               <img
//                 src="https://image.ibb.co/jdKQRe/img2.jpg"
//                 className="img-fluid"
//                 alt="Parties"
//               />
//             </a>
//             <h3 className="name">PARTIES</h3>
//             <p className="description">
//               Praesent aliquam in tellus eu gravida. Aliquam varius finibus
//               est...
//             </p>
//           </div>
//           <div className="col-sm-6 col-md-4 item">
//             <a href="#">
//               <img
//                 src="https://image.ibb.co/epyKme/img3.png"
//                 className="img-fluid"
//                 alt="Dates"
//               />
//             </a>
//             <h3 className="name">DATES</h3>
//             <p className="description">
//               Aliquam varius finibus est, interdum justo suscipit id...
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Gallery;

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

                  {/* Controls (only show if >1 image) */}
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
