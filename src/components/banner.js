import img1 from '../assets/images/img1.avif'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import img4 from '../assets/images/img4.webp'
import img5 from '../assets/images/img5.jpeg'
import img6 from '../assets/images/img6.jpg'

export const Banner = () => {
  return (

    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner" style={{ height: '545px' }}>
        <div className="carousel-item active" >
          <img src={img1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img5} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={img6} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}