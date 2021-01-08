class Stock {
  constructor(id, name, price, ticker, sector, volatility) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ticker = ticker;
    this.sector = sector;
    this.volatility = volatility;
    stocksArray.push(this);
  }
}
var stocksArray = [];
export default stocksArray;
//sectors: technology, financials, real estate, health care, energy, general
var BCT = new Stock(0, "Blue Cell Technologies", 10, "BCT", "Technology", .65);
var RNG = new Stock(1, "Ranger Tech", 3.22, "RNG", "Technology", .88);
var PXC = new Stock(2, "Pixel Cat", 144.11, "PXC", "Technology", .42);
var TRT = new Stock(3, "Tarryon Tech", 22.21, "TRT", "Technology", .67);
var CLY = new Stock(4, "Claycom", 200, "CLY", "Technology", .72);
var PDR = new Stock(5, "Peddle-Rich Tech Holdings", 44, "PDR", "Technology", .75);
var CYN = new Stock(6, "Cynex", .88, "CYN", "Technology", .99);
var GTI = new Stock(7, "GutiNet", 6, "GTI", "Technology", .94);
var BCT = new Stock(8, "Bicet", 3.15, "BCT", "Technology", .91);
var ZNN = new Stock(9, "Zoonet", 10, "ZNN", "Technology", .90);
var QRR = new Stock(10, "Quarray Banking", 92, "QRR", "Financials", .50);
var BLK = new Stock(11, "Blackman", 112, "BLK", "Financials", .43);
var TSB = new Stock(12, "Tanner Smidget Bank", 75, "TSB", "Financials", .30);
var STH = new Stock(13, "Southland Bank", 244, "STH", "Financials", .20);
var NEB = new Stock(14, "New Era Banking", 130, "NEB", "Financials", .40);
var PIC = new Stock(15, "Pickerton Co", 80, "PIC", "Financials", .18);
var QRR = new Stock(16, "Kenneth Crystal Bank", 350, "KCB", "Financials", .15);
var JDT = new Stock(17, "JD Tyne Bank", 155, "JDT", "Financials", .46);
var PSX = new Stock(18, "Peoples Site Exchange", 90, "PSX", "Financials", .40);
var WRB = new Stock(19, "Western Regional Bank", 189, "WRB", "Financials", .34);
var REX = new Stock(20, "Real Estate Exchange Corp", 30, "REX", "Real Estate", .82);
var RRE = new Stock(21, "Reynolds Real Estate", 20, "RRE", "Real Estate", .55);
var HOS = new Stock(22, "Housing of the South", 25, "HOS", "Real Estate", .55);
var TUR = new Stock(23, "Turner Regional", 45, "TUR", "Real Estate", .48);
var BRE = new Stock(24, "Boston Real Estate", 23, "BRE", "Real Estate", .60);
var SPM = new Stock(25, "Saprin May", 90, "SPM", "Real Estate", .35);
var OLX = new Stock(26, "Ollex", 30, "OLX", "Real Estate", .51);
var REX = new Stock(27, "Old Republic Housing", 60, "ORH", "Real Estate", .85);
var REX = new Stock(28, "Pacer and Swiss", 200, "PAS", "Real Estate", .45);
var SEW = new Stock(29, "Seward Real Estate Group", 36, "SEW", "Real Estate", .58);
var PIN = new Stock(30, "Pinecel Health", 8, "PIN", "Health Care", .60);
var PIN = new Stock(31, "Pinecel Health", 8, "PIN", "Health Care", .60);
var PIN = new Stock(32, "Pinecel Health", 8, "PIN", "Health Care", .60);
var PIN = new Stock(33, "Pinecel Health", 8, "PIN", "Health Care", .60);
var PIN = new Stock(34, "Pinecel Health", 8, "PIN", "Health Care", .60);
var PIN = new Stock(35, "Pinecel Health", 8, "PIN", "Health Care", .60);
var PIN = new Stock(36, "Pinecel Health", 8, "PIN", "Health Care", .60);
var PIN = new Stock(37, "Pinecel Health", 8, "PIN", "Health Care", .60);
var PIN = new Stock(38, "Pinecel Health", 8, "PIN", "Health Care", .60);
var PIN = new Stock(39, "Pinecel Health", 8, "PIN", "Health Care", .60);
var CRY = new Stock(40, "Cryon Energy", 130, "CRY", "Energy", .70);
var CRY = new Stock(41, "Cryon Energy", 130, "CRY", "Energy", .70);
var CRY = new Stock(42, "Cryon Energy", 130, "CRY", "Energy", .70);
var CRY = new Stock(43, "Cryon Energy", 130, "CRY", "Energy", .70);
var CRY = new Stock(44, "Cryon Energy", 130, "CRY", "Energy", .70);
var CRY = new Stock(45, "Cryon Energy", 130, "CRY", "Energy", .70);
var CRY = new Stock(46, "Cryon Energy", 130, "CRY", "Energy", .70);
var CRY = new Stock(47, "Cryon Energy", 130, "CRY", "Energy", .70);
var CRY = new Stock(48, "Cryon Energy", 130, "CRY", "Energy", .70);
var CRY = new Stock(49, "Cryon Energy", 130, "CRY", "Energy", .70);
var POR = new Stock(50, "Portland Railroad Co", 35, "POR", "General", 1.05);
var POR = new Stock(51, "Portland Railroad Co", 35, "POR", "General", 1.05);
var POR = new Stock(52, "Portland Railroad Co", 35, "POR", "General", 1.05);
var POR = new Stock(53, "Portland Railroad Co", 35, "POR", "General", 1.05);
var POR = new Stock(54, "Portland Railroad Co", 35, "POR", "General", 1.05);
var POR = new Stock(55, "Portland Railroad Co", 35, "POR", "General", 1.05);
var POR = new Stock(56, "Portland Railroad Co", 35, "POR", "General", 1.05);
var POR = new Stock(57, "Portland Railroad Co", 35, "POR", "General", 1.05);
var POR = new Stock(58, "Portland Railroad Co", 35, "POR", "General", 1.05);
var POR = new Stock(59, "Portland Railroad Co", 35, "POR", "General", 1.05);




console.log(stocksArray);
