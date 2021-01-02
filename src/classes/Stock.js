class Stock {
  constructor(id, name, ticker, sector, volatility) {
    this.id = id;
    this.name = name;
    this.ticker = ticker
    this.sector = sector;
    this.volatility = volatility;
    stocksArray.push(this);
  }
}
var stocksArray = [];
export default stocksArray;
var BCT = new Stock(1, "Blue Cell Technologies", "BCT", "Technology", 1.00);
console.log(stocksArray);
