function compile()
{
var h=document.getElementById('html');
var c=document.getElementById('css');
var j=document.getElementById('js');
var code=document.getElementById('output').contentWindow.document;
document.body.onkeyup = function(){
code.open();
  code.writeln(h.value+"<style>"+c.value+"</style>"+"<script>"+j.value+"</script>");
  code.close();
};
};
compile();
