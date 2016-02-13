var connection = require('./connection.js');

var orm = {
  selectByParty: function(tableInput) {
    var s = 'SELECT party_name FROM ' + tableInput + ' ORDER BY party_cost desc;';
    connection.query(s, function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
 selectByPartyName: function(tableInput, party_name) {
    var s = 'SELECT * FROM ' + tableInput + ' WHERE party_name = ?';
    connection.query(s, [party_name], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findClientByMostParty: function(tableOne, tableTwo) {
        var s = 'SELECT name, COUNT(name) AS count FROM '+tableOne+' LEFT JOIN '+tableTwo+' ON '+tableTwo+'.client_id = '+tableOne+'.id GROUP BY name ORDER BY count desc LIMIT 1';
        connection.query(s, function(err, result) {
          if (err) throw err;
            console.log(result);
        });
    } 
};

module.exports = orm;