"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Evelyn Duarte
   Date: 3/2/19
   
   Filename: hg_report.js
	
*/
// The HTML is being put into a variable named gameReport, while the variables of each are being concatinated.
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2><img src='hg_" + itemID + ".png' alt='" + itemID + "' id = 'gameImg'/><table> <tr> <th> Product ID </th><td>" + itemID + "</td> </tr> <tr> <th>List Price</th> <td>" + itemPrice + "</td></tr> <tr> <th>Platform</th><td>" + itemPlatform + "</td></tr><tr><th>ESRB Rating</th> <td> " + itemESRB + "</td></tr> <tr> <th>Condition</th><td> " + itemCondition + "</td> </tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

// The document with get data within the article tag name.
document.getElementsByTagName('article')[0].innerHTML = gameReport;

// The variable has an initial value of 0 and ratingCount is equal to ratings.length.
var ratingsSum = 0;
var ratingsCount = ratings.length;

// A for loop was created saying the index value begins at zero, less than the ratingsCount, and counts by 1.
for (var i = 0; i < ratingsCount; i++) {
    ratingsSum += ratings[i];
}
// The ratinsSum is being divided by the ratingsCount. While the ratingReport variable is being used to equal HTML code.
var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport = "<h1>Customer Reviews</h1> <h2>" + ratingsAvg + "out of 5 stars(" + ratingsCount + " reviews)</h2>";
// Another for loop which will do the same as the last and a j is used so the i and j will not be the same and the computer will not get confused.
for (var i = 0; i <= 2; i++) {
    ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1> <table> <tr><th>By</th><td>" +
        ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr><tr><th>Rating</th><td>";
    for (var j = 1; j <= ratings[i]; j++) {
        ratingReport += "<img src='hg_star.png'>";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>";
}

document.getElementsByTagName('aside')[0].innerHTML = ratingReport;