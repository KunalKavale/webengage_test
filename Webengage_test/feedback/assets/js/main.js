 $(document).ready(function(){
  //Need to fetch page URL
        var pageURL = $(location).attr("href");

  //Need to split the URL and query Param 
        var temp = pageURL.split("?");

  //Seperated queryParams from URL
        //queryParams = "topic=3&file=jquery-get-current-page-url"

        //var queryParams = temp[1];
        var queryParams = "topic=3&file=jquery-get-current-page-url"

   //Now we need to pick up Ayush query param from multiple params
         var targetParam = queryParams.split("&");
   //targetParam = [topic=3, file=jquery-get-current-page-url]

   // Loop array to find Ayush
          console.log(targetParam);
          
         targetParam.forEach(myFunction);

   function myFunction(item, index) {
              if (item.includes("topic") ){
                  var value = item.split("=");   //value=[topic,3]
                  alert(value);

      $("input[type=radio][value=" + value[1] + "]").attr(

       "checked",
                         "checked"
                          );
                  
                          }
      }
          
          
          
        });