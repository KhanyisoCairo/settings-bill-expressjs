let assert = require("assert");
let settingsbill = require("../settings-bill");



describe('getActualCost function', function () {


    it("should return the actual cost for call total", function () {


        let getCost = settingsbill();
        getCost.setCallCost(2.55)

        assert.deepEqual(getCost.getCallCost(), 2.55);
    })

    it("should return the actual cost for sms total", function () {
        let getCost = settingsbill();
        getCost.setSmsCost(0.75)

        assert.deepEqual(getCost.getSmsCost(), 0.75);
    })
    it("should return the actual cost for call and sms total", function () {
        let getCost = settingsbill();
        getCost.setCallCost(2.55)
        getCost.setSmsCost(0.75)

        assert.deepEqual(getCost.getCallCost(), 2.55);
        assert.deepEqual(getCost.getSmsCost(), 0.75);
    })


    it("should return the call, sms, warning and critical level", function () {
        let getCost = settingsbill();


        getCost.updateSettings({
            callCost: 7,
            criticalLevel: 5,
            smsCost: 3,
            warningLevel: 3
        })

        assert.deepEqual({

            callCost: 7,
            criticalLevel: 5,
            smsCost: 3,
            warningLevel: 3,


        }, getCost.getValues());

    })
    it('should return the call and sms cost ', function () {

        let getCost = settingsbill();


        getCost.updateSettings({
            callCost: 7,
            smsCost: 5,
            warningLevel: 20,
            criticalLevel: 30,
        })

        getCost.getActualCost('call')
        getCost.getActualCost('sms')

        assert.deepEqual([{
            type: 'call',
            cost: 7,
            timeStamp: new Date(),

        }, {
            type: 'sms',
            cost: 5,
            timeStamp: new Date(),

        }], getCost.getActionList());
    }); new Date()



});
