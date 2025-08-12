import { useEffect, useState } from "react";
import Background from "./components/Background.jsx";
import QuoteBlock from "./components/QuoteBlock.jsx";
import Button from "./components/Button.jsx";
import Clock from "./components/Clock.jsx";

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
  const [imageAuthor, setImageAuthor] = useState({ name: "", url: "" });

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

    fetchImage();
  }, []); // Run only once on mount

  // Handle new quote request on click
  const handleNewQuote = () => {
    randomQuote();
  };

  return (
    <Background bgImage={bgImage}>
      <div className="h-screen w-screen flex flex-col justify-between items-center p-4 text-white">
        {/* Top: Clock and Date */}
        <div className="pt-8">
          <Clock />
        </div>

        {/* Middle: Quote */}
        <div className="flex flex-col items-center">
          {/* Quote Block */}
          <QuoteBlock quote={currentQuote.quote} author={currentQuote.author} />
          {/* Button */}
          <Button onHandleNewQuote={handleNewQuote}>New Quote</Button>
        </div>

        {/* Bottom: Credits */}
        <div className="flex justify-between w-full pb-8 px-4 text-sm">
          {/* Credits */}
          <div>
            App by <strong>Asif Jirayat</strong>
          </div>
          {/* Image Credit */}
          <div>
            <Button as="a" href={imageAuthor.url} target="_blank">
              Image by {imageAuthor.name}
            </Button>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default App;
