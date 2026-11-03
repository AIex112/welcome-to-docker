import Confetti from "./Confetti.jsx";

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  return (
    <div className="bg-gray-800 h-screen flex flex-col justify-center items-center gap-4 text-white text-xl">
      <Confetti /> 
      <header className="bg-gray-700 rounded-lg p-8 h-96 min-w-80  border border-white flex flex-wrap flex-col justify-center items-center gap-4 ">
        <h1 className="mb-0 font-bold text-3xl">Miller Graphics!!!</h1>
        <p className="mt-2 mb-12">Test Cédric</p>
        <div className="flex justify-center items-center gap-4 ">
          <a
            target="_blank"
            href={
              "https://twitter.com/intent/tweet?text=" +
              shareMessage +
              "&url=" +
              shareLink
            }
            className="fa-brands fa-x-twitter flex justify-center items-center p-5 hover:opacity-70 text-white bg-blue-400 border border-white rounded-md"
            rel="noopener noreferrer"
          >
            {" "}
          </a>
          <a
            target="_blank"
            href={
              "https://www.linkedin.com/sharing/share-offsite/?url=" + shareLink
            }
            className="fa-brands fa-linkedin flex justify-center items-center p-5 hover:opacity-70 text-white bg-blue-400 border border-white rounded-md"
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
            className="fa-brands fa-reddit flex justify-center items-center p-5 hover:opacity-70 text-white bg-blue-400 border border-white rounded-md"
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
