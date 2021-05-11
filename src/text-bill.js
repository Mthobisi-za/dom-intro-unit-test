function textBillTotals(){
    var callsTo_ = 0;
    var smsTota_ = 0;
    function doCalls_1(){
       return callsTo_ += 2.75
    }
    function makeSmss_1(){
        return smsTota_ += 0.75;
    }
    function getTotalCallss_1(){
        return callsTo_
    }
    function getTotalSmss_1(){
        return smsTota_
    }
    function getTotals_1(){
        return callsTo_+smsTota_
    }
    function getClasss_1(){
        if (getTotals_1() >= 50){
            return "danger";
        }
        else if (getTotals_1() >= 30){
            return "warning";
        }
    }
    return{
        doCalls_1,
        makeSmss_1,
        getTotalCallss_1,
        getTotalSmss_1,
        getTotals_1,
        getClasss_1
    }
    
  /*
    var callsTotalElem = document.querySelector(".callTotalOne");
    var smsTotalElem = document.querySelector(".smsTotalOne");
    var totalCostElem = document.querySelector(".totalOnes");
    //update the totals that is displayed on the screen.
    callsTotalElem.innerHTML = callsTotal.toFixed(2);
    smsTotalElem.innerHTML = smsTotall.toFixed(2);
    var totalCost = callsTotal + smsTotall;
    totalCostElem.innerHTML = totalCost.toFixed(2);
    console.log(totalCostElem)
    */
    //color the total based on the criteria
    
}

