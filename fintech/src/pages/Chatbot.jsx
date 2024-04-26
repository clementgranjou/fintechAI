import React from "react";

// Icons form react icons
import { HiOutlineChatAlt2 } from "react-icons/hi";


// shadcn components import
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function Chatbot() {
  return (
    <div className="container h-full grid gap-8">
      <div className="header">
        <h1 className="title text-slate-800">MOONAI à ton écoute 🚀</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="grid gap-2">
        <div className="w-full border px-4 py-4 bg-slate-50 text-sm rounded-md flex flex-row justify-between items-center text-slate-800 border-slate-200">
          <p>
            Retrouve la facture de mon dernier achat.
          </p>
          <HiOutlineChatAlt2 />
        </div>
        <div className="w-full border px-4 py-4 bg-slate-50 text-sm rounded-md flex flex-row justify-between items-center text-slate-800 border-slate-200">
          <p>
            Quelles sont mes dépenses du mois par catégories ?
          </p>
          <HiOutlineChatAlt2 />
        </div>
        <div className="w-full border px-4 py-4 bg-slate-50 text-sm rounded-md flex flex-row justify-between items-center text-slate-800 border-slate-200">
          <p>
            Comment puis-je économiser de l’argent sur mes dépenses ?
          </p>
          <HiOutlineChatAlt2 />
        </div>
      </div>
    </div>
  );
}
