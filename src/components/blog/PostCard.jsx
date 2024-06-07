import { Link } from 'react-router-dom';

const PostCard = ({ id, postImg, title, content, date, author }) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 group overflow-hidden">
        {postImg && (
          <div className="relative">
            <img
              src={postImg}
              alt={title}
              className="w-full h-48 object-cover rounded-t-lg mb-4"
            />
            <div className="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-t-lg"></div>
          </div>
        )}
        <h2 className="text-xl font-semibold mb-2 line-clamp-1">{title}</h2>
        <p className="text-gray-700 mb-2 line-clamp-2">{content}</p>
        <div className="text-gray-500 text-sm">
          <span>{date}</span> | <span className="text-[#ba8a5b]">{author}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
