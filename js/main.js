(function() {
  'use strict';

  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var model = document.getElementById('modal');
  var mask = document.getElementById('mask');

  open.addEventListener('click', function() {
    modal.className = '';
    mask.className ='';
  });

  close.addEventListener('click', function() {
    modal.className = 'hidden'; // 非表示
    mask.className = 'hidden';  //非表示
  });

  mask.addEventListener('click', function() {
    // modal.className = 'hidden';
    // mask.className = 'hidden';
    close.click();
  });

})();