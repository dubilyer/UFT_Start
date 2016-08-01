expectedUser = DataTable.Value("A")
Set localPage = pageFactory("main")
localPage.Sync
With localPage
	waitAndClick .WebElement("WebElement")
	waitAndClick .WebElement("WebElement")
    waitAndClick .WebElement("Username") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username")_;_script infofile_;_ZIP::ssf2.xml_;_
    waitAndClick .WebElement("Username") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Username")_;_script infofile_;_ZIP::ssf3.xml_;_
    .WebEdit("WebEdit").Set "guest" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf4.xml_;_
    .WebEdit("WebEdit").Set "guest2" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("WebEdit")_;_script infofile_;_ZIP::ssf5.xml_;_
    .WebEdit("WebEdit_2").SetSecure "579df2cc63dc7a48a9a8c4d197e66fe03f2e" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("WebEdit 2")_;_script infofile_;_ZIP::ssf6.xml_;_
    waitAndClick .WebElement("SIGN IN")
	Set userElement = .WebElement ("xpath:=/html/body/header/nav/ul/li[2]/a/span")
	waitForInnerHtml userElement, expectedUser, 5	
	currentUser =Trim (userElement.GetROProperty("innerHtml"))	
	If currentUser<>expectedUser Then
		Reporter.ReportEvent micFail, "Auth failed", "+"&currentUser
	End If
End With 


