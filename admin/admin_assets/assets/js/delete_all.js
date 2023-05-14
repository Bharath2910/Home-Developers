

$('.for_delete').on('click',function() {
    var length = $(".for_delete:checked").length;
    if (length!=0) {
        $(".delete_selected").removeAttr( "disabled" );
    }else{
        // alert('no');
        $(".delete_selected").attr( 'disabled', 'disabled' );
    }
});


$('.selectall').on('click',function() {
    
    if ($(this).is(":checked")) {
        // alert('yes');
        $(".delete_selected").removeAttr( "disabled" );
    }else{
        // alert('no');
        $(".delete_selected").attr( 'disabled', 'disabled' );
    }
});

  