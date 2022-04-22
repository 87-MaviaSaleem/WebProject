import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Nav } from "../Nav/Nav";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container justify-content-center align-items-center">
      <div className="container">
        <div className="">
          <img
            className=" header-image rounded"
            alt=""
            src="https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-9/192594659_1237262833399577_8896790266484511464_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGb275gs-bAABg9ZUal9epvZL4FBlGa_CdkvgUGUZr8J71nGKVS81t0IJvEXXe7DdKhSBhFudwphYHoOGFduKoC&_nc_ohc=LWwtvbUBoloAX8klJKJ&_nc_ht=scontent.flhe3-2.fna&oh=00_AT81udUE0lBdThM5SrtKov3ps7IX_oaXrprf1joIwknebQ&oe=628880C3"
          ></img>
        </div>

        <div className="row">
          <div className=" col col-lg-3 col-md-12 col-sm-12 text-center profile-pic">
            <img
              className="rounded-circle border border-white"
              src="https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-1/178698020_1216776408781553_3981466102089430970_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGBjGizE6tCx9MNU-PKmiZfQSwoPpI364NBLCg-kjfrg0KavjS4-C-3S_2amW4o3NQjssCb9ZGt8enMAdKIRFeo&_nc_ohc=ubb9fc0WKdEAX_EiUJo&_nc_ht=scontent.flhe3-2.fna&oh=00_AT_tDiygHUFByZ9rxHgW4CFSS66I7bwTV-rsc8WohxVSug&oe=62874B92"
              alt=""
            ></img>
          </div>
          <div className="name col-lg-5 col-md-8 col-sm-8 mt-5 d-sm-center  text-left">
            <h1>
              <strong>Mohammd Mavia</strong>
            </h1>
            <a href="...">
              <h5 className="text-black-50">614 connections</h5>
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 text-right editbutton">
            <button className="btn btn-transparent rounded">
              <FontAwesomeIcon icon={faPen} />
              <span> Edit Profile</span>
            </button>
          </div>
        </div>

        <Nav />
      </div>
    </div>
  );
};
