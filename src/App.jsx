import "./App.css";
import Confetti from "./Confetti.jsx";

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  return (
    <div className="App">
      <Confetti />
      <header className="App-header">
        <h1 className="mb-0 bg-blue-500">Félicitations!!!</h1>
        <p className="mt-2 mb-12">
          You ran your first container.
        </p>
        <div className="flex justify-center items-center gap-4">
          <a 
            target="_blank"
            href={
              "https://twitter.com/intent/tweet?text=" +
              shareMessage +
              "&url=" +
              shareLink
            }
            className="fa-brands fa-x-twitter flex justify-center items-center p-5 hover:opacity-70"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={
              "https://www.linkedin.com/sharing/share-offsite/?url=" + shareLink
            }
            className="fa-brands fa-linkedin flex justify-center items-center p-5 hover:opacity-70"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={
              "https://reddit.com/submit?title=" +
              shareMessage +
              "&url=" +
              shareLink
            }
            className="fa-brands fa-reddit flex justify-center items-center p-5 hover:opacity-70"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
