module.exports = function FactoryBillSettings() {


    var callCost = 0.00;
    var smsCost = 0.00;
    var warningLevel = 0.00;
    var criticalLevel = 0.00;
    let newCallTotal = 0.00;
    let newSmsTotal = 0.00;
    let newGrandTotal = 0.00;
    var actionList = [];

    // var getCall = 0;
    // var getSms = 0;

    function updateSettings(billSettings) {
        callCost = Number(billSettings.callCost);
        smsCost = Number(billSettings.smsCost);
        warningLevel = Number(billSettings.warningLevel);
        criticalLevel = Number(billSettings.criticalLevel);
        console.log(billSettings)
    }


    function getActualCost(theAction) {
        let costOfActionAtThisPoint = 0;
        if (theAction == "sms") {
            let smsTemp = getTotalSms() + smsCost;
            setSmsTotal(smsTemp)
            let action = {
                type: theAction,
                cost: smsTemp,
                //use moment for timestamp
                timeStamp: new Date()
            };
            actionList.push(action);
            // costOfActionAtThisPoint = smsCost;

        }
        if (theAction == "call") {
            let callTemp = getTotalCall() + callCost;
            setCallTotal(callTemp)
            let action = {
                type: theAction,
                cost: callTemp,
                //use moment for timestamp
                timeStamp: new Date()
            };
            actionList.push(action);
        }
        setTotal(getTotalSms(), getTotalCall());
       
        return Number(costOfActionAtThisPoint)


    }

    // function populateActionList(theAction) {
    //     let action = {
    //         type: theAction,
    //         cost: getActualCost(theAction),
    //         //use moment for timestamp
    //         timeStamp: new Date()
    //     };
    //     actionList.push(action);
    // }

    function getAllTotals() {
        return {
            newCallTotal,
            newSmsTotal,
            newGrandTotal
        }
    }

    function setSmsTotal(value) {
        newSmsTotal = value
    }

    function setCallTotal(value) {
        newCallTotal = value
    }

    function getValues() {
        return {
            callCost,
            smsCost,
            warningLevel,
            criticalLevel
        }

    }

    function setCallCost(call) {
        callCost = call;

    }

    function getCallCost() {
        return callCost;

    }

    function setSmsCost(sms) {
        smsCost = sms;

    }

    function getSmsCost() {
        return smsCost;

    }

    function setWarningLevel(warning) {
        warningLevel = warning;

    }
    function getWarningLevel() {

        return warningLevel;
    }

    function setCriticalLevel(critical) {

        criticalLevel = critical;

    }

    function getCriticalLevel() {
        return criticalLevel;

    }

    // function makeCall() {
    //     getCall += callCost;

    // }

    function getTotalCall() {

        return newCallTotal;
    }

    // function makeSms() {
    //     getSms += smsCost;

    // }
    function getTotalSms() {

        return newSmsTotal;
    }

    function setTotal(smsTotal , callTotal) {
        newGrandTotal = smsTotal + callTotal 
    }

    function TotalCost() {

        return getCall + getSms;
    }

    function showColorLevel() {

        if (newGrandTotal >= warningLevel && newGrandTotal < criticalLevel) {

            return "warning";
        }
        else if (newGrandTotal >= criticalLevel) {

            return "danger";
        } else {
            return " ";
        }
    }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setSmsTotal,
        setCallTotal,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        // makeCall,
        getTotalCall,
        // makeSms,
        getTotalSms,
        TotalCost,
        showColorLevel,
        updateSettings,
        // populateActionList,
        getAllTotals,
        getValues,
        getActualCost
    }
}