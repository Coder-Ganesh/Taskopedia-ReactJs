function MainHeader() {
  return <h1 className="heading">REACT COURSE</h1>;
}

// We can use this approach when we have to apply large amount of styling
const subHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "lightgray",
};

function SubHeader() {
  return <p style={subHeaderStyle}>This will be an exciting course</p>;
}

function Header() {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
}

export default Header;
