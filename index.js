(function showHint()
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    var josndata=JSON.parse(xmlhttp.responseText);
    console.log(josndata);
    show(josndata);
    }
  }
xmlhttp.open("GET","http://localhost/server/index.php?c=GetInfo&m=getInfo",true);
xmlhttp.send();
})();

function pass(onumber,otype,otime,oschedule){
	var xmlhttp;
	if(window.XMLHttpRequest)
	{
		//code for IE7+,Firefox,Chrome,Opera,Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{
		//code for IE6,IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4&&xmlhttp.status==200)
		{
			var josndata=JSON.parse(xmlhttp.responseText);
		}
		var str  = 'number='+onumber+'&'+'type='+otype+'&'+'time='+otime+'&'+'schedule='+oschedule;
		xmlhttps.open("POST","http://localhost/renwu/server/index.php?c=GetInfo&m=updateInfo",true);
		xmlhttps.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttps.send(str);
	}
}

function astatus(target){
	var ssr=target.parentElement.parentElement;
	var schedules=0;
	if (target.value==='拒绝') {
		schedules=-1;
		ssr.childNodes[6].innerHTML='拒绝'
	}
	else if (target.value==='一面通过') {
		schedules=1;
		ssr.childNodes[6].innerHTML='一面通过'
	}
	else if (target.value==='二面通过') {
		schedules=2;
		ssr.childNodes[6].innerHTML='二面通过'
	}
	else if (target.value==='三面通过') {
		schedules=3;
		ssr.childNodes[6].innerHTML='三面通过'
	}
	pass(ssr.childNodes[1].innerHTML,ssr.childNodes[5].innerHTML,timer,schedules);
}

function show(Data)
{
	var oData=document.getElementById('data');

	for (var i = 0; i < Data.data.length; i++) {
		var tr2=document.createElement("tr");

		var Nametd=document.createElement("td");
		Nametd.innerHTML=Data.data[i].name;
		tr2.appendChild(Nametd);
		tr2.className='tr2';
		var Numtd=document.createElement("td");
		Numtd.innerHTML=Data.data[i].number;
		tr2.appendChild(Numtd);
		var Caltd=document.createElement("td");
		Caltd.innerHTML=Data.data[i].class;
		tr2.appendChild(Caltd);
		var Teltd=document.createElement("td");
		Teltd.innerHTML=Data.data[i].phone;
		tr2.appendChild(Teltd);
		var Emltd=document.createElement("td");
		Emltd.innerHTML=Data.data[i].email;
		tr2.appendChild(Emltd);
		var Dectd=document.createElement("td");
		Dectd.innerHTML=Data.data[i].direction;
		tr2.appendChild(Dectd);
		var Schtd=document.createElement("td");
		if(Data.data[i].schedule=='0')
		Schtd.innerHTML='未面试';
		else if(Data.data[i].schedule=='1')
		Schtd.innerHTML='一面通过';
		else if(Data.data[i].schedule=='2')
		Schtd.innerHTML='二面通过';
		else if(Data.data[i].schedule=='3')
		Schtd.innerHTML='三面通过';
		else if(Data.data[i].schedule=='-1')
		Schtd.innerHTML='淘汰';
		tr2.appendChild(Schtd);
		var Actd = document.createElement("td");
		Actd.innerHTML = "<input type='button' value='拒绝' id='btn' name='btn_1'>  <input type='button' name='btn_1' id='btn' value='一面通过'>  <input type='button' name='btn_1' id='btn' value='二面通过'>  <input type='button' name='btn_1' id='btn' value='全部通过'>";
		tr2.appendChild(Actd);
		oData.appendChild(tr2);
	}
	var st = document.getElementsByName("btn_1");
	for (var i = 0; i < st.length; i++) {
		st[i].style.width='80px';
		st[i].style.height='20px';
		st[i].style.background='#fff';
		st[i].addEventListener('click',function(e){
			if (document.readyState !=='complete') {
				return ;
			}
			else
				astatus(e.target);
		});
	}
}
/*#btn{
	width: 80px;
	height: 20px;
	border-radius: 15px;
	background-color: #fff;
}*/