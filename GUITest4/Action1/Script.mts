Set click = Browser("Browser").Page("Page").Link("click")
Set div = Browser("Browser").Page("Page").WebElement("div")
enableActiveX

click.Check CheckPoint("click") @@ hightlight id_;_Browser("Browser").Page("Page").Link("click")_1_;_script infofile_;_ZIP::ssf15.xml_;_

'We should use .Object to get to css Values
color = div.Object.currentStyle.backgroundColor
expectedColor = DataTable.Value("A", 1)

If color = expectedColor Then
	Reporter.ReportEvent micPass, "Step 1", "Color is Red"
Else 
	Reporter.ReportEvent micFail, "Step 1", "Color isn't " + expectedColor
End If

click.Click @@ hightlight id_;_Browser("Browser").Page("Page").Link("click")_;_script infofile_;_ZIP::ssf15.xml_;_

'Waiting for browser to load all content
Browser("Browser").Page("Page").Sync @@ hightlight id_;_Browser("Browser").Page("Page")_;_script infofile_;_ZIP::ssf16.xml_;_

'Waiting for property to become false. 30000 - timeout. 
'if div won't become invisible during 30 seconds
'script will continue.
a = div.WaitProperty ("visible", "false", 30000) @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("div")_;_script infofile_;_ZIP::ssf13.xml_;_
If (a) Then 
	Reporter.ReportEvent micPass, "Step 2", "Div is invisible!"
Else
	Reporter.ReportEvent micFail, "Step 2", "Div isn't invisible!"
End If


 @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("1")_;_script infofile_;_ZIP::ssf18.xml_;_
set a= Browser("Browser").Page("Page").WebList("id:=ul").ChildObjects @@ hightlight id_;_Browser("Browser").Page("Page").WebElement("click 123")_;_script infofile_;_ZIP::ssf22.xml_;_
MsgBox a.Count


Browser("Browser").Close()

