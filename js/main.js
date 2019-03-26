function js_style(){
    // alert("hello"); ctrl + /
    // document.getElementById("text").style.fontSize = "50px";
    // document.getElementById('text').style.color = 'red';
    $("#text").css({ 'color': 'red', 'font-size': '150%' });
}

// cau 2
function getFormValue(){
    var ten = $("input[name=fname]").val();
    var ho = $("input[name=lname]").val();
    alert("Ten la: " + ten + " Ho la: " + ho);
}
//cau3
function button(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  console.log(r, g, b);
  var color = "rgb" + "(" + r + "," + g + "," + b + ")";
  console.log(color);
  $('body').css('background-color', color);
};
//cau 4
function getAttributes()
{
 var u = document.getElementById("somelink").href;
 alert('The value of the href attribute of the link is : '+u);
 var v = document.getElementById("somelink").hreflang;   
 alert('The value of the hreflang attribute of the link is : '+v);
 var w = document.getElementById("somelink").rel; 
  alert('The value of the rel attribute of the link is : '+w);
 var x = document.getElementById("somelink").target; 
  alert('The value of the taget attribute of the link is : '+x);
 var y = document.getElementById("somelink").type; 
  alert('The value of the type attribute of the link is : '+y);  
}
//cau 5
function insert_Row(){
  var table = document.getElementById("sampleTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}
//cau 6
function changeContent()
{
    $("#myTable td").text("ROW IN TABLE");
}

//cau 7
    $(document).ready(function(){
        $("button").click(function(){
          var number_of_rows = $('#rows').val();
          var number_of_cols = $('#cols').val();
          var table_body = '<table border="1">';
          for(var i=0;i<number_of_rows;i++){
            table_body+='<tr>';
            for(var j=0;j<number_of_cols;j++){
                table_body +='<td>';
                table_body +='Table data';
                table_body +='</td>';
            }
            table_body+='</tr>';
          }
            table_body+='</table>';
           $('#tableDiv').html(table_body);
        });
    });
//cau 8
function myFunction() {
  var x = document.getElementById("mySelect");
  x.remove(x.selectedIndex);
}
//cau 9