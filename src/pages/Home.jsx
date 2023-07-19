import { useEffect, useState } from "react";
import Spinner from "../components/Spinner"
import Product from "../components/Product";

const Home = () => { 
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";
  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPost(data);
    } catch (error) {
      console.log(error);
      setPost([])
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return <div>
    {
      loading ? (
        <div className="flex justify-center items-center h-screen"><Spinner/></div>
      ) : (
        post.length > 0 ? (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-100 space-x-5">
            {
              post.map((item)=>(
                <Product key={item.id} item={item}/>
              ))
            }
          </div>
        ) : (
          <div className="flex justify-center items-center">No DATA FOUND</div>
        )
      )
    }
  </div>;
};

export default Home;
