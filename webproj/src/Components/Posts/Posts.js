import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faHouse,
  faThumbsUp,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

import "./Posts.css";

export const Posts = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-4 col-md-12 col-sm-12 ">
            <div class=" shadow-sm p-3 mb-5 bg-body rounded">
              <h2>Intro</h2>
              <div className="row">
                <div className="bio  col-lg-12 mt-2 rounded text-center mb-4">
                  <span className="btn btn-transparent pd-3  ">
                    <strong>Add Bio</strong>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="  col-lg-12 mt-2 ">
                  <span>
                    <FontAwesomeIcon icon={faHouse} />
                  </span>

                  <span className="icon1 text-left">
                    Lives in <strong>Lahore, Pakistan</strong>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 mt-2 ">
                  <span>
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>

                  <span className="icon2 text-left ">
                    From <strong> Hasilpur</strong>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="bio  col-lg-12 mt-4 rounded text-center mb-4">
                  <span className="btn btn-transparent pd-3  ">
                    <strong>Add Hobbies</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8  rounded pd-3">
            <div className="row">
              <div className="col-1 text-left " style={{ top: 10 }}>
                <img
                  className="rounded-circle shotimg"
                  src="https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-1/178698020_1216776408781553_3981466102089430970_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGBjGizE6tCx9MNU-PKmiZfQSwoPpI364NBLCg-kjfrg0KavjS4-C-3S_2amW4o3NQjssCb9ZGt8enMAdKIRFeo&_nc_ohc=ubb9fc0WKdEAX_EiUJo&_nc_ht=scontent.flhe3-2.fna&oh=00_AT_tDiygHUFByZ9rxHgW4CFSS66I7bwTV-rsc8WohxVSug&oe=62874B92"
                  alt=""
                ></img>
              </div>
              <div className="col-9">
                <h5 style={{ margin: 0 }}>Mohammad Mavia</h5>
                <p>15 April at 04:01</p>
              </div>
              <div className="col-2 text-right">
                <strong>...</strong>
              </div>
            </div>
            <div>
              <img
                className="postimg rounded"
                alt=""
                src="https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-9/192594659_1237262833399577_8896790266484511464_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGb275gs-bAABg9ZUal9epvZL4FBlGa_CdkvgUGUZr8J71nGKVS81t0IJvEXXe7DdKhSBhFudwphYHoOGFduKoC&_nc_ohc=LWwtvbUBoloAX8klJKJ&_nc_ht=scontent.flhe3-2.fna&oh=00_AT81udUE0lBdThM5SrtKov3ps7IX_oaXrprf1joIwknebQ&oe=628880C3"
              ></img>
            </div>
            <div className="row mt-3">
              <div className="col-6  text-left">
                <span>10</span>
                <span> Likes</span>
              </div>
              <div className="col-6 text-right">
                <span>6 Comments</span>
              </div>
            </div>

            <hr />
            <div className="row mt-3">
              <div className="col-6  text-center">
                <span>
                  <FontAwesomeIcon icon={faThumbsUp} />
                </span>
                <span> Like </span>
              </div>
              <div className="col-6 text-center">
                <span>
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                <span> Comment</span>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
