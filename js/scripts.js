$(document).ready(function(){

  let groceryList = [];

  
  $("#typeIn").submit(function() {
    event.preventDefault();
    
    let item = $("#items").val();

    if (item.length != 0) {
      groceryList.push(item)
      $("#typeIn")[0].reset();
    }       
    $("#roughList").append("<p>" + groceryList[groceryList.length - 1] + "</p>"); 

    const sortedList = groceryList.sort();
    //console.log(sortedList);
    $("#list").append("<li>" + sortedList + "</li>");
  
  });
});    
