
// create a variables that will keep track of all three totals.



/*--total output spaces-----*/


function billsettings() {
   var callPrice = 0;
    var smsPrice = 0;
    var warningPrice = 0;
    var dangerPrice = 0;
    // the updating variable
    var callT = 0;
    var smsT = 0;

    //settings first
    function setCallCost(num){
        return callPrice = callPrice + num;
    }
    function setSmsCost(num){
        return smsPrice = smsPrice + num;
    }
    function setLevel(num){
        return warningPrice = warningPrice + num;
    }
    function setDanger(num){
        return dangerPrice = dangerPrice + num;
    }
    //get the settings
    function getCallCost(){
        return callPrice
    }
    function getSmsCost(){
        return smsPrice 
    }
    function getLevel(){
        return warningPrice
    }
    function getDanger(){
        return dangerPrice
    }
        ///calculate
    function getSmsTotals(){
         smsT =smsT + getSmsCost()
         return smsT
    }
    function getCallTotals(){
          callT = callT + getCallCost()
          return callT
    }
    function getOverallT(){
        return callT + smsT;
    }
    function getClass(){
        if (getOverallT() >= warningPrice && getOverallT() < dangerPrice) {
            return "warning";
        } else if (getOverallT() >= dangerPrice) {
            return "danger";
        }
    }
    return{
         setCallCost,
        setSmsCost,
        setLevel,
        setDanger,
        getCallCost,
        getSmsCost,
        getDanger,
        getLevel,
        getSmsTotals,
        getCallTotals,
        getOverallT,
        getClass
       
    }
   
}
/*
function settingsCalculations () {
    console.log('IM CONNECTED')
    // have a reference
    const radioBtn = document.querySelector(".billItemTypeWithSettings:checked");
    if (totalSet < dangerPrice) {
        if (radioBtn.value === 'sms') {
            smsTotalSet += smsPrice;
            totalSet += smsPrice;
        } else if (radioBtn.value === 'call') {
            callTotalSet += callPrice;
            totalSet += callPrice;
        }

    } else {
        smsTotalSet += 0;
        callTotalSet += 0;
        totalSet += 0;
    }
    console.log(callTotalSet)
    callSetOutput.innerHTML = callTotalSet.toFixed(2);
    smsSetOutput.innerHTML = smsTotalSet.toFixed(2);
    totalSetOutput.innerHTML = totalSet.toFixed(2);

    totalSetOutput.classList.remove("warning");
    totalSetOutput.classList.remove("danger");
    if (totalSet >= warningPrice && totalSet < dangerPrice) {
        totalSetOutput.classList.add("warning");
    } else if (totalSet >= dangerPrice) {
        totalSetOutput.classList.add("danger");
    }
}
updateSetBtn.addEventListener("click", updateSettings);
addBtnSet.addEventListener("click", settingsCalculations);
*/