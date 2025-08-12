import { useEffect } from "react";
import Background from "./components/Background.jsx";
import QuoteBlock from "./components/QuoteBlock.jsx";
import Button from "./components/Button.jsx";
import Clock from "./components/Clock.jsx";
import { useQuotesAndImages } from "./hooks/useQuotesAndImages.js";

const App = () => {
  // Custom hook to get all states and functions
  const { currentQuote, bgImage, imageAuthor, isLoading, fetchQuote } =
    useQuotesAndImages();

  // Handle new quote request on click
  const handleNewQuote = () => {
    fetchQuote();
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
          {isLoading ? (
            <div className="text-xl">Loading.....</div>
          ) : (
            <QuoteBlock
              quote={currentQuote.quote}
              author={currentQuote.author}
            />
          )}

          {/* Button */}
          <Button onHandleNewQuote={handleNewQuote}>New Quote</Button>
        </div>

        {/* Bottom: Credits */}
        <div className="flex justify-between w-full pb-8 px-4 text-sm">
          {/* Credits */}
          <div>
            <Button
              as="a"
              href="https://github.com/asifjirayat"
              target="_blank"
            >
              Made by <strong>Asif Jirayat</strong>
            </Button>
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
