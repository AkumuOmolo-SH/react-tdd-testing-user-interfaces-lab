import { render, screen } from "@testing-library/react";
import App from "../App";

// Required to use custom matchers like toBeInTheDocument()
import '@testing-library/jest-dom';

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with appropriate alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/akumu/i); // Matches: "Akumu smiling in front of a computer"
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});


test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const subheading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(subheading).toBeInTheDocument();
});

test("displays a paragraph for the biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i (am|love|work|study|build)/i); // adjust pattern to match your bio text
  expect(paragraph).toBeInTheDocument();
});

test("displays a link to the GitHub profile", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", {
    name: /github/i,
  });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", expect.stringContaining("github.com"));
});

test("displays a link to the LinkedIn profile", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", {
    name: /linkedin/i,
  });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", expect.stringContaining("linkedin.com"));
});
