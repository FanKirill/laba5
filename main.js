const quantityInput=document.getElementById("quantity");
        const productSelect=document.getElementById("product");
        const priceButton=document.getElementById("priceBtn");
        const resultDiv=document.getElementById("result");

        function onClick(){
            const quantity = quantityInput.value;
            const listProduct = productSelect.value;

            let price=0;

            switch (listProduct){
                case "one":
                    price=100;
                    break;
                case "two":
                    price=200;
                    break;
                case "three": 
                    price=300; 
                    break;
            }
            if(quantity <= 0) resultDiv.textContent = `Error: !>0`;
            else {
                const rez = quantity*price;
                resultDiv.textContent = `Стоимость заказа: ${rez} руб.`;
                console.log(" Цена: "+price+"\n","Кол-во: "+productSelect.value+"\n", "Стоимость:"+rez);
            }
        }

        window.addEventListener('DOMContentLoaded', function(even){
            console.log("DOM fully loaded and parsed");
            priceButton.addEventListener("click",onClick);
        })