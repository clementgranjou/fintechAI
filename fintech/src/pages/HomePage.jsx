import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// shadcn components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// icons
import {
  HiMiniAdjustmentsHorizontal,
  HiMiniCursorArrowRays,
} from "react-icons/hi2";

export default function Home() {


  const navigate = useNavigate();

  const redirectToDashboard = () => {
    navigate("/dashboard"); // Remplacez '/dashboard' par l'URL vers laquelle vous souhaitez rediriger
  };

  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/transactions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTransactions(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/transactions/sum")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTotal(data.sum);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(error.message);
      });
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  

  return (
    <div className="container grid gap-8">
      <div className="header">
        <h1 className="title text-slate-800">Hi Clément 👋</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="header">
        <h3 className="text-slate-800 font-medium">Solde de tout compte</h3>
        <h3 className="text-slate-400">1 compte connecté</h3>
      </div>
      <h1 className="text-slate-800 text-3xl font-semibold">{total}$</h1>

      <div className="grid gap-2">
        <div className="header">
          <h3 className="text-slate-800 font-medium">Suivi des opérations</h3>
          <HiMiniAdjustmentsHorizontal />
        </div>
        <Button
          className="w-full flex justify-between bg-slate-800 text-slate-200 hover:text-slate-200 font-normal"
          onClick={redirectToDashboard} // Ajoutez l'écouteur d'événements onClick ici
        >
          Dashboard d'analyse
          <HiMiniCursorArrowRays />
        </Button>{" "}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.transactionid}>
              <TableCell className="text-sm font-bold">
                {transaction.transactionid}
              </TableCell>
              <TableCell className="text-sm">{transaction.amount}USD</TableCell>
              <TableCell className="text-sm">
                {formatDate(transaction.transactiondate)}
              </TableCell>
              <TableCell>
                <Badge variant="outline">{transaction.statut}</Badge>
              </TableCell>
              <TableCell className="text-sm">
                {transaction.description}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
