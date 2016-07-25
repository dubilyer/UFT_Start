'Creating users with names from datatable
userLogin = DataTable.Value("A")
createUser(userLogin)

'Creating a custom (not from the object repository) WebElements 
'with specified XPath
Set ContactUs = Description.Create()
ContactUs("Xpath").value="/html/body/header/nav/ul/li[4]/a"
Set SpecialOffer = Description.Create()
SpecialOffer("Xpath").value="/html/body/header/nav/ul/li[6]/a"

'Clicking after wait ??
If  Browser("Advantage Shopping").Page("Main").WebElement([ContactUs]).WaitProperty("Enabled", "true", 10) Then
	Browser("Advantage Shopping").Page("Main").WebElement([ContactUs]).Click
End If

Wait(3)
Browser("Advantage Shopping").Page("Main").WebElement([SpecialOffer]).Click
Wait(3)



If Status Then
   print "Checkpoint Passed"
Else
   Print "Checkpoint Failed"
End if
