var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://user:pass@www.host.com:27017/db';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  dbo.createCollection("persone", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");

  dbo.collection("persone").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[0].name);
    console.log(result[0].phone);
    db.close();

  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  var myobj = { name: "Simone", phone: "3930000000" };
  dbo.collection("persone").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 object inserted");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  var myquery = { name: "Simone" };
  var newvalues = { $set: {name: "SimoneNew", phone: "010203" } };
  dbo.collection("persone").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 object updated");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  dbo.collection("persone").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  var query = { name: "Simone" };
  dbo.collection("persone").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  var myquery = { name: 'Simone' };
  dbo.collection("persone").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 object deleted");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("admin");
  dbo.collection("persone").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});
