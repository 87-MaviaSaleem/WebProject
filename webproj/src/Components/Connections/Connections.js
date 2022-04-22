import "./Connections.css";

export const Connections = () => {
  var myfriend = [
    {
      id: 1,
      name: "Mohammad Mavia",
      imge: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-1/178698020_1216776408781553_3981466102089430970_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGBjGizE6tCx9MNU-PKmiZfQSwoPpI364NBLCg-kjfrg0KavjS4-C-3S_2amW4o3NQjssCb9ZGt8enMAdKIRFeo&_nc_ohc=ubb9fc0WKdEAX_EiUJo&_nc_ht=scontent.flhe3-2.fna&oh=00_AT_tDiygHUFByZ9rxHgW4CFSS66I7bwTV-rsc8WohxVSug&oe=62874B92",
    },
    {
      id: 2,
      name: "Mohammad Ahmed",
      imge: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-1/178698020_1216776408781553_3981466102089430970_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGBjGizE6tCx9MNU-PKmiZfQSwoPpI364NBLCg-kjfrg0KavjS4-C-3S_2amW4o3NQjssCb9ZGt8enMAdKIRFeo&_nc_ohc=ubb9fc0WKdEAX_EiUJo&_nc_ht=scontent.flhe3-2.fna&oh=00_AT_tDiygHUFByZ9rxHgW4CFSS66I7bwTV-rsc8WohxVSug&oe=62874B92",
    },
    {
      id: 3,
      name: "Mohammad Affaq",
      imge: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-1/178698020_1216776408781553_3981466102089430970_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGBjGizE6tCx9MNU-PKmiZfQSwoPpI364NBLCg-kjfrg0KavjS4-C-3S_2amW4o3NQjssCb9ZGt8enMAdKIRFeo&_nc_ohc=ubb9fc0WKdEAX_EiUJo&_nc_ht=scontent.flhe3-2.fna&oh=00_AT_tDiygHUFByZ9rxHgW4CFSS66I7bwTV-rsc8WohxVSug&oe=62874B92",
    },
    {
      id: 4,
      name: "Mohammad Fahad",
      imge: "https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-1/178698020_1216776408781553_3981466102089430970_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGBjGizE6tCx9MNU-PKmiZfQSwoPpI364NBLCg-kjfrg0KavjS4-C-3S_2amW4o3NQjssCb9ZGt8enMAdKIRFeo&_nc_ohc=ubb9fc0WKdEAX_EiUJo&_nc_ht=scontent.flhe3-2.fna&oh=00_AT_tDiygHUFByZ9rxHgW4CFSS66I7bwTV-rsc8WohxVSug&oe=62874B92",
    },
  ];
  return (
    <div>
      <h2 className="mt-2">My Connections</h2>
      <div className="grid-container">
        {myfriend.map((index) => (
          <div key={index.id} className="grid-item m-3">
            <img src={index.imge} className="myimg  rounded" alt="..." />
            <h5>
              <strong>{index.name}</strong>
            </h5>
            <p className="text-black-50 m-0">9 Mutual Friend</p>
            <strong>
              <h1>...</h1>
            </strong>
          </div>
        ))}
      </div>
    </div>

    // <div className="container">
    //   <div className="row">
    //     <div className="col-lg-6">
    //       <div className="row mt-4">
    //         <div className="col-lg-3">
    //           <img
    //             className="rounded connecimg"
    //             src="https://scontent.flhe3-2.fna.fbcdn.net/v/t1.6435-1/178698020_1216776408781553_3981466102089430970_n.jpg?stp=dst-jpg_s200x200&_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeGBjGizE6tCx9MNU-PKmiZfQSwoPpI364NBLCg-kjfrg0KavjS4-C-3S_2amW4o3NQjssCb9ZGt8enMAdKIRFeo&_nc_ohc=ubb9fc0WKdEAX_EiUJo&_nc_ht=scontent.flhe3-2.fna&oh=00_AT_tDiygHUFByZ9rxHgW4CFSS66I7bwTV-rsc8WohxVSug&oe=62874B92"
    //             alt=""
    //           ></img>
    //         </div>
    // <div className="col-lg-4">
    //   <h5>
    //     <strong>Mohammd Mavia</strong>
    //   </h5>

    //   <p className="text-black-50">9 Mutual Friend</p>
    // </div>
    // <div className="col-lg-4">
    //   <strong>...</strong>
    // </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
