Browser("OrangeHRM").Page("OrangeHRM").WebEdit("username").Set "Admin" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("password").SetSecure "6448aaedaf7a6aa5671e188961bf7c106fa33e630112" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebButton("Login").Click @@ script infofile_;_ZIP::ssf3.xml_;_
'Browser("OrangeHRM").Page("OrangeHRM_2").Image("profile picture").Check CheckPoint("profile picture") @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_2").Link("PIM").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_3").Check CheckPoint("OrangeHRM") @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_3").WebButton("Add").Check CheckPoint("Add") @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_3").Check CheckPoint("OrangeHRM_2") @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("OrangeHRM").Page("OrangeHRM_3").WebButton("Search").Check CheckPoint("Search")
Browser("OrangeHRM").Page("OrangeHRM_3").WebElement("Neo Collings").Click
Browser("OrangeHRM").Page("OrangeHRM_3").Link("Logout").Click
