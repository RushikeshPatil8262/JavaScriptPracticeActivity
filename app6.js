const url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
     let list = document.querySelector("#list");
     list.innerText = "";
     for (col of colArr) {
        console.log(col.name);

    let li = document.createElement("li");
    li.innerText = col.name;
    list.appendChild(li);
    }
}

async function getColleges (country){
    try {
        let res = await axios.get(url+country);
        return res.data;
    }
    catch(e) {
        console.log("error:", e);
        return [];
    }
}









// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getImage ();
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//        return res.data.message;
//     }
//     catch (e) {
//         console.log("ERROR -", e);
//         return "/";
//     }
// }

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     //console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//        return res.data.fact;
//     }
//     catch (e) {
//         console.log("ERROR -", e);
//         return "No fact found";
//     }
// }

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
//     }
//     catch (e) {
//         console.log("ERROR -", e);
//     }

//     console.log("Bye Bye");
// }