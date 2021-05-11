  
function calculate(){
      var billString;
        var list = []
        var smsTotal = 0;
        var callTotal = 0;
    function getString(str){
        billString = str
        return str
    };
    
    function splitting(){
    var text = billString.split(',');
        var list = [];
            for (var i = 0; i < text.length; i++) {
                var item = text[i].trim();
                list.push(item);
            }
        return list;
   };
 
    function calculateCost(){
            for (var i=0;i<splitting().length;i++){
                if (splitting()[i] === "call"){
                    callTotal += 2.75;
                }
                else if (splitting()[i] === "sms"){
                    smsTotal += 0.75;
                }
        }
    };
    function getSmsTotal(){
        return smsTotal.toFixed(2)
    };
    function getCallTotal(){
        return callTotal.toFixed(2)
    };
    function getOverallTotall(){
        return smsTotal + callTotal
    };
    function getClass(){
        if(getOverallTotall() >= 30){
          
            return "red";
        }
        else if(getOverallTotall() < 20){
           
            return "black";
        }
         else if(getOverallTotall() >= 20 || getOverallTotall <= 29 ){
            
            return "orange";
        }
    };
    
    return{
        getString,
        splitting,
        calculateCost,
        getSmsTotal,
        getCallTotal,
        getOverallTotall,
        getClass
    }
}
