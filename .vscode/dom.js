


function submitform() {


    // get person details

    const name = document.getElementById("name").value;
    const Mobile_num = document.getElementById("Mobile_num").value;
    const email = document.getElementById("email").value;   

    // item details

    let biryani = document.getElementById("biryani").value;
    let biryani_price = parseFloat(document.getElementById("Bprice").value);

    let starter = document.getElementById("staters").value;
    let starter_price = parseFloat(document.getElementById("Sprice").value);

    let rotis = document.getElementById("rotis").value;
    let roti_price = parseFloat(document.getElementById("Rprice").value);

    let cakes = document.getElementById("cakes").value;
    let cakes_price = parseFloat(document.getElementById("Cprice").value);

    // GST details.

    let gstPercentage = document.getElementById("gst").value;


    // Input Validation.

    if(isNaN(biryani) || isNaN(biryani_price) || isNaN(starter) || isNaN(starter_price) || isNaN(rotis) || isNaN(roti_price) || isNaN(cakes) || isNaN(cakes_price) || isNaN(gstPercentage)){
        alert("Please enter a valid values");
        return;
    }


    // calculate total amount

    let total = ((biryani * biryani_price) + (starter * starter_price) + (rotis * roti_price) + (cakes * cakes_price));

    // gst amount.

    let gst = (gstPercentage/100)*total;

    // total with gst.

    let totalwithGST = total + gst;

    // add tip

    let tip = 0;

    if(totalwithGST <= 2000){
        tip = 100;
    }else if(totalwithGST > 2000 && totalwithGST <= 3000){
        tip = 200;
    }else if(totalwithGST > 3000 && totalwithGST <= 4000){
        tip = 400;
    }else{
        tip = 500;
    }

    let finalTotal = totalwithGST + tip;


    const displayResult = "Name: " + name + "<br> Mobile Number: " + Mobile_num + "<br> Email: " + email + 

                        "<br> <br> <br> Biryani Qty: " + biryani +"<br> Biriyani price: " + biryani_price + 

                        "<br> <br> Starter Qty: " + starter + "<br> Starter price" + starter_price +
                        
                        "<br>  <br>Roti Qty: " + rotis +"<br> Roti price: " + roti_price +
                        
                        "<br> <br> Cakes Qty" + cakes + "<br> cakes price: " + cakes_price + 
                        
                        "<br> <br> Total amount with GST: " + totalwithGST.toFixed(2) +

                         "<br>GST: " + gstPercentage + "%" + gst.toFixed(2) + 
                         
                         "<br> Tip: " + tip.toFixed(2)+ " <br> Final Total: " + finalTotal.toFixed(2);


    //  Displaying result in disply_res.

    let disply_res = document.getElementById("disply_res");
    disply_res.innerHTML = displayResult;

}