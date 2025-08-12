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

  // Function to generate a random quote
  const randomQuote = () => {
    // Generate a randomIndex
    const randomIndex = Math.floor(Math.random() * quotesObject.length);
    // Use randomIndex to fetch a quote from the quotes object
    const newQuote = quotesObject[randomIndex];
    // Update state with new quote
    setCurrentQuote(newQuote);
  };

  // Handle side-effects for setTimeout
  useEffect(() => {
    setTimeout(() => {
      randomQuote();
    }, 1500);
  }, []);

  // Handle new quote request on click
  const handleNewQuote = () => {
    randomQuote();
  };

  return (
    <div className="flex flex-col bg-blue-50 p-5 justify-center items-center">
      <blockquote>{currentQuote.quote}</blockquote>
      <cite>{currentQuote.author}</cite>
      <button
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer"
        onClick={handleNewQuote}
      >
        Get New Quote
      </button>
    </div>
  );
};

export default App;
