export function aggregateData(data) {
    const sums = data.reduce((acc, { status, amount }) => {
      acc[status] = acc[status] || 0;
      acc[status] += amount;
      return acc;
    }, {});
  
    return Object.keys(sums).map(key =>
  ({ name: key, value: sums[key] }));
  }
  
  // Vous pouvez également mettre vos données de transactions directement ici pour l'exemple :
  export const transactions = [
  { status: 'completé', amount: 100 },
  { status: 'en cours', amount: 200 },
  { status: 'completé', amount: 300 },
  { status: 'annulé', amount: 400 },
  { status: 'en cours', amount: 150 }
  ];