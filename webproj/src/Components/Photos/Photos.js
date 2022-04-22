import "./Photos.css";

export const Photos = () => {
  var arr = [
    "https://images.unsplash.com/photo-1567540227376-f1eb675cab92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg",
    "https://images.unsplash.com/photo-1567540227376-f1eb675cab92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg",
    "https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg",
    "https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg",
    "https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg",
    "https://cdn.pixabay.com/photo/2014/11/21/03/24/mountains-540115__340.jpg",
  ];
  return (
    <div>
      <h2 className="mt-2">My Photos</h2>
      <div className="grid-container">
        {arr.map((links) => (
          <div className="grid-item m-3">
            <img src={links} className="myimg  rounded" alt="..." />
          </div>
        ))}
      </div>
    </div>
  );
};
