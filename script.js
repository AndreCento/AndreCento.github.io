$(function(){

  $('.buy-button').on('click.buy', function(){


    var $this = $(this);

    var price = $this.data('price');
    var $basketDisplay = $('#basket-total');
    var basketTotal = parseFloat($basketDisplay.text());
    var newBasketTotal= basketTotal + price;

    $basketDisplay.text(newBasketTotal);

    console.log('price', price);
    console.log('basketTotal', basketTotal);
    console.log('newBasketTotal', newBasketTotal);
  });
});
