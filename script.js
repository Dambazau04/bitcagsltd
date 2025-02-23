document.addEventListener("DOMContentLoaded", function () {
    let totalAmount = 0;
    let cart = [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            let serviceCard = this.parentElement;
            let price = parseFloat(serviceCard.querySelector(".price-option").value);
            let quantity = parseInt(serviceCard.querySelector(".quantity").value);
            let serviceName = serviceCard.querySelector("h2").innerText;

            // Update cart
            cart.push({ name: serviceName, price: price, quantity: quantity });

            // Calculate total
            totalAmount += price * quantity;
            document.getElementById("totalAmount").innerText = `₦${totalAmount}`;
        });
    });

    window.generateReceipt = function () {
        let receiptContent = `
            <html>
                <head>
                    <title>Bitcags Receipt</title>
                    <style>
                        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
                        h2 { color: #333; }
                        h3 { font-size: small; }
                        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                        th, td { border: 1px solid black; padding: 10px; }
                        th { background: #f4f4f4; }
                        .bold { font-weight: bold; }
                        img{ display: block; margin: 0 auto; max-width: 150px;}
                        p { margin: 2 auto; font-size: small;  }
                        body { font-family: Arial, sans-serif; text-align: center; }
                .receipt-header img { width: 100px; }
                .receipt-watermark {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0.1;
                    font-size: 50px;
                    font-weight: bold;
                }
                    /* Footer */
.footer {

    background-color: #333;
        color: rgb(255, 85, 85);
        text-align: center;
        padding: 20px;
    }
    
    .footer .social-media a {
        color: rgb(44, 252, 2);
        text-decoration: none;
        margin: 0 10px;
    }s
    
    .footer .social-media a:hover {
        text-decoration: underline;
    }
                    </style>
                </head>
                <body>
                <img src="images/bitcags logo.png" alt="Company Logo" id="company-logo">
                    <h2>BITCAGS LTD RECEIPT</h2>
                    <h3>Address: No. 17A, Janbulo Second Gate Opposite Bukar Makoda Block</h3>
                    <p>Receipt Generated: ${new Date().toLocaleString()}</p>
                    <div class="receipt-header">
            </div>
            <div class="receipt-watermark">BITCAGS LTD</div>
                    <table>
                        <tr>
                            <th>Service Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
        `;

        cart.forEach(item => {
            receiptContent += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>₦${item.price}</td>
                    <td>₦${item.price * item.quantity}</td>
                </tr>
            `;
        });

        receiptContent += `
                    </table>
                    <h3 class="bold">Total Amount: ₦${totalAmount}</h3>
                    <p>Thank you for patronize! Bitcags Ltd</p>
                    <p>+234-9075-9777-44, +234-8107-9076-47</p>
                    <p>bitcagsltd@gmail.com | www.bitcagsltd.com.ng</p>
                    <button onclick="window.print()">Print Receipt</button>
                    <!-- Footer Section -->
<footer class="footer">
    <div class="container">
        <p>&copy; 2025 BITCAGS LTD. All Rights Reserved.</p>
        <div class="social-media">

            <a href="https://www.facebook.com/abu.abdurrahman.it.consult.and.general.services">Facebook</a> | 
            <a href="https://www.instagram.com/aitcags_ltd?igsh=YzljYTk10Dg3Zg==">Instagram</a> |
            <a href="https://www.instagram.com/aitcags_ltd?igsh=YzljYTk10Dg3Zg==">Twitter</a>
        </div>
    </div>
</footer>

                </body>
            </html>
        `;

        let receiptWindow = window.open("", "Receipt", "width=600,height=800");
        receiptWindow.document.write(receiptContent);
        receiptWindow.document.close();
    };
});
function printReceipt() {
    let receiptWindow = window.open('', '', 'width=600,height=700');
    receiptWindow.document.write(`
        <html>
        <head>
            <title>Receipt</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                .receipt-header img { width: 100px; }
                .receipt-watermark {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0.1;
                    font-size: 50px;
                    font-weight: bold;
                }
                .company-address { font-size: 12px; margin-top: 5px; }
            </style>
        </head>
        <body>
            <div class="receipt-header">
                <img src="logo.png" alt="Company Logo">
            </div>
            <div class="receipt-watermark">A.A GLOBAL</div>
            <h3>Receipt</h3>
            <p>Service Details: ...</p>
            <h3>Total: ₦XXX</h3>
            <p>Thank you for your business!</p>
        </body>
        </html>
    `);
    receiptWindow.document.close();
    receiptWindow.print();
}

