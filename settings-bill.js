module.exports = function FactoryBillSettings() {


    var callCost = 0.00;
    var smsCost = 0.00;
    var warningLevel = 0.00;
    var criticalLevel = 0.00;
    let newCallTotal = 0.00;
    let newSmsTotal = 0.00;
    let newGrandTotal = 0.00;
    var actionList = [];


    function updateSettings(billSettings) {


        callCost = Number(billSettings.callCost);
        smsCost = Number(billSettings.smsCost);
        warningLevel = Number(billSettings.warningLevel);
        criticalLevel = Number(billSettings.criticalLevel);
        console.log(billSettings)
    }


    function getActualCost(theAction) {

        let costOfActionAtThisPoint = 0;

        if (newGrandTotal < criticalLevel) {

            if (theAction === "sms") {

                let smsTemp = getTotalSms() + smsCost;
                setSmsTotal(smsTemp)
                let action = {
                    type: theAction,
                    cost: smsCost.toFixed(2),
                    timeStamp: new Date()

                };
                actionList.push(action);
            }

            if (theAction === "call") {

                let callTemp = getTotalCall() + callCost;
                setCallTotal(callTemp)
                let action = {
                    type: theAction,
                    cost: callCost.toFixed(2),
                    timeStamp: new Date()

                };
                actionList.push(action);
            }

            setTotal(getTotalSms(), getTotalCall());

            return Number(costOfActionAtThisPoint)
        }

    }


    function getAllTotals() {
        return {
            newCallTotal: newCallTotal.toFixed(2),
            newSmsTotal: newSmsTotal.toFixed(2),
            newGrandTotal: newGrandTotal.toFixed(2)
        }
    }

    function getActionList(type) {
        console.log(type);
        let newList = [];
        if (type == undefined || type == "") {

            return actionList;
        }
        else {
            for (let i = 0; i < actionList.length; i++) {
                const element = actionList[i];
                if (element.type == type) {
                    newList.push(element)
                }
            }
        }
        return newList;
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
        return callCost.toFixed(2);

    }

    function setSmsCost(sms) {
        smsCost = sms;

    }

    function getSmsCost() {
        return smsCost.toFixed(2);

    }

    function setWarningLevel(warning) {
        warningLevel = warning;

    }
    function getWarningLevel() {

        return newGrandTotal >= warningLevel;
    }

    function setCriticalLevel(critical) {

        criticalLevel = critical;

    }

    function getCriticalLevel() {
        return newGrandTotal >= criticalLevel;

    }



    function getTotalCall() {

        return newCallTotal;
    }


    function getTotalSms() {

        return newSmsTotal;
    }

    function setTotal(smsTotal, callTotal) {
        newGrandTotal = smsTotal + callTotal

    }

    function TotalCost() {

        return getCall + getSms;
    }




    function showColorLevel() {


        if (newGrandTotal == 0) {
            return ""
        } else
            if (newGrandTotal >= warningLevel && newGrandTotal < criticalLevel) {

                return "warning";
            }
            else if (newGrandTotal >= criticalLevel) {

                return "danger";
            }

    }
    return {
        getActualCost,
        setCallCost, getCallCost,
        setSmsCost, getSmsCost,
        setSmsTotal, setCallTotal,
        setWarningLevel, getWarningLevel,
        setCriticalLevel, getCriticalLevel,
        getTotalCall, getTotalSms,
        TotalCost,
        showColorLevel,
        updateSettings,
        getAllTotals,
        getValues,
        getActionList
    }
}