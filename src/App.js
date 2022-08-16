import "./App.css";
import GitHubCard from "../components/GitHubCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
function App() {
  return (
    <div className="App">
      <Row>
        <Col style={{ display: "flex", justifyContent: "center" }}>
          <GitHubCard />
        </Col>
      </Row>
      <h2>hello</h2>
    </div>
  );
}

export default App;
