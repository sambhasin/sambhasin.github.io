var countryName = null;

function loadData(pn)
	{
					
		var Http  = new XMLHttpRequest();
		var url = 'https://covid19-api.org/api/status'
		Http.onreadystatechange=function()
		{
			//if(this.readyState==4 && this.status == 200 )
			if(this.readyState == this.DONE)
			{
				var json = Http.responseText;
				// Define recursive function to print nested values
				// Printing all the values from the resulting object
				//printValues(jsonResult);
				loadData2(json,pn);
			}
		}	
		Http.open("GET",url,true)
		Http.send();
		
	}
	function loadData2(jR1,pName)
	{
	
		Http  = new XMLHttpRequest();
		url = 'https://covid19-api.org/api/diff'
		Http.onreadystatechange=function()
		{
			//if(this.readyState==4 && this.status == 200)
			if(this.readyState == this.DONE)
			{
				var json = Http.responseText;
				//var jsonResult = JSON.parse(json);
				
				// Define recursive function to print nested values
				// Printing all the values from the resulting object
				//printData(jR1,jsonResult,pName);
				localStorage.status = jR1;
				localStorage.diff   = json;
				
			}
		}	
		Http.open("GET",url,true)
		Http.send();
	}

function getWorldCovidCasesCount(jsonObj)
{
	var totalCases = 0;
	for (var i=0; i < getRows(jsonObj); i++)
	{
		totalCases += jsonObj[i].cases;
	}
	return totalCases;
}

function getWorldCovidDeathCount(jsonObj)
{
	var totalDeath = 0;
	for (var i=0; i < getRows(jsonObj); i++)
	{
		totalDeath += jsonObj[i].deaths;
	}
	return totalDeath;
}

function getWorldCovidRecoveredCount(jsonObj)
{
	var totalRecovered = 0;
	for (var i=0; i < getRows(jsonObj); i++)
	{
		totalRecovered += jsonObj[i].recovered;
	}
	return totalRecovered;
}


function getRows(jsonObj)
{
	return Object.keys(jsonObj).length;
	return Object.keys(jsonObj).length;
							
}

