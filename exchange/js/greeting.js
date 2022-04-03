var time = new Date();

year = time.toISOString().split('T')[0]


if (year == "2022-01-01") {
	document.getElementById("user-greetings").innerText = "Happy New Year,";
}else{
	document.getElementById("user-greetings").innerText = "Welcome,";
}