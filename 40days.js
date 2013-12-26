// ==UserScript==
// @name       40 days of dating
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://fortydaysofdating.com/*
// @copyright  2012+, You
// ==/UserScript==

search_items = ["Did you see",
                "What did y’all do together?",
               "Did anything interesting happen?",
               "Did you learn anything new about",
               "How do you feel about this relationship/project right now?",
               "Is there anything that you want to do differently?",
               "Additional comments?"];

function isQuestion(paragraph){
	for(var i = 0;i<search_items.length;i++) 
        if(paragraph.innerHTML.indexOf(search_items[i])!=-1) 
            return true;
	return false;
};
numOfQuestions = $('.col.first>p').length;
$(".col.first").css("text-align","center");
$(".col.first").parent().css("-webkit-column-count","1");
for(var i = 0;i<numOfQuestions;i++){
    $('.col.first')[0].appendChild($('.col.first>p')[0]);
    while(!isQuestion($('.col.first>p')[0])) $('.col.first')[0].appendChild($('.col.first>p')[0]);
    $('.col.first')[0].appendChild($('.col.second>p')[0]);
    while(!isQuestion($('.col.second>p')[0])) $('.col.first')[0].appendChild($('.col.second>p')[0]);
}