import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import LogoutButton from "../components/Logout";

export default function Account() {
  return (
    <div className="container h-full grid gap-8">
      <h1 className="title text-slate-800">Mon compte 👨‍🔧</h1>
      <div className="flex flex-col items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h1 className="title text-slate-800">Clément Granjou</h1>
        <h1 className="text-sm text-slate-600">Email.test@epitech.digital</h1>
      </div>
      <div className="All grid gap-6 px-4">
        <div className="item flex flex-row justify-between">
          <h1 className="text-sm font-medium text-slate-800">
            Date de naissance
          </h1>
          <h1 className="text-sm text-slate-600">20/11/1989</h1>
        </div>
        <div className="item flex flex-row justify-between">
          <h1 className="text-sm font-medium text-slate-800">
            Date de naissance
          </h1>
          <h1 className="text-sm text-slate-600">20/11/1989</h1>
        </div>
        <div className="item flex flex-row justify-between">
          <h1 className="text-sm font-medium text-slate-800">
            Date de naissance
          </h1>
          <h1 className="text-sm text-slate-600">20/11/1989</h1>
        </div>
        <div className="item flex flex-row justify-between">
          <h1 className="text-sm font-medium text-slate-800">
            Date de naissance
          </h1>
          <h1 className="text-sm text-slate-600">20/11/1989</h1>
        </div>
      </div>
      <LogoutButton></LogoutButton>
    </div>
  );
}
