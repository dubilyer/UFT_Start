Set click = Browser("Browser").Page("Page").Link("click")
Set div = Browser("Browser").Page("Page").WebElement("div")
enableActiveX

click.Check CheckPoint("click") @@ hightlight id_;_Browser("Browser").Page("Page").Link("click")_1_;_script infofile_;_ZIP::ssf15.xml_;_
color = div.Object.currentStyle.backgroundColor
expectedColor = DataTable.Value("A", 1)
If color = expectedColor Then
	Reporter.ReportEvent micPass, "Step 1", "Color is Red"
Else 
	Reporter.ReportEvent micFail, "Step 1", "Color isn't " + expectedColor
End If

click.Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("click")_;_script infofile_;_ZIP::ssf15.xml_;_
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf16.xml_;_
a = div.WaitProperty ("visible", "false", 30000) @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("div")_;_script infofile_;_ZIP::ssf13.xml_;_
If (a) Then 
	Reporter.ReportEvent micPass, "Step 2", "Div is invisible!"
Else
	Reporter.ReportEvent micFail, "Step 2", "Div isn't invisible!"
End If
Browser("Browser").Close()
