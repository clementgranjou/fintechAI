import React, { useEffect, useState } from "react";

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
import { HiMiniAdjustmentsHorizontal, HiMiniCursorArrowRays } from "react-icons/hi2";

export default function Home() {
  const [transactions, setTransactions] = useState([]);
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
        <h1 className="title text-slate-800">Hi Firstname 👋</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="header">
        <h3 className="text-slate-800">Solde de tout compte</h3>
        <h3 className="text-slate-400">1 compte connecté</h3>
      </div>
      <h1 className="text-slate-800 text-3xl font-semibold">$3000.89</h1>

      <div className="grid gap-2">
        <div className="header">
          <h3 className="text-slate-800">Suivi des opérations</h3>
          <HiMiniAdjustmentsHorizontal />
        </div>
        <Button className="w-full bg-violet-700 text-slate-50 font-normal gap-x-8">Conseiller moi<HiMiniCursorArrowRays/></Button>
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
              <TableCell className="font-bold">
                {transaction.transactionid}
              </TableCell>
              <TableCell>{transaction.amount} USD</TableCell>
              <TableCell>{formatDate(transaction.transactiondate)}</TableCell>
              <TableCell>
                <Badge variant="outline">{transaction.status}</Badge>
              </TableCell>
              <TableCell>{transaction.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
