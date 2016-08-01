Set localPage = pageFactory("main")
With localPage	
	Set userElement = .WebElement ("xpath:=/html/body/header/nav/ul/li[2]/a/span")
	waitAndClick userElement
	waitAndClick .WebElement("xpath:=//*[@id='loginMiniTitle']/label[2]")
	waitForInnerHtml userElement, "", 5
	If Trim (userElement.GetROProperty("innerHtml"))<>"" Then
		Reporter.ReportEvent micFail, "Log of filed", ""
	End If	
	Browser("Advantage Shopping").Close
End With
