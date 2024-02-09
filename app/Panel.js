import React, { useState, useEffect, useRef } from "react";

const Panel = () => {
  // OpenAI API
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I am Mike's assistant. I can help with exploring Mike's skills and projects.",
    },
  ]);
  const [inputText, setInputText] = useState("");

  const sendMessageToAPI = async () => {
    if (inputText.trim() === "") return;

    const userMessage = inputText;
    setInputText("");

    setMessages((messages) => [
      ...messages,
      { role: "user", content: userMessage },
    ]);
    const timer = setTimeout(() => {
      setMessages((messages) => [
        ...messages,
        { role: "interface", content: "🤔" },
      ]);
    }, 800);

    let latestQueryIndex = 0;
    for (let i = messages.length - 1; i >= 0; i--) {
      if (messages[i].role === "user") {
        latestQueryIndex = i;
        break;
      }
    }
    const context = messages.slice(latestQueryIndex);
    try {
      const response = await fetch(
        `https://6jc261drqi.execute-api.us-east-2.amazonaws.com/prod/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            {
              role: "system",
              content:
                "You are a virtual assistant built by a full-stack developer, whose nickname is Mike Hyatt. He uses the nickname for privacy reasons. Always mention this consideration to people who asks about Mike. Mike's skill set contains Python, JavaScript (ES6+), TypeScript, Node.js, Java, PHP, C/C++, Swift, HTML, CSS, Tailwind, React, Next.js, Vue, Nuxt, Angular, React Native, TensorFlow, PyTorch, JAX, React AI, SQL, NoSQL(DynamoDB, MongoDB), Git, Docker, AWS Amplify, Azure, Redux, Vuex, MobX, NgRx, Fetch, AJAX, Axios, REST, GraphQL, OAuth, JWT, Jest, Mocha, and JUnit. Mike's projects include an all-encompassing chatbot hosted on AWS named NextGPT.live, a voice assistant app for elderly tech coaching named Doorman, a software-in-the-loop simulation for autonomous drone navigation, and a learning-based differential equation solver with enhanced accuracy.",
            },
            ...context,
            { role: "user", content: userMessage },
          ]),
        }
      );
      clearTimeout(timer);
      if (!response.ok) {
        throw new Error("Time out. Please try again.");
      }
      const data = await response.json();
      console.log(JSON.stringify(data));
      if (data.finish_reason === "content_filter") {
        throw new Error(
          "Content omitted due to a flag from our content filters. Please use our tools safely and responsibly by following our usage policies."
        );
      } else {
        setMessages((messages) => [
          ...messages.filter((item) => item.role !== "interface"),
          data.message,
        ]);
      }
    } catch (error) {
      clearTimeout(timer);
      setMessages((messages) => [
        ...messages.filter((item) => item.role !== "interface"),
        { role: "assistant", content: error.toString() },
      ]);
    }
  };
  const filteredMessages = messages.filter((item) => item.content !== null);
  const [finishedTyping, setFinishedTyping] = useState(true);
  return (
    <div className="p-3 justify-between">
      <FullView messages={filteredMessages} />
      <div className={`flex w-full`}>
        {!inputText && (
          <div className="flex flex-col justify-center opacity-40 dark:opacity-60">
            <svg className="absolute mt-1 ml-2.5 h-5 w-5 text-2xl flex justify-center items-center dark:invert">
              <path d="M17.211,3.39H2.788c-0.22,0-0.4,0.18-0.4,0.4v9.614c0,0.221,0.181,0.402,0.4,0.402h3.206v2.402c0,0.363,0.429,0.533,0.683,0.285l2.72-2.688h7.814c0.221,0,0.401-0.182,0.401-0.402V3.79C17.612,3.569,17.432,3.39,17.211,3.39M16.811,13.004H9.232c-0.106,0-0.206,0.043-0.282,0.117L6.795,15.25v-1.846c0-0.219-0.18-0.4-0.401-0.4H3.189V4.19h13.622V13.004z"></path>
            </svg>
          </div>
        )}
        <input
          className="w-full bg-transparent px-[9px] py-1.5 pr-11 border border-gray-400 rounded-md"
          maxLength="256"
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
          placeholder={"      How can I help you?"}
          onKeyDown={(event) => {
            if (event.key === "Enter" && finishedTyping) {
              sendMessageToAPI();
            }
          }}
          onCompositionStart={() => {
            setFinishedTyping(false);
          }}
          onCompositionEnd={() => {
            setFinishedTyping(true);
          }}
        />
        {inputText && (
          <button
            className="-ml-11 w-11 rounded-r-md text-2xl leading-4 pb-3.5 pt-2 bg-slate-500/5 hover:backdrop-invert hover:invert hover:opacity-80"
            style={{}}
            onClick={sendMessageToAPI}
          >
            ◮
          </button>
        )}
      </div>
    </div>
  );
};

export default Panel;

const FloatView = ({ messages }) => {
  const len = messages.length;
  return (
    <div className="flex flex-col-reverse">
      {len > 0 && <MsgBox message={messages[len - 1]} />}
      {len > 1 && <MsgBox message={messages[len - 2]} />}
    </div>
  );
};

const MsgBox = ({ message }) => {
  return (
    <div
      className={`w-full mb-3 flex flex-col justify-start items-start px-2.5 py-[7px] max-h-24 overflow-auto rounded-md ${
        message.role === "user"
          ? "bg-sky-400 dark:bg-sky-900 opacity-90"
          : "bg-gray-300 dark:bg-gray-700 opacity-95"
      }`}
    >
      {message.content}
    </div>
  );
};

const FullView = ({ messages }) => {
  useEffect(() => {
    const chatBox = document.getElementById("chatBox");
    chatBox.scrollTop = chatBox.scrollHeight;
  }, [messages]);
  return (
    <div
      id="chatBox"
      className="flex flex-col w-full items-center h-[440px] overflow-auto rounded-md"
    >
      {messages.map((message, index) => (
        <div
          key={index}
          className={`w-full mb-3 flex flex-col justify-start items-start px-2.5 py-[7px] rounded-md ${
            message.role === "user"
              ? "bg-sky-400 dark:bg-sky-900 opacity-90"
              : "bg-gray-300 dark:bg-gray-700 opacity-95"
          } ${index === 0 && "mt-auto sm:mt-0"}`}
        >
          {message.content}
        </div>
      ))}
    </div>
  );
};
