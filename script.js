var list = [];
let topic ="hindi"
let prom = fetch(
  // `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=379b4f33063d461b8ebe5e2c28d3892c&page=1&pagesize=50`
  `https://newsapi.org/v2/top-headlines?country=in&apiKey=379b4f33063d461b8ebe5e2c28d3892c&page=1&pagesize=30`
);
prom.then((value) => {
    return value.json();
  })
  .then((value) => {
    list = value.articles;

    console.log(list);

    // list.map((elem) => {

    //   const container = document.getElementById("container");
    //   const item = document.createElement("div");
    //   item.classList.add("item");
    //   const p = document.createElement("p");
    //   p.innerHTML = elem.title;
    //   item.appendChild(p);
    //   container.appendChild(item);

    // });
    
    const container =document.getElementById("container");
    for (let i = 0; i < list.length; i++) {
      if (list[i].title != "[Removed]") {
        const item = document.createElement("div");
        item.classList.add("item");
        // const c=document.getElement("div");
        const b = document.createElement("img");
        const p = document.createElement("p");
        const a = document.createElement("a");
       
        a.href = list[i].url;
        a.innerHTML = "link";
        a.target = "_blank";
        a.style.color = "white";
        b.classList.add("image")
        b.src=list[i].urlToImage;
        var title=list[i].title;
        var aa=title.slice(0,40)+"...."

        p.innerHTML =aa;
        item.appendChild(b);
        item.appendChild(p);
        item.appendChild(a);
        container.appendChild(item);
        
      }
    }
  });

// async function fetching() {
//   var list = [];
//   var prom = await fetch(
//     "https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=379b4f33063d461b8ebe5e2c28d3892c&page=1&pagesize=50"
//   )
//   var result =await prom.json
//   list= result.title

//       for (let i = 0; i < list.length; i++) {
//         const container = document.getElementById("container");
//         const item = document.createElement("div");
//         item.classList.add("item");
//         const p = document.createElement("p");
//         p.innerHTML = list[i].title;
//         item.appendChild(p);
//         container.appendChild(item);
//       }
//       console.log(list)

// }
// fetching()



//toggle menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
