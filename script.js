const request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data = request.response;
    var result = JSON.parse(data)
    var asia = result.filter((ele)=>ele.region === "Asia");
    console.log(asia);
    var population2l =  result.filter((ele)=>ele.population<=200000);
    console.log(population2l);
   result.forEach((ele)=>console.log(ele.name, ele.flags.png, ele.capital));
    var totalPopulation = result.reduce((sum,ele)=>sum+ele.population,0);
    console.log(totalPopulation);
    var dollarContries = result.filter((ele)=>ele.currencies.USD.name === "United States dollar")
    console.log(dollarContries);
   

}