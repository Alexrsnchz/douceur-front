import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/misc/Navbar.jsx';
import PostCard from '@/components/blog/PostCard';
import Footer from '@/components/misc/Footer.jsx';

function Blog() {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios(`${apiUrl}/posts`);
        const data = response.data;
        const publishedPosts = data.filter(
          (post) => post.state === 'Publicado',
        );
        setPosts(publishedPosts);
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[#f1e5d1] min-h-screen pt-5 pb-2">
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                postImg={post.postImg}
                title={post.title}
                content={post.content}
                date={post.created_at}
                author={post.user_id}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
