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


    // it("should return the  cost for call and sms total and grand total", function () {
    //     let getCost = settingsbill();
    //     getCost.setCallCost(2.55)
    //     getCost.setSmsCost(0.75)
    //     getCost.setTotal(3.55)

    //     assert.deepEqual(getCost.getCallCost(), 2.55);
    //     assert.deepEqual(getCost.getSmsCost(), 0.75);
    //     assert.deepEqual(getCost.setTotal(), 3.55);
    // })
    

});
