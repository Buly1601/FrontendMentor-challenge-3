let toggle = $(".slide-button");

function changingPrice() {
    let priceBasic = $("#anim-1");
    let priceProfessional = $("#anim-2");
    let priceMaster = $("#anim-3");
    

    if(document.querySelector('.slide-button:checked') !== null){
        priceBasic.html("$19.99");
        priceProfessional.html("$24.99");
        priceMaster.html("$39.99");
        console.log("active");

    }else{
        priceBasic.html("$199.99");
        priceProfessional.html("$249.99");
        priceMaster.html("$399.99");
        console.log("active not");
    }
}

toggle.on("click", changingPrice);
