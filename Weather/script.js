
//initialiozing all elements constants

const temperature=document.querySelector(".weather1");
const city=document.querySelector(".weather2 p");
const date=document.querySelector(".weather2 span");
const emoji=document.querySelector(".weather3 img");
const weatherfield=document.querySelector(".weather3 span");
const search=document.querySelector(".search");
const form=document.querySelector("form");

//adding Eventlistener to the form
form.addEventListener("submit", searchf);









//default location
let target ="delhi"



//function to fetch data from  weather api
const fetchData=async(target)=>{
 try {
    const url=`https://api.weatherapi.com/v1/current.json?key=2eb5978ede3d42eab3801319230111&q=${target}`
    const response=await fetch(url);
    const data=await response.json();
//    console.log(data);

//Derstructuring
   const {
       current:{temp_c,condition:{text}},
       location:{name,localtime},
     
   }=data
   const emo = 'https:' + data.current.condition.icon; 


   

//caling update function
   updateDom(temp_c,name, emo,text,localtime);
   

   
    
   } catch (error) {
    alert("location not found")
    
   } 


};


//function to update the dom 
function updateDom(temp,cit,emo,text,dati){
    const exactTime=dati.split(" ")[1]
    const exactDate=dati.split(" ")[0]
    const day=getDayFullName(new Date(exactDate).getDay())


    temperature.innerText=temp
    city.innerText=cit
    emoji.src = emo;
    weatherfield.innerText=text
    date.innerText=`${exactTime}-${day}-${exactDate}`
   
    
    // console.log(exactTime);
    // console.log(exactDate);
    // console.log(dati)

   
    // console.log(getDayFullName(6))
   


}

fetchData(target);



//function to search the location
function searchf(e){
    e.preventDefault();
    target=search.value;
//    console.log("search value:"+ target);

    fetchData(target);




}




//function to add name of the day
function getDayFullName(num){
    switch (num) {
        case 0:
            return "sunday"
        case 1:
                return "Monday"  
    
        case 2:
                    return "Tuesday"
        case 3:
                        return "Wednesday"        
        case 4:
                return "thursday"    
        case 5:
                return "friday"    
        case 6:
                return "Saturday"                           
                       
        
        
        
        
            default:
            break;
    }
}
