
import React from "react";
import axios from "axios";

const baseURL = "https://dog.ceo/api/breeds/image/random"

function App() {
  const [post, setPost] = React.useState(null);


  React.useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <img src="{post.random}" alt="" />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default App;
