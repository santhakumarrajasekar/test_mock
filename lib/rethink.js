var rdb = require('rethinkdb');
var dbConfig = require('../config/database');
var mockdata = require('../config/mockdata');
var firewallmockdata = require('../config/firewallmockdata');
var zonesmockdata = require('../config/zonesmockdata');

try {
    var connection = null;
    rdb.connect(dbConfig, function (err, conn) {
        if (err) {
            console.log(err)
            throw err
        }
        connection = conn;
        rdb.dbList()
            .contains(dbConfig.db)
            .do(function (dbExists) {
                return rdb.branch(
                    dbExists, {
                        created: 0
                    },
                    rdb.dbCreate(dbConfig.db)
                );
            })
            .run(connection, function (err) {
                if (err) {
                    console.log(err)
                    throw err
                }
            });
    }).then(function (connection) {
        rdb.db(dbConfig.db).tableList().contains('rules').do(function (tableExists) {
            return rdb.branch(
                tableExists, {
                    created: 0
                },
                rdb.db(dbConfig.db).tableCreate('rules')
            );
        }).run(connection, function (err) {
            if (err) {
                console.log(err)
                throw err
            } else {
                rdb.table("rules").isEmpty().run(connection).then(function (isEmpty) {
                    if (isEmpty) {
                        rdb.table("rules").insert(mockdata.data, {}).run(connection).then(function (result) {
                            return result;
                        });
                    }
                });
            }
        });

        rdb.db(dbConfig.db).tableList().contains('firewall_rules').do(function (tableExists) {
            return rdb.branch(
                tableExists, {
                    created: 0
                },
                rdb.db(dbConfig.db).tableCreate('firewall_rules')
            );
        }).run(connection, function (err) {
            if (err) {
                console.log(err)
                throw err
            } else {
                rdb.table("firewall_rules").isEmpty().run(connection).then(function (isEmpty) {
                    if (isEmpty) {
                        rdb.table("firewall_rules").insert(firewallmockdata.data, {}).run(connection).then(function (result) {
                            return result;
                        });
                    }
                });
            }
        });

        rdb.db(dbConfig.db).tableList().contains('zones').do(function (tableExists) {
            return rdb.branch(
                tableExists, {
                    created: 0
                },
                rdb.db(dbConfig.db).tableCreate('zones')
            );
        }).run(connection, function (err) {
            if (err) {
                console.log(err)
                throw err
            } else {
                rdb.table("zones").isEmpty().run(connection).then(function (isEmpty) {
                    if (isEmpty) {
                        rdb.table("zones").insert(zonesmockdata.data, {}).run(connection).then(function (result) {
                            return result;
                        });
                    }
                });
            }
        });

        module.exports.find = function (tableName, id) {
            return rdb.table(tableName).get(id).run(connection)
                .then(function (result) {
                    return result;
                });
        };

        module.exports.findAll = function (tableName) {
            return rdb.table(tableName).run(connection)
                .then(function (cursor) {
                    return cursor.toArray();
                });
        };

        module.exports.findBy = function (tableName, fieldName, value) {
            return rdb.table(tableName).filter(rdb.row(fieldName).eq(value)).run(connection)
                .then(function (cursor) {
                    return cursor.toArray();
                });
        };

        module.exports.findIndexed = function (tableName, query, index) {
            return rdb.table(tableName).getAll(query, {
                index: index
            }).run(connection)
                .then(function (cursor) {
                    return cursor.toArray();
                });
        };

        module.exports.save = function (tableName, object, insertOptions) {
            if (!insertOptions) {
                insertOptions = {};
            }

            return rdb.table(tableName).insert(object, insertOptions).run(connection)
                .then(function (result) {
                    return result;
                });
        };

        module.exports.edit = function (tableName, id, object) {
            return rdb.table(tableName).get(id).update(object).run(connection)
                .then(function (result) {
                    return result;
                });
        };

        module.exports.destroy = function (tableName, id) {
            return rdb.table(tableName).get(id).delete().run(connection)
                .then(function (result) {
                    return result;
                });
        };

        module.exports.findByCustomerAndDevice = function (tableName, customerValue, deviceValue) {
            return rdb.table(tableName).filter(rdb.row("customer").eq(customerValue).and(rdb.row("device").eq(deviceValue))).run(connection)
                .then(function (cursor) {
                    return cursor.toArray();
                });
        };

        module.exports.findByCustomerAndSite = function (tableName, customerValue, siteValue) {
            return rdb.table(tableName).filter(rdb.row("customer").eq(customerValue).and(rdb.row("site").eq(siteValue))).run(connection)
                .then(function (cursor) {
                    return cursor.toArray();
                });
        };

        // find record and update in available status
        module.exports.update = function (tableName, filter, updateValue) {
            return rdb.table(tableName).filter(filter).update(updateValue)
                .run(connection, function (err, result) {
                    return result;
                });
        };
    });
} catch (e) {
    console.log(e)
}