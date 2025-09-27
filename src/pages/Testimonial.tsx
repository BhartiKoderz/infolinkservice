import { useEffect, useState } from "react";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${import.meta.env.VITE_PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${import.meta.env.VITE_API_KEY}`
        );
        const data = await res.json();
        setReviews(data.result.reviews || []);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">What our clients say</h2>
      <div className="space-y-6">
        {reviews.map((r, i) => (
          <div key={i} className="p-4 rounded-lg shadow bg-white">
            <div className="flex items-center mb-2">
              <img
                src={r.profile_photo_url}
                alt={r.author_name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{r.author_name}</p>
                <p className="text-yellow-500">
                  {"⭐".repeat(r.rating)}
                </p>
              </div>
            </div>
            <p className="text-gray-700">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
