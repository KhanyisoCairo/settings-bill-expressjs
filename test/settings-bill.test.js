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



});
describe('The limit level function', function () {

    it("should return warninglevel the limit has  been reached", function () {
        let limitLevel = settingsbill();
        limitLevel.setWarningLevel(2.55)


        assert.deepEqual(limitLevel.getWarningLevel(), 2.55);
    })

   



});