import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <h3>
        Made with <i className="fas fa-heart"></i> by Sudhanshu Soni{" "}
      </h3>
      <div>
        <i className="cursor-pointer fab fa-twitter margin-left-small "></i>
        <i className="cursor-pointer fab fa-github margin-left-small"></i>
        <i className="cursor-pointer fab fa-linkedin margin-left-small"></i>
      </div>
    </div>
  );
};

export { Footer };
