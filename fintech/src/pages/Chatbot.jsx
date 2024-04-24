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
        <div className="w-full border border-slate-100 px-4 py-4 text-sm rounded-md flex flex-row justify-between items-center	 bg-white border-slate-900">
          <p className="text-slate-600">
            Retrouve la facture de mon dernier achat.
          </p>
          <HiBolt />
        </div>
        <div className="w-full border border-slate-100 px-4 py-4 text-sm rounded-md flex flex-row justify-between items-center	 bg-white border-slate-900">
          <p className="text-slate-600">
            Quelles sont mes dépenses du mois par catégories ?
          </p>
          <HiBolt />
        </div>
        <div className="w-full border border-slate-100 px-4 py-4 text-sm rounded-md flex flex-row justify-between items-center	 bg-white border-slate-900">
          <p className="text-slate-600">
            Comment puis-je économiser de l’argent sur mes dépenses ?
          </p>
          <HiBolt />
        </div>
      </div>
    </div>
  );
}
