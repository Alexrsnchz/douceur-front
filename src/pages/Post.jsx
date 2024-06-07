import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/misc/Navbar.jsx';
import Footer from '@/components/misc/Footer.jsx';

function Post() {
  const apiUrl = import.meta.env.VITE_REACT_APP_DOUCEUR_API;
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios(`${apiUrl}/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error al obtener el post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Cargando...</div>;
  }

  if (!post) {
    return <div className="text-center py-10">No se ha encontrado el post</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f1e5d1] flex flex-col items-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl mx-4 my-8 p-4 md:p-8">
          {post.postImg && (
            <div
              className="w-full bg-cover bg-center h-64 md:h-96 rounded-md mb-8"
              style={{ backgroundImage: `url(${post.postImg})` }}
            >
              <img
                src={post.postImg}
                alt="Post"
                className="w-full h-full object-cover opacity-0 rounded-md"
              />
            </div>
          )}

          <div className="flex flex-col justify-center">
            <div className="flex justify-start gap-3 text-sm text-gray-600 font-semibold mb-4">
              <p>
                Publicado:{' '}
                <span className="font-semibold text-cyan-700">
                  {post.created_at}
                </span>
              </p>

              <p>
                Última actualización:{' '}
                <span className="font-semibold text-amber-600">
                  {post.updated_at}
                </span>
              </p>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-[#ba8a5b] mb-4">
              {post.title}
            </h1>

            <p className="text-gray-600 mb-6 whitespace-pre-line leading-relaxed">
              {post.content}
            </p>

            <div className="flex items-center mt-6 text-gray-600 font-semibold">
              <span>Publicado por:</span>
              <span className="ml-2 text-[#d4a373] font-semibold">
                {post.user_id}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Post;
