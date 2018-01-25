function time(a){
 	var s = a.split(":")
 	var r = s[2].substring (2,4)
 	var t = s[2].substring(0,2)
 	var e = s[0]
 	var w = s[1]
 	if (r=="AM" && s[0]==12){
 		e="00"
 	}
 	else if (r=="PM" && s[0]==12){
 		e==12
 	}
 	else if (r=="PM" && s[0]<12){
 		e=Number(s[0])+12
 	}
 	return (e+":"+w+":"+t)
}


document.write(time("12:05:37AM"))