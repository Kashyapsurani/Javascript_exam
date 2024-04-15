
var math = 90;
var sci = 85;
var eng = 92;
var hi = 88;
var ge = 82;

var doc = document.getElementById("report").innerHTML = `

<p>- - - - -  Report Card  - - - - - </p>

<p>Student Name : kashyap</p> 
<p>Grade : 1</p>


<p> - - - - - - - - - - - - - - - - - - -</p>

<div style="display:flex; alignItems: center; "><p style="margin-right: 20px">Subject</p>
<p style="margin-right: 20px">Score</p> <p style="margin-right: 20px">Grade</p></div>

<div style="display:flex; alignItems: center; justifyContent: "><p style="margin-right: 55px">Math    
</p><p style="margin-right: 40px">${math}</p> <p style="margin-right: 20px">A+</p></div>

<div style="display:flex; alignItems: center; justifyContent: "><p style="margin-right: 40px">Science    
</p><p style="margin-right: 40px">${sci}</p> <p style="margin-right: 20px">A+</p></div>

<div style="display:flex; alignItems: center; justifyContent: "><p style="margin-right: 40px">English    
</p><p style="margin-right: 40px">${eng}</p> <p style="margin-right: 20px">A</p></div>

<div style="display:flex; alignItems: center; justifyContent: "><p style="margin-right: 40px">History    
</p><p style="margin-right: 40px">${hi}</p> <p style="margin-right: 20px">A+</p></div>

<div style="display:flex; alignItems: center; justifyContent: "><p style="margin-right: 10px">Geaography    
</p><p style="margin-right: 40px">${ge}</p> <p style="margin-right: 20px">A</p></div>

<p> - - - - - - - - - - - - - - - - - - -</p>

<p>Total Mark: ${math+sci+eng+hi+ge} </p>

<p>Average: ${(math+sci+eng+hi+ge)/5}</p>

`

