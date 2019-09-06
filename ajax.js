//AJAX FUNCTION START
function ajax({method: method, route: route, type: type, data: data, success: success, forbidden: forbidden, notFound: notFound}){
  var xhr = new XMLHttpRequest();
  xhr.open(method, route, true);
  //if (type == "json") true/false
  (method == "post") && (type == "json")? (xhr.setRequestHeader('Content-type', "application/json")) : (xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded"));
  xhr.onload = function(){
    (this.status == 200) ? (success(this)) : (this.status == 403)? (forbidden(this)) : (notFound(this));
  }
  xhr.send(JSON.stringify(data))
}
//AJAX FUNCTION END

/**************************************************************************/

/*POST EXAMPLE*/
document.getElementById('btnPost').addEventListener('click', function(){
  var storeInput = document.getElementById('input').value;
  document.getElementById('input').value = null;
  //CALL AJAX WITH THIS PARAMS
  ajax({
    method: 'post',
    route: '/api',
    type: "json",
    data: {name: storeInput},
    success: function(xhr){
      document.getElementById('text').innerText = xhr.responseText;
    },
    forbidden: function(){
      console.log('FORBIDDEN');
    },
    notFound: function(){
      console.log('Not Found');
    }
  });
  //AJAX CALL END
});

/*GET EXAMPLE*/
document.getElementById('btnGet').addEventListener('click', function(){
  //CALL AJAX WITH THIS PARAMS
  ajax({
    method: 'get',
    route: '/api',
    success: function(xhr){
      document.getElementById('text').innerText = xhr.responseText;
    },
    forbidden: function(){
      console.log('FORBIDDEN');
    },
    notFound: function(){
      console.log('Not Found');
    }
  });
  //AJAX CALL END
})
