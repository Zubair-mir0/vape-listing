const vapeData = [
    {   
        name: "VMATE E",
        model: "12XD",
        color: "black",
        imagw:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-bL4PkuMRusihbrfyMIhZItBVbJkv9z19qQ&s",
    },
    {
        name: "ursa baby",
        model: "12XD",
        color: "grey",
        imagw:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScB6Mm0kPOOcOqrx68gsNa7NlGXkJfgWNwoQ&s",
    },
    {
        name: "drag nano 2",
        model: "12XD",
        color: "sky blue",
        imagw:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cCuxCYAYvaTX-Fjeoz9UZ-1X5v4nB7l0Bw&s"
    },
    {
        name: "argus p1",
        model: "12XD",
        color: "black",
        imagw: "https://e-litecigs.com/cdn/shop/products/voopoo-argus-p1-kit__2_convert.io.webp?v=1671521748",
    }
];
 const dropdownBtn = document.getElementById("dropdownBtn");
const dropdown = document.getElementById("dropdown");
const dropdownSelect=document.getElementById("dropdownSelect")
const filterBtn = document.getElementById("filterBtn");
const filter= document.getElementById("filter");
const container= document.getElementById("container");
const searchInput =document.getElementById("search");

dropdownBtn.addEventListener('click',()=>{
    dropdown.classList.toggle('show');
console.log(dropdown.classList)
});

dropdownSelect.addEventListener('change',()=>{
   console.log( dropdownSelect.value)
});
function filterData(x){
    console.log(x)

let Data =vapeData;
const search = searchInput.value.toLowerCase().trim();

if(search && x !== 'whole'){
   Data= Data.filter((vape)=>
  vape[x] &&  vape[x].toLowerCase().includes(search)
    );
}
else{
Data = Data.filter((vape)=>

    vape.name.toLowerCase().includes(search)||
    vape.model.toLowerCase().includes(search)||
    vape.color.toLowerCase().includes(search),

)
}
populateVapeData(Data)

}
function populateVapeData(creator){
    container.innerHTML="";


    creator.forEach(vape => {
        
        const contain = document.createElement("div");
    contain.className ="item";
    
    contain.innerHTML=`
    <img src=${vape.imagw}></img>
    <h3> ${vape.name}</h3>
    <p> ${vape.model}<p/>
    <p> ${vape.color}<p/>
    
    `
    container.appendChild(contain);
});



}
populateVapeData(vapeData);
filterBtn.addEventListener("click",()=>{

    const Check= dropdownSelect.value;


    filterData(Check)
});
dropdownSelect.addEventListener('change', () => {
    filterData(dropdownSelect.value);
});

const ascend= document.getElementById("ascend");
const descend = document.getElementById("descend");

ascend.addEventListener("click",()=>{
    vapeData.sort((a,b)=> a.name.localeCompare(b.name));
    populateVapeData(vapeData)
});
descend.addEventListener("click", ()=>{
    vapeData.sort((a,b)=>
        b.name.localeCompare(a.name));
        populateVapeData(vapeData)
    
})
