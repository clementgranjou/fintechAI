import React from "react";

// Icons form react icons
import { HiBolt } from "react-icons/hi2";

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
          <HiBolt />
        </div>
        <div className="w-full border px-4 py-4 bg-slate-50 text-sm rounded-md flex flex-row justify-between items-center text-slate-800 border-slate-200">
          <p>
            Quelles sont mes dépenses du mois par catégories ?
          </p>
          <HiBolt />
        </div>
        <div className="w-full border px-4 py-4 bg-slate-50 text-sm rounded-md flex flex-row justify-between items-center text-slate-800 border-slate-200">
          <p>
            Comment puis-je économiser de l’argent sur mes dépenses ?
          </p>
          <HiBolt />
        </div>
      </div>
    </div>
  );
}
