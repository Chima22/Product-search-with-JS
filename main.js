const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".products");
    const pname = document.getElementsByTagName("h2");
    const noproduct = document.getElementById("details");
   let check = false;
    for(var i =0; i < pname.length; i++){
        let match = product[i].getElementsByTagName("h2")[0];
       
         if(match){
            let textvalue = match.textContent || match.innerHTML;
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display ="";
            check = true;
            } else{
            product[i].style.display ="none";
           
            } 
            
            if(check == false){
                noproduct.textContent = "no product found!!";
             }else{
                noproduct.textContent = " ";
                // product[i].style.display ="none";
             }
        }
         

        
    }
}
search();
