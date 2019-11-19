var image_tracker = "f";

function change() {
  var image = document.getElementById('social');
  if (image_tracker == "f") {
    image.src = "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/36467251_10217869536837102_3405310639344713728_n.jpg?_nc_cat=107&_nc_oc=AQl4IwKdG-52zsu0YQqBcI7uWtOs8JlUFkfWMuq7-o1Lxnb9_PcRvz6-sqvp_tOukRg&_nc_ht=scontent-den4-1.xx&oh=5dc2878397c62265d3c5babbf48f34d1&oe=5E48C5E4"
    image_tracker = "t";
  } else { 
    image.src = "https://scontent-den4-1.xx.fbcdn.net/v/t1.0-9/43950670_10218818710525851_436506816306741248_n.jpg?_nc_cat=111&_nc_oc=AQmSO5WvFg1wTmPS_moN4GM-8xiWnS0DaFgs3q5I4nTwCU3oxyCyxT1yoN-HaKf1oOk&_nc_ht=scontent-den4-1.xx&oh=04a3a49651b50f2ca0e0aa684a6c7ddb&oe=5E3E461B"; 
    image_tracker = "f";
  }
}