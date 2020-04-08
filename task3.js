

    const bottles_number = prompt("how many bottles u need?");

    
    for(let i = bottles_number; i>=0 ; i--)
    {
        if(i ==0 ){
            alert("No bottles!");
        }else{

            alert(`${i} bottles on the shelf! One has fallen and ${i-1} left`);
        }
    }



