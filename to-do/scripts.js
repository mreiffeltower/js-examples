$('button').click(() => {
   $('ul').append(`<li>${$('input').val()}</li>`);
   $('li:last-child').click((event) => {
     $(event.target).toggleClass('completed');
   });
   $('input').val('');
 });