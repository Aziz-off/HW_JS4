import './App.css';
function Header() {
  return (
      <ul className="links">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contacts</li>
      </ul>
  );
}

function Title(props) {
  return (
      <h1>hello {props.name}, you are {props.age}</h1>
  )
}

function Footer(props) {
  return (
      <>
        <p>All contents © copyright 2022 Business Theme. All rights reserved Designed by: {props.data2}</p>
        <p>Телефон: {props.data1} </p>
      </>
  )
}

function App() {
  return (
      <div>
        <Title name="Dastan" age="25"/>
        <Header/>
        <Title name="Aibek" age="20"/>
        <Footer data1="+987 9976 999" data2="aibek.azizov"/>
      </div>
  );
}

export default App;
