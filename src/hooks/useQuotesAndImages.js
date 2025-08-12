import { useEffect, useState } from "react";

export const useQuotesAndImages = () => {
  const [currentQuote, setCurrentQuote] = useState({});
  const [bgImage, setBgImage] = useState("");
  const [imageAuthor, setImageAuthor] = useState({ name: "", url: "" });
  const [isLoading, setIsLoading] = useState(true);

  // Fetching a random quote from dummyjson.com
  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/quotes/random");
      const data = await response.json();
      setCurrentQuote({
        quote: data.quote,
        author: data.author,
      });
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      // Fallback quote if API call fails
      setCurrentQuote({
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch random image from unsplash API
  const fetchImage = async () => {
    try {
      const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=nature&w=1920&client_id=${accessKey}`
      );
      const data = await response.json();
      setBgImage(data.urls.full);
      // Store author name and URL
      setImageAuthor({
        name: data.user.name,
        url: data.user.links.html,
      });
    } catch (error) {
      console.error("Failed to fetch image: ", error);
      // Set a default background if API fails
      setBgImage("https://via.placeholder.com/1920x1080?text=Error");
      setImageAuthor({
        name: "Placeholder",
        url: "#",
      });
    }
  };

  // Handle side-effects randomQuote
  useEffect(() => {
    fetchQuote();
    fetchImage();
  }, []); // Run only once on mount

  return {
    currentQuote,
    bgImage,
    imageAuthor,
    isLoading,
    fetchQuote,
    fetchImage,
  };
};
