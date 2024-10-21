let total = 0;

function prod1(hope) {
    const PutTheValue = document.getElementById('setting');
    const liName = hope.childNodes[3].innerText; // Product name
    const li = document.createElement('li');
    li.innerText = liName;
    PutTheValue.appendChild(li);

    const price = parseFloat(hope.childNodes[5].innerText.split(" ")[0]); // Price extraction
    total += price;
    document.getElementById('total').innerText = total.toFixed(2) + ' USD'; // Update total

    const d = document.getElementById('btn1');
    if (total > 0) {
        d.removeAttribute("disabled");
    }
    const applyButton = document.getElementById('btn2');
    if (total >= 200) {
        applyButton.removeAttribute("disabled");
    }

    // Check if any discount button is pressed
    applyButton.onclick = function() {
        const couponInput = document.getElementById('hex1');
        if (couponInput.value === 'SALE200') {
            const discount = total * 0.2; // Calculate discount
            const discountPrice = discount.toFixed(2);
            document.getElementById('dicount-price').innerText = discountPrice + ' USD';

            const totalAfterDiscount = total - discount;
            document.getElementById('total2').innerText = totalAfterDiscount.toFixed(2) + ' USD';
        } else {
            alert('Invalid coupon code!');
        }
    };
}

// Reset functionality for clearing selections
document.getElementById('btn3').addEventListener('click', function() {
    total = 0;
    document.getElementById('total').innerText = '00 USD';
    document.getElementById('dicount-price').innerText = '00 USD';
    document.getElementById('total2').innerText = '00 USD';
    document.getElementById('setting').innerHTML = ''; // Clear selected items
    document.getElementById('hex1').value = ''; // Clear coupon input
    document.getElementById('btn2').setAttribute('disabled', true); // Disable apply button
});
