import logoAtas from "../../asset/img/logo-ALTA@2x.png";
import fotoProfil from "../../asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-background">
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="alterra">
                <Link to="/">
                  <img className="logo-atas" src={logoAtas} alt="logo-alta" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="row align-items-center navig">
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                  <NavLink to="/" className="aktif">
                    HOME
                  </NavLink>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center">
                  <NavLink to="/">ABOUT</NavLink>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left">
                  <NavLink to="#">EXPERIENCE</NavLink>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right">
                  <NavLink to="/contact">CONTACT</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="container h-100">
        <div className="row align-items-center isi-home">
          <div className="col-lg-4 col-md-12 col-sm-12  col-12">
            <img id="foto-profil" src={fotoProfil} alt="foto-profil" />
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12">
            <div className="main-p">
              <p className="sapaan">Hi, my name is </p>
              <p className="nama">Anne Sullivan</p>
              <p className="hobi">I build things for the web</p>
              <p className="tombol">
                <Link to="/">Get In Touch</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
