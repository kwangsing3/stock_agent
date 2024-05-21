SELECT 
除權息日期, 
股票代號,
股票名稱, 
除權息前收盤價, 
權值息值, 
除權息參考價, 
ROUND(( REPLACE(權值息值, ',', '') /  REPLACE(除權息前收盤價, ',', '') *100),2)  as `當期殖利率`,
最近一次申報每股淨值,
權息
FROM stock_agent_history.yields 
;
