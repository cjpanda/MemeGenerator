import HeaderImage from "../assets/troll-face.png";

const Header = () => {
  return (
    <header>
      <img src={HeaderImage} alt="" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
};

export default Header;