function getCountryName(cCode)
{
	var countryList = ["AFGHANISTAN","ALBANIA","ALGERIA","AMERICAN SAMOA","ANDORRA","ANGOLA","ANTARCTICA","ANTIGUA AND BARBUDA","ARGENTINA","ARMENIA","ARUBA","AUSTRALIA","AUSTRIA","AZERBAIJAN","BAHAMAS","BAHRAIN","BANGLADESH","BARBADOS","BELARUS","BELGIUM","BELIZE","BENIN","BERMUDA","BHUTAN","BOLIVIA","BOSNIA AND HERZEGOVINA","BOTSWANA","BOUVET ISLAND","BRAZIL","BRITISH INDIAN OCEAN TERRITORY","BRUNEI DARUSSALAM","BULGARIA","BURKINA FASO","BURUNDI","CAMBODIA","CAMEROON","CANADA","CAPE VERDE","CAYMAN ISLANDS","CENTRAL AFRICAN REPUBLIC","CHAD","CHILE","CHINA","CHRISTMAS ISLAND","COCOS (KEELING) ISLANDS","COLOMBIA","COMOROS","CONGO","CONGO, THE DEMOCRATIC REPUBLIC OF THE","COOK ISLANDS","COSTA RICA","COTE D'IVOIRE","CROATIA","CUBA","CURACAO","CYPRUS","CZECH REPUBLIC","DENMARK","DJIBOUTI","DOMINICA","DOMINICAN REPUBLIC","ECUADOR","EGYPT","EL SALVADOR","EQUATORIAL GUINEA","ERITREA","ESTONIA","ETHIOPIA","FALKLAND ISLANDS (MALVINAS)","FAROE ISLANDS","FIJI","FINLAND","FRANCE","FRENCH GUIANA","FRENCH POLYNESIA","FRENCH SOUTHERN TERRITORIES","GABON","GAMBIA","GEORGIA","GERMANY","GHANA","GIBRALTAR","GREECE","GREENLAND","GRENADA","GUADELOUPE","GUAM","GUATEMALA","GUERNSEY","GUINEA","GUINEA-BISSAU","GUYANA","HAITI","HEARD ISLAND AND MCDONALD ISLANDS","HOLY SEE","HONDURAS","HONG KONG","HUNGARY","ICELAND","INDIA","INDONESIA","IRAN","IRAQ","IRELAND","ISRAEL","ITALY","JAMAICA","JAPAN","JERSEY","JORDAN","KAZAKHSTAN","KENYA","KIRIBATI","KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF","KOREA, REPUBLIC OF","KUWAIT","KYRGYZSTAN","LAO PEOPLE'S DEMOCRATIC REPUBLIC (LAOS)","LATVIA","LEBANON","LESOTHO","LIBERIA","LIBYAN ARAB JAMAHIRIYA","LIECHTENSTEIN","LITHUANIA","LUXEMBOURG","MACAO","MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF","MADAGASCAR","MALAWI","MALAYSIA","MALDIVES","MALI","MALTA","MARSHALL ISLANDS","MARTINIQUE","MAURITANIA","MAURITIUS","MAYOTTE","MEXICO","MICRONESIA, FEDERATED STATES OF","MOLDOVA, REPUBLIC OF","MONACO","MONGOLIA","MONTENEGRO","MONTSERRAT","MOROCCO","MOZAMBIQUE","MYANMAR","NAMIBIA","NAURU","NEPAL","NETHERLANDS","NETHERLANDS ANTILLES","NEW CALEDONIA","NEW ZEALAND","NICARAGUA","NIGER","NIGERIA","NIUE","NORFOLK ISLAND","NORTHERN MARIANA ISLANDS","NORWAY","OMAN","PAKISTAN","PALAU","PALESTINIAN TERRITORY, OCCUPIED","PANAMA","PAPUA NEW GUINEA","PARAGUAY","PERU","PHILIPPINES","PITCAIRN","POLAND","PORTUGAL","PUERTO RICO","QATAR","REPUBLIC OF KOSOVO","ROMANIA","RUNION","RUSSIAN","RWANDA","SAINT HELENA","SAINT KITTS AND NEVIS","SAINT LUCIA","SAINT PIERRE AND MIQUELON","SAINT VINCENT AND THE GRENADINES","SAMOA","SAN MARINO","SAINT BARTHELEMY","SAINT MARTIN","SAO TOME AND PRINCIPE","SAUDI ARABIA","SENEGAL","SERBIA","SEYCHELLES","SIERRA LEONE","SINGAPORE","SLOVAKIA","SLOVENIA","SOLOMON ISLANDS","SOMALIA","SOUTH AFRICA","SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS","SOUTH SUDAN","SPAIN","SRI LANKA","SUDAN","SURINAME","SVALBARD AND JAN MAYEN","SWAZILAND","SWEDEN","SWITZERLAND","SYRIAN ARAB REPUBLIC","TAIWAN","TAJIKISTAN","TANZANIA, UNITED REPUBLIC OF","THAILAND","TIMOR-LESTE","TOGO","TOKELAU","TONGA","TRINIDAD AND TOBAGO","TUNISIA","TURKEY","TURKMENISTAN","TURKS AND CAICOS ISLANDS","TUVALU","UGANDA","UKRAINE","UAE","UK","USA","UNITED STATES MINOR OUTLYING ISLANDS","URUGUAY","UZBEKISTAN","VANUATU","VENEZUELA","VIET NAM","VIRGIN ISLANDS, BRITISH","VIRGIN ISLANDS, U.S.","WALLIS AND FUTUNA","WESTERN SAHARA","YEMEN","ZAMBIA","ZIMBABWE"];
	var countryCodeList = ["AF","AL","DZ","AS","AD","AO","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BA","BW","BV","BR","IO","BN","BG","BF","BI","KH","CM","CA","CV","KY","CF","TD","CL","CN","CX","CC","CO","KM","CG","CD","CK","CR","CI","HR","CU","CW","CY","CZ","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MK","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","AN","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","XK","RO","RE","RU","RW","SH","KN","LC","PM","VC","WS","SM","BL","MF","ST","SA","SN","RS","SC","SL","SG","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SZ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","US","UM","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW"];
	var foundName = null;
	for (l=0 ; l < countryCodeList.length; l++)
	{
		if(countryCodeList[l]==cCode)
		{
			foundName = countryList[l];
			break;
		}
	}
	return foundName;
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

//function loadData(which)
//{
	
	//Http  = new XMLHttpRequest();
	//url = 'https://covid19-api.org/api/' + which 
	
	///Http.onreadystatechange=function()
	//{
		//if(this.readyState==4 && this.status == 200)
		//{
			//var json = Http.responseText;
			//var jsonResult = JSON.parse(json)
			
			// Define recursive function to print nested values
			// Printing all the values from the resulting object
			//printData(jsonResult);
			
		//}
	//}
//	Http.open("GET",url,true)
	//Http.send();	
//}

function openPage(pageName, elmnt, color)
 {
	
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
	
  // Show the specific tab content
    // Add the specific color to the button used to open the tab content
	if(pageName != 'search')
	{
		elmnt.style.backgroundColor = color;
		document.getElementById("text1").value ="";
		document.getElementById(pageName).style.display = "block";
		document.getElementById(pageName).innerHTML = "";
		
	}
  var count = 0;
  if(pageName == 'All' && count == 0)
  {
	window.localStorage.removeItem(status);
	loadData(pageName);
	count += 1;
  }
  printData(pageName);
}

function loadAsia()
{
	mapAsia = new Map();
	var listAsia = ["AF","AM","AZ","BH","BD","BT","BN","KH","CN","CX","CC","IO","GE","HK","IN","ID","IR","IQ","IL","JP","JO","KZ","KW","KG","LA","LB","MO","MY","MV","MN","MM","NP","KP","OM","PK","PS","PH","QA","SA","SG","KR","LK","SY","TW","TJ","TH","TR","TM","AE","UZ","VN","YE"];
	//var foundFlag = false;
	for (i=0; i < listAsia.length; i++)
	{
		window.mapAsia.set(listAsia[i],i);
	}
	return mapAsia;
}

function loadNA()
{
	mapNA = new Map()
	var listNA = ["AI","AG","AW","BS","BB","BZ","BM","BQ","VG","CA","KY","CR","CU","CW","DM","DO","SV","GL","GD","GP","GT","HT","HN","JM","MQ","MX","PM","MS","CW","KN","NI","PA","PR","BQ","BQ","SX","KN","LC","PM","VC","TT","TC","US","VI"];
	for (i=0; i < listNA.length; i++)
	{
		window.mapNA.set(listNA[i],i);
	}
	return mapNA;
}

function loadEurope()
{
	mapEurope = new Map();
	var listEurope = ["AL","AD","AT","BY","BE","BA","BG","HR","CY","CZ","DK","EE","FO","FI","FR","DE","GI","GR","HU","IS","IE","IM","IT","RS","LV","LI","LT","LU","MK","MT","MD","MC","ME","NL","NO","PL","PT","RO","RU","SM","RS","SK","SI","ES","SE","CH","UA","GB","VA","RS"];
	for (i=0; i < listEurope.length; i++)
	{
		window.mapEurope.set(listEurope[i],i);
	}
	return mapEurope;

}
function loadSA()
{
	mapSA  = new Map();
	var listSA = ["AR","BO","BR","CL","CO","EC","FK","GF","GY","GY","PY","PE","SR","UY","VE"];
	for (i=0; i < listSA.length; i++)
	{
		window.mapSA.set(listSA[i],i);
	}
	return mapSA;
}

function loadAfrica()
{
	mapAfrica = new Map();
	var listAfrica = ["DZ","AO","SH","BJ","BW","BF","BI","CM","CV","CF","TD","KM","CG","CD","DJ","EG","GQ","ER","SZ","ET","GA","GM","GH","GN","GW","CI","KE","LS","LR","LY","MG","MW","ML","MR","MU","YT","MA","MZ","NA","NE","NG","ST","RE","RW","ST","SN","SC","SL","SO","ZA","SS","SH","SD","SZ","TZ","TG","TN","UG","CD","ZM","TZ","ZW"];
	for (i=0; i < listAfrica.length; i++)
	{
		window.mapAfrica.set(listAfrica[i],i);
	}
	return mapAfrica;
}

function loadOcenia()
{
	mapOcenia = new Map();
	var listOcenia = ["AS","AU","NZ","CK","TL","FM","FJ","PF","GU","KI","MP","MH","UM","NR","NC","NZ","NU","NF","PW","PG","MP","WS","SB","TK","TO","TV","VU","UM","WF"]
	for (i=0; i < listOcenia.length; i++)
	{
		window.mapOcenia.set(listOcenia[i],i);
	}
	return mapOcenia;
}

