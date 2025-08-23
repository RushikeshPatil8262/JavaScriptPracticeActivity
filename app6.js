let url = "https://catfact.ninja/fact";

fetch(url)
 .then((res) => {
    return res.json();
 })
 .then((data1) => {
    console.log("data1 =",data1.fact);
    return fetch(url);
 })
 .then((res) => {
    return res.json();
 })
 .then((data2) => {
   console.log("data2 =",data2.fact);
 })
 .catch((err) => {
    console.log("ERROR -", err);
 })