var orm = require("./orm.js");

// orm.selectByParty("party_table");
// orm.selectByPartyName("party_table", "Jonny's New Years Party");
orm.findClientByMostParty("clients_table", "party_table");

