const mp = new MercadoPago('TEST-880b6ef0-f4cd-4028-b418-d967512f8880', {
    locale: "es-AR",
});

document.getElementsByClassName("btn-pagar")[0].addEventListener("click", async () => {
    try {
        const orderData = {
            title: "Tu producto",
            quantity: 1,
            price: 100
        };

        const response = await fetch("http://localhost:3000/create_preference", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        });

        const preference = await response.json();
        createCheckoutButton(preference.id);

    } catch (error) {
        alert("Error: El servidor no está corriendo");
    }
});

const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    const renderComponent = async () => {
        if (window.checkoutButton) window.checkoutButton.unmount();
        await bricksBuilder.create("wallet", "wallet_container", {
            initialization: {
                preferenceId: preferenceId,
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