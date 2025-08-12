const Background = ({ bgImage, children }) => {
  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-black/50 p-4 text-white">
        {children}
      </div>
    </div>
  );
};

export default Background;
