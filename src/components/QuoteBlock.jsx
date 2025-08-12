const QuoteBlock = ({ quote, author }) => {
  return (
    <>
      {/* Quote Text */}
      <blockquote className="text-4xl font-light text-center leading-relaxed max-w-xl italic">
        {quote}
      </blockquote>
      {/* Author */}
      <cite className="mt-6 text-xl font-medium text-white/80">- {author}</cite>
    </>
  );
};

export default QuoteBlock;
