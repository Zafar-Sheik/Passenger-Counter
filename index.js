let count = 0 ; 

//Regular Function for Increment
function increment(){
    count++;
    document.getElementById("count-el").innerText = count;    
    console.log("btn-inc clicked");
}

//Write with Arrow Function for Increment and Decrement
const decrement = () => {
    if (count <= 0) {

        console.log("Error: People < 0")               
    }
    else{
        count--;
        document.getElementById("count-el").innerText = count;   
    }

    console.log("btn-dec clicked");
}

//Write Arrow Function for Save
const save = () => {


    const date = new Date().toLocaleString();

    let message = "Saved: " + count + " people: " + date;
    document.getElementById("saved-data-el").innerText = message;

    console.log(message)


}