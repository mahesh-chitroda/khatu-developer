function IndianProductsSales(){
	this.COGS = 0;
	this.Expense = 0;
	this.ActualSales = 0;

	this.IndiaSalesNetProfit = function(){
		return SalesNetProfit(this.COGS,this.Expense,this.ActualSales);
	}
}