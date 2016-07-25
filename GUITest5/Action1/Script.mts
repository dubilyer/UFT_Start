﻿SystemUtil.Run "iexplore.exe", "www.google.com"

'Set value in Google Search Box
Browser("title:=Google").Page("title:=Google").WebEdit("name:=q","type:=text").Set "automation repository"

'Click on Search button
Browser("title:=Google").Page("title:=Google").WebButton("class:=lsb").Click
 
'Find out the number of search results displayed
sResults = Browser("title:=.*Google Search").Page("title:=.*Google Search").WebElement("html id:=resultStats").GetROProperty("innertext")
 
'Display the Result in a message box
Msgbox sResults

