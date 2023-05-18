import "../stylesheets/Card.css";

interface Props {
  children: string;
}

const Nav = ({ children }: Props) => {
  return <div className="Card">
    <h3>{children}</h3>
  </div>;
};

export default Nav;
