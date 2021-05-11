var radioBillAddBtn = document.querySelector(".radioBillAddBtn")
//get a reference to the add button

//create a variable that will keep track of the total bill


//add an event listener for when the add button is pressed
function textBillTotal(){
    var callsTotals = 0;
    var smsTotalse = 0;
    //var bill = document.querySelector(".billItemTypeRadio").value;
    // get the value entered in the billType textfield
    //console.log(bill)
    //var billTypeEntered = bill.trim();
    // update the correct total
    function doCall(str){
         if (str  === "call"){
            callsTotals += 2.75
            return callsTotals
        } 
        else{
            return "please enter call string"
        }
    }

    function doSms(str){
         if (str  === "sms"){
            return smsTotalse += 0.75;
        }
        return "please enter sms string"
    }
    function getSmsTotal(){
        return smsTotalse
    }
    function getCallsTotal(){
        return callsTotals
    }
    function overallTotal(){
       return smsTotalse+ callsTotals
    }
       
        
    function getClass(){
        if (overallTotal() >= 50){
            // adding the danger class will make the text red
            return ("danger");
        }
        else if (overallTotal() >= 30){
            return ("warning");
        }
    }
    return{
        doCall,
        doSms,
        getCallsTotal,
        getSmsTotal,
        overallTotal,
        getClass
    }
    //update the totals that is displayed on the screen.
   /* callsTotalElem.innerHTML = callsTotals.toFixed(2);
    console.log(callsTotalElem)
    smsTotalElem.innerHTML = smsTotalse.toFixed(2);
    console.log(smsTotalElem)
    var totalCost = callsTotals + smsTotalse;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    console.log(totalCostElem) */
    
    //color the total based on the criteria
   
}