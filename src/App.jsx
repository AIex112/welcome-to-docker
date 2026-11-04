import Confetti from "./Confetti.jsx";

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  return (
    <div className="bg-gray-700 h-screen flex flex-col justify-center items-center gap-4 text-xl text-white">
      <h1 className="text-3xl font-bold mb-10 animate-[neon-flicker_4s_0.5s_infinite] text-[#e0f7ff] [text-shadow:0_0_2px_#fff,0_0_5px_#fff,0_0_10px_#38bdf8,0_0_20px_#0ea5e9,0_0_40px_#0ea5e9,0_0_80px_#0ea5e9]">Bienvenue sur le site de formation Miller Graphics.</h1>
      <Confetti />
      <header className="bg-gray-700 rounded-lg pt-12 pb-12 border border-white flex flex-wrap flex-col justify-center items-center gap-4 w-[340px]">

        <h1 className="flex text-center items-center mb-0 font-bold text-3xl">Miller Graphics!!!</h1>
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
      <section className="mt-4 bg-gray-700 rounded-lg p-12  border border-white flex flex-wrap flex-col justify-center items-center gap-4 w-[340.16px]">

        <p className="mb-2 text-3xl font-bold">C'est pas faux.</p>
        <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 border border-white rounded-md">
          Le gras c'est la vie !
        </button>
      </section>
      <div className="flex items-center gap-[.45em] text-[1.6rem] font-bold tracking-[-.02em] text-[#f0f0f0]">
        <span className="font-normal text-white">Miller graphics is</span>
        <span className="relative h-[1.15em] overflow-hidden">
          <div className="flex flex-col animate-[ticker-up_4s_ease-in-out_infinite]">
            <span className="flex h-[1.15em] items-center whitespace-nowrap font-['Instrument_Serif',Georgia,serif] text-blue-400 italic leading-none font-normal">
              creative.
            </span>
            <span className="flex h-[1.15em] items-center whitespace-nowrap font-['Instrument_Serif',Georgia,serif] text-blue-400 italic leading-none font-normal">
              trustworthy.
            </span>
            <span className="flex h-[1.15em] items-center whitespace-nowrap font-['Instrument_Serif',Georgia,serif] text-blue-400 italic leading-none font-normal">
              efficient.
            </span>
            <span className="flex h-[1.15em] items-center whitespace-nowrap font-['Instrument_Serif',Georgia,serif] text-blue-400 italic leading-none font-normal">
              perfect.
            </span>
            {/* duplicate first word for seamless loop */}
            <span className="flex h-[1.15em] items-center whitespace-nowrap font-['Instrument_Serif',Georgia,serif] text-blue-400 italic leading-none font-normal">
              creative.
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

export default App;
