import React,{useState} from "react";
import axios from "axios";


// Icons form react icons
import { HiOutlineChatAlt2 } from "react-icons/hi";

// shadcn components import
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    axios
    .post('http://localhost:3001/api/message',{ message })
    .then((res) => {
      setResponse(res.data);
      
    })
    .catch((err) => {
      console.error(err);
    })

  };

  //   const response = await fetch("http://localhost:3001/api/message", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ message: input }),
  //   });

  //   const data = await response.json();
  //   setResponses([...responses, { question: input, answer: data.answer }]);
  //   setInput("");
  // };

  return (
    <div className="container h-full grid gap-8">
      <div>
        {" "}
        <div className="header">
          <h1 className="title text-slate-800">MOONAI à ton écoute 🚀</h1>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="grid gap-2">
          <div className="w-full border px-4 py-4 bg-slate-50 text-sm rounded-md flex flex-row justify-between items-center text-slate-800 border-slate-200">
            <p>Retrouve la facture de mon dernier achat.</p>
            <HiOutlineChatAlt2 />
          </div>
          <div className="w-full border px-4 py-4 bg-slate-50 text-sm rounded-md flex flex-row justify-between items-center text-slate-800 border-slate-200">
            <p>Quelles sont mes dépenses du mois par catégories ?</p>
            <HiOutlineChatAlt2 />
          </div>
          <div className="w-full border px-4 py-4 bg-slate-50 text-sm rounded-md flex flex-row justify-between items-center text-slate-800 border-slate-200">
            <p>Comment puis-je économiser de l’argent sur mes dépenses ?</p>
            <HiOutlineChatAlt2 />
          </div>
        </div>
      </div>
      <Input value={message} onChange={handleInputChange} />
      <Button onClick={handleSubmit}>Envoyer</Button>
      <div>
       {/*  {responses.map((resp, index) => (
          <p key={index}>
            <strong>Q:</strong> {resp.question} <strong>A:</strong>{" "}
            {resp.answer}
          </p>
        ))} */}
        <p>{response}</p>
      </div>
    </div>
  );
}
