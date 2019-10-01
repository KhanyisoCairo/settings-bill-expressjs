const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const SettingsBill = require('./settings-bill');
var moment = require('moment');

var app = express();

const settingsBill = SettingsBill();

app.engine('handlebars', exphbs({ defaultLayout: 'main',
helpers:{
    'timestamp' : function(){

        return moment(this.timeStamp).fromNow();
    }

} }));


app.set('view engine', 'handlebars');

app.use(express.static('public'));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())




//  Routes
app.get('/', function (req, res) {
    let values = settingsBill.getAllTotals()

    res.render('index', { totals: values, settingsBill: settingsBill.getValues(), color: settingsBill.showColorLevel() });
});

app.get('/action', function (req, res) {
    res.redirect('/');
});
app.post('/settings', function (req, res) {
    settingsBill.updateSettings(req.body)
    res.redirect("/");
});

app.post('/action', function (req, res) {
    const actionType = req.body.actionType
    settingsBill.getActualCost(actionType)
    //    settingsBill.populateActionList(req.body.actionType);
    res.redirect("/");

});
app.get('/actions/:actionType', function (req, res) {
    const actionType = req.params.actionType

    res.render('actions', { actions: settingsBill.getActionList()  });
});

app.get('/actions', function (req, res) {
    
    res.render('actions', { actions: settingsBill.getActionList() });
    console.log(settingsBill.getActionList());
    
});

const PORT = process.env.PORT || 3011;
app.listen(PORT, function () {

    console.log("App started at port:", PORT)

});