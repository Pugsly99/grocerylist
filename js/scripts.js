$(document).ready(function(){

  let groceryList = [];
  const show = groceryList.length;
  
  $("#typeIn").submit(function() {
    event.preventDefault();
    
    let item = $("#items").val();

    if (item.legth != 0) {
      groceryList.push(item)
      console.log(groceryList)
      $("#typeIn")[0].reset();
    } 

    if (show = 1){
    $("#roughList").append( groceryList[show]);
    }

  });
});    
