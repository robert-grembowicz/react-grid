import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid from 'components/organisms/Grid/Grid';
import { PostsState } from 'types';

const Home = () => {
  const [posts, setPosts] = useState<PostsState>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/list');
        setPosts(response.data);
        console.log(posts);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return <>{posts ? <Grid items={posts} /> : 'loader'}</>;
};

export default Home;
