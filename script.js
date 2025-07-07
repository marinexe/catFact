const cont = document.getElementById("cont");
const cc = document.getElementById("cc");
const btn = document.getElementById("btn");
const url = "https://catfact.ninja/fact?max_length=1000";
let timerTM;
let isTyping=false;
  async function fetchCatFact() {
  try {  
     const response = await fetch(url);
     const data = await response.json();
     return data.fact;
    }
    catch {
        console.error("Error fetching cat fact:");
     }
        }
    fetchCatFact();
    btn.addEventListener("click",async()=>{ 
        if (isTyping) return;
        const fact = await fetchCatFact();
         typeWritter(fact);


    })
         
async function typeWritter(fact){


    cont.textContent = "Loading...";
    fact = await fetchCatFact();
    let i = 0;
    cont.textContent="";
    isTyping=true;
     if (!fact || typeof fact !== "string") {
    cont.textContent = "Error loading fact.";
    return;
  }
    function type(){
            if(i<fact.length){
            cont.innerHTML += fact.charAt(i);
            i++;
            setTimeout(type,50);
   }else{
    isTyping=false;
   }
  }

  type();
}



btn.addEventListener("click",function() {   
     btn.classList.add("clicked"); 
    let firstFact = false;
    if(firstFact===false){
    btn.style.fontSize = "large"
    firstFact=true;
    btn.style.top="80%"
    }
    })

