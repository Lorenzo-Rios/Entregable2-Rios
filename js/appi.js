const mp = new MercadoPago('YOUR_PUBLIC_KEY', {
    locale: "es-AR",
});

document.getElementsById('btn-pagar')[0].addEventListener("click",async () =>{
    try{
        const orderData = {
            items: [],
        };
    
        let carritoContenedor = document.getElementsByClassName('carrito')[0];
        let carroitems = carritoContenedor.getElementsByClassName('carrito-item');
        for(let i=0; i< carroitems.length;i++){
            let total = 0;
            let item = carroitems[i];
            let precioElemento = item.getElementsByClassName('carrito-item-precio')[0];
            let name = item.getElementsByClassName('carrito-item-titulo')[0].innerText;
            let precio = parseFloat(precioElemento.innerText.replace('$','').replace('.',''));
            let cantidadItem = item.getElementsByClassName('carrito-item-cantidad')[0];
            let cantidad = cantidadItem.value;
            total = total + (precio * cantidad);
            console.log(total);
            orderData.items.push({
                title: name,
                unit_price: total,
                quantify: cantidad,
            })
        }
    
        const response = await fetch("http://localhost:3000/create_preference", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        });

        const preference = await response.json();
        createCheckoutButton(preference.id);

        const carritoItems = document.getElementsByClassName('carrito-items')[0];
        while (carritoItems.hasChildNodes()){
            carritoItems.removeChild(carritoItems.firstChild)
        }
        actualizarTotalCarrito();
        ocultarCarrito();
    } catch(error){
        alert("error:(");
    }
});

const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    const renderComponent = async () => {
        if (window.checkoutbutton) window.checkoutbutton.unmount();
        await bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                preferenceId: "<PREFERENCE_ID>",
            },
            customization: {
                texts: {
                valueProp: 'smart_option',
                },
            },
        });
    };

    renderComponent();
};