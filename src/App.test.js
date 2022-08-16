import { render, screen } from "@testing-library/react";
import App from "./App";
import renderer from "react-test-renderer";
import GitHubCard from "../components/GitHubCard";

//test("renders a snapshot", () => {
//const tree = renderer.create(<App />).toJSON();
//expect(tree).toMatchSnapshot();
//});
test("renders text Dre Benjamin", () => {
  render(<GitHubCard />);
  const nameElement = screen.getByText(/dre benjamin/i);
  expect(nameElement).toBeInTheDocument();
});
