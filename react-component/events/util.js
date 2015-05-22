function getItemList() {
  var output = '';
  for (var i = 1; i < 100; i++) {
    output += '<li>Row ' + i + '</li>';
  }
  return {
    __html: output
  };
}
