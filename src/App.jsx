import { useEffect, useState } from "react";
const quotesObject = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    author: "Benjamin Franklin",
  },
];

const App = () => {
  const [currentQuote, setCurrentQuote] = useState(quotesObject[0]);
  const [bgImage, setBgImage] = useState("");

  // Helper function to generate a random quote
  const randomQuote = () => {
    // Generate a randomIndex
    const randomIndex = Math.floor(Math.random() * quotesObject.length);
    // Use randomIndex to fetch a quote from the quotes object
    const newQuote = quotesObject[randomIndex];
    // Update state with new quote
    setCurrentQuote(newQuote);
  };

  // Handle side-effects randomQuote
  useEffect(() => {
    randomQuote();
  }, []); // Run only once on mount

  // Fetch random image from unsplash API
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
        const response = await fetch(
          `https://api.unsplash.com/photos/random?query=nature&client_id=${accessKey}`
        );
        const data = await response.json();
        setBgImage(data.urls.full);
      } catch (error) {
        console.error("Failed to fetch image: ", error);
        // Set a default background if API fails
        setBgImage("https://via.placeholder.com/1920x1080?text=Error");
      }
    };

    fetchImage();
  }, []); // Run only once on mount

  // Handle new quote request on click
  const handleNewQuote = () => {
    randomQuote();
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay container */}
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-black/50 p-4 text-white">
        {/* Content Container */}
        <div className="flex flex-col items-center">
          {/* Clock and Date */}
          {/* Quote Text */}
          <blockquote className="text-4xl font-light text-center leading-relaxed max-w-xl italic">
            {currentQuote.quote}
          </blockquote>
          {/* Author */}
          <cite className="mt-6 text-xl font-medium text-white/80">
            - {currentQuote.author}
          </cite>
          {/* Button */}
          <button
            className="mt-12 px-6 py-3 bg-white/10 text-white font-medium rounded-full hover:bg-white/30 transition-colors duration-300"
            onClick={handleNewQuote}
          >
            Get New Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
