import React from "react";
import { useNavigate } from "react-router-dom";

//react icons
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { HiChevronLeft } from "react-icons/hi";
import { HiLightBulb } from "react-icons/hi";


// shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/"); // Remplacez '/dashboard' par l'URL vers laquelle vous souhaitez rediriger
  };

  return (
    <div className="container h-full grid gap-8">
      <div className="header">
        <div
          onClick={redirectToHome}
          className="headerleft flex flex-row items-center"
        >
          <HiChevronLeft />
          <h1 className="title text-slate-800">Dashboard d’analyse 📊</h1>
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="font-medium text-sm text-slate-800">
        Répartition des dépenses
      </h1>
      <Card className="bg-slate-50">
        <CardHeader>
          <CardTitle className="text-md">Indice de gestion</CardTitle>
          <CardDescription className="font-semibold text-4xl text-slate-800">63%</CardDescription>
        </CardHeader>
        <CardContent className="text-slate-400">
          <p>Calcul automatisé de la gestion de tes finances</p>
        </CardContent>
        <div className="buttontest p-4">
        <Button className="w-full bg-purple-700">Conseillez-moi<HiLightBulb/></Button>
        </div>
      </Card>
    </div>
  );
}
