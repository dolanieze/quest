let veko1 = document.querySelector(".veko")
let text = document.querySelector(".text")
let loc1 = document.querySelector(".loc1")
let loc2 = document.querySelector(".loc2")
let shlepa = document.querySelector(".shlepa")
let popcat = document.querySelector(".popcat")
let kot = document.querySelector(".kot")
let mrbeast = document.querySelector(".mrbeast")
let a4 = document.querySelector(".a4")
let windy = document.querySelector(".windy")
let n4 = document.querySelector(".n4")
let n5 = document.querySelector(".n5")
let n22 = document.querySelector(".n22")
let vopros2 = " второй"
let vopros2_text = "Кто из них андрей?"
let vopros3 = " третий"
let vopros3_text = "2+2=?"
let exit = document.querySelector(".exit")
let exit2 = document.querySelector(".exit2")
let button = document.querySelector(".button")
let you_left = 20
let vileft = 20
glaza = function(){
	veko1.style.height = "0px"
}
setTimeout(glaza, 1000)
babl = function(){
	text.style.display = "block"
}
setTimeout(babl, 2500)
bablnone = function(){
	text.style.display = "none"
	
}
list = function(){
	document.querySelector(".list").style.display = "block"
}
setTimeout(bablnone, 4500)
setTimeout(list, 4501)

shlepa.onclick=function(){
	alert("Ты молодец!")
	shlepa.style.display = "none"
	popcat.style.display = "none"
	kot.style.display = "none"
	document.querySelector(".vopros").innerHTML = vopros2
	document.querySelector(".text_vopros").innerHTML = vopros2_text
	windy.style.display = "block"
	mrbeast.style.display = "block"
	a4.style.display = "block"
}
popcat.onclick=function(){
	alert("Не правильно! Попробуй ещё раз")
}
kot.onclick=function(){
	alert("Не правильно! Попробуй ещё раз")
}
windy.onclick=function(){
	alert("Ты молодец!")
	windy.style.display = "none"
	a4.style.display = "none"
	mrbeast.style.display = "none"
	document.querySelector(".vopros").innerHTML = vopros3
	document.querySelector(".text_vopros").innerHTML = vopros3_text
	n4.style.display = "block"
	n5.style.display = "block"
	n22.style.display = "block"
}
a4.onclick=function(){
	alert("Не правильно! Попробуй ещё раз")
}
mrbeast.onclick=function(){
	alert("Не правильно! Попробуй ещё раз")
}
n4.onclick=function(){
	alert("АААААААААААААААААААААААААА что ты наделал? Теперь нас Миста не простит!")
}
n22.onclick=function(){
	alert("Не правильно! Попробуй ещё раз")
}
n5.onclick=function(){
	alert("Ты ответил правильно на все вопросы!")
	document.querySelector(".list").style.display = "none"
	babl()
	setTimeout(bablnone, 2000)
	exit.style.display = "block"
}
exit.onclick=function(){
	veko1.style.height = "860px"
	setTimeout(glaza,1000)
	izmen = function(){
		loc1.style.display = " none"
		loc2.style.display = "block"
	}
	setTimeout(izmen, 1000)
}
coridor = function(){
	loc2.style.display = "none"
	document.querySelector(".loc2-5").style.display = "block"
}
exit2.onclick=function(){
	talk = function(){
		text.style.display = "block"
		setTimeout(bablnone, 2000)
		setTimeout(coridor, 2000)
	}	
	talk()
	veko1.style.height = "860px"
	setTimeout(glaza,2000)
}

vilwalk = function(){
	document.querySelector(".vil").style.left = vileft + 50 + "px"
	vileft = vileft + 70
}


	button.onclick = function(){
	document.querySelector(".you").style.left = you_left + 100 + "px"
	you_left = you_left + 100
	setInterval(vilwalk, 00)
	if (you_left >= 1500 && you_left>vileft) {
		document.querySelector(".loc2-5").style.display = "none"
		document.querySelector(".body").style.backgroundImage = "url(i.webp)"
		document.querySelector(".body").style.backgroundSize = "cover"
	}	
	if (vileft >= 1500 && you_left<vileft) {
		document.querySelector(".loc2-5").style.display = "none"
		document.querySelector(".body").style.backgroundImage = "url(yd.jpg)"
		document.querySelector(".body").style.backgroundSize = "cover"
	}	
	}
	



