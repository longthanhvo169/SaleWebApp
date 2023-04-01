/*
 * Copyright © 2023 by Seven System Viet Nam, JSC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited Proprietary and confidential
 *
 * Write clean code and you can sleep well at night ¯\(ツ)/¯
 *
 * Written by long.vt@7-eleven.vn
 */

var stompClient = null;

$(document).ready(function() {
    connect();
});

function connect() {
    var socket = new SockJS('http://localhost:8082/ws_sales');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function() {
        console.log('Web Socket is connected');
        stompClient.subscribe('/topic/sale_topic', function(data) {
            var jsonArray = JSON.parse(data.body);
            convertTable(jsonArray);
        });
    });
}

// Function to convert JSON data to HTML table
function convertTable(jsonData) {

    // Get the container element where the table will be inserted
    var tblData = $("#tblData");


    // Create a table element and header row
    var table = $("<table>");
    var headerRow = $("<tr>");
    headerRow.append($("<th>").text("#"));
    for (var key in jsonData[0]) {
        headerRow.append($("<th>").text(key));
    }
    table.append(headerRow);

    // Add rows to the table for each JSON object
    $.each(jsonData, function(index, jsonObject) {
        var dataRow = $("<tr>");
        dataRow.append($("<td>").text(index + 1));
        for (var key in jsonObject) {
            dataRow.append($("<td>").text(jsonObject[key]));
        }
        table.append(dataRow);
    });

    tblData.empty();
    tblData.append(table);
}