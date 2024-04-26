import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import axios from 'axios';

const COLORS = ['#444444', '#F7C4EC', '#FFBB28', '#FF8042'];

function MyPieChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/transactions');
                console.log("Réponse de l'API:", response.data);
                const aggregatedData = aggregateData(response.data);
                setData(aggregatedData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);

    function aggregateData(transactions) {
        if (!Array.isArray(transactions)) {
            console.error("Les données attendues devraient être un tableau, reçu:", transactions);
            return []; // Retourne un tableau vide si les données ne sont pas un tableau
        }
    
        const sums = transactions.reduce((acc, { statut, amount }) => {
            if (!statut || (typeof amount !== 'number' && typeof amount !== 'string')) {
                console.error("Transaction invalide:", { statut, amount });
                return acc;
            }
            let numericAmount = parseFloat(amount);
            if (isNaN(numericAmount)) {
                console.error("Montant invalide, doit être un nombre:", amount);
                return acc;
            }
            acc[statut] = (acc[statut] || 0) + numericAmount;
            return acc;
        }, {});
    
        const result = Object.keys(sums).map(key => ({ name: key, value: sums[key] }));
        return result;
    }
    

    return (
        <PieChart width={325} height={325}>
            <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
}

export default MyPieChart;
