export function SalesNetProfit(cogs,expense,actualSales){
	return actualSales - (cogs + expense);
}