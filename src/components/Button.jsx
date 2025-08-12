const Button = ({ children, onHandleNewQuote, href, as, ...rest }) => {
  const Component = as === "a" ? "a" : "button";

  const buttonClasses =
    "px-6 py-3 mt-8 bg-white/10 text-white font-medium rounded-full hover:bg-white/30 transition-colors duration-300";
  const linkClasses =
    "text-white/80 hover:text-white underline transition-colors duration-300";

  // Choose classes based on type of Component
  const classes = as === "a" ? linkClasses : buttonClasses;

  return (
    <Component
      className={classes}
      onClick={onHandleNewQuote}
      href={href}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
