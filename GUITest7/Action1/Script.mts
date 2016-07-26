'Start~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
'********************************************************
'Script
'********************************************************
Set IE=CreateObject("internetexplorer.application")
IE.Visible=True
IE.Navigate "http://google.com"
BrowserSync(IE)

Set PageObject=IE.Document

'Set Value in Google Search Edit Box
SetValueinEditBox PageObject,"q","qtp sudhakar"
'Click on Google Search Button
ClickButton PageObject,"Google Search"
BrowserSync(IE)
'Click on Result Link
ClickLink PageObject,"http://qtpsudhakar.com/"

MsgBox "Completed"

'********************************************************
'Functions
'********************************************************
Function SetValueinEditBox(PageObject,EditName,Value2Set)

    Dim EditObjects
    Dim Edit

    set EditObjects=PageObject.getElementsByTagName("INPUT")
        
    For each Edit in EditObjects

        If lcase(Edit.name)=lcase(EditName) and lcase(Edit.type)="text" then
            Edit.value=Value2Set
            Exit for
        End If

    Next

    Set EditObjects= Nothing
    Set Edit=Nothing

End Function
'********************************************************
'********************************************************
Function ClickButton(PageObject,ButtonValue)

    Dim ButtonObjects
    Dim button
    Dim ButtonClicked
    set ButtonObjects=PageObject.getElementsByTagName("INPUT")
        
    For each button in ButtonObjects

        If lcase(button.type)="button" Or lcase(button.type)="submit" Then
            If LCase(button.value)=LCase(ButtonValue) Then
                button.click
                ButtonClicked=true
            Exit For
            End if
        End If

    Next

    If Not ButtonClicked=True Then
    
    set ButtonObjects=PageObject.getElementsByTagName("button")
        
    For each button in ButtonObjects

            If LCase(button.value)=LCase(ButtonValue) Then
                button.click
                ButtonClicked=true
    Exit For
   End If

    Next
    
    End if
    Set ButtonObjects= Nothing
    Set button=Nothing

End Function
'********************************************************
'********************************************************
Function ClickLink(PageObject,LnkURL)

    Dim lnkObjects
    Dim lnk

    set lnkObjects=PageObject.getElementsByTagName("a")
       
    For each lnk in lnkObjects

        If lcase(lnk.href)=lcase(LnkURL) then
            lnk.click
            Exit for
        End If

    Next

    Set lnkObjects= Nothing
    Set lnk=Nothing

End Function
'********************************************************
'********************************************************
Function BrowserSync(BrowserObj)

Dim oTimeout,oTime
oTimeout=10
'WScript.Sleep 1000
wait(1)
For oTime=1 to oTimeout
    If BrowserObj.ReadyState=4 Then
        Exit For
    Else
        'WScript.Sleep 1000
        wait(1)
    End If
Next 

End Function
'********************************************************
'********************************************************
'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End 
