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

app.use(bodyParser.urlencoded({ extended: false }))


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
    res.redirect("/");
});
app.get('/actions/:actionType', function (req, res) {
    const actionType = req.params.actionType
   

    const actions = settingsBill.getActionList(actionType);
    
    res.render('actions', { actions });
  
    
});

app.get('/actions', function (req, res) {
    
    res.render('actions', { actions: settingsBill.getActionList() });
   
    
});

const PORT = process.env.PORT || 5006;
app.listen(PORT, function () {

    console.log("App started at port:", PORT)

});