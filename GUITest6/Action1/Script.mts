Class MyBrowser
	Public currentBrowser
	Public currentPage
	Public Function openPage(url)
		SystemUtil.Run "iexplore.exe", url
		Set currentBrowser = Browser("title:=Google")
		Set currentPage = currentBrowser.Page("title:=Google")
	End Function
End Class
Class SearchPage
	Public SearchBar
	Public Button
	
	Public Function getUrl
		getUrl= "www.google.com"
	End Function
	Public Function init(ByRef Browser)
		Set SearchBar = Browser.currentPage.WebEdit("name:=q","type:=text")
	End Function
End Class

Set currentPage = new SearchPage
Set Br = new MyBrowser
currentPage.init(Br)
Br.openPage(currentPage.getUrl)
currentPage.SearchBar.Set "automation repository"
wait(10)

