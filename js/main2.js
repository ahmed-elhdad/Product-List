let prudactrsContainer=document.querySelector('.prudacts-container');
let cartArea=document.querySelector('.cart');
let ordersArea=document.querySelector('.cart .orders');
let numberOfPrudactsinMyCart=document.querySelector('.number-of-prudacts');
let buttonConfirm=document.querySelector('.confirm');
let theRequest = new XMLHttpRequest();
let totalCartPrice = 0;
let numberPrudacts=0;

theRequest.open('GET','./data.json');
theRequest.send();
theRequest.onreadystatechange= function(){
    if (this.status===200&& this.readyState===4){
        let request=JSON.parse(this.responseText)
        for (let i = 0; i < request.length; i++) {
            let div=document.createElement('div');
            prudactrsContainer.appendChild(div);
            div.setAttribute('data-ordering','false')
            let prudactImage=document.createElement('img');
            prudactImage.src=request[i].image.thumbnail;
            div.appendChild(prudactImage);
            let button=document.createElement('button');
            div.appendChild(button)
            let iconCart=document.createElement('i');
            iconCart.className='fa-solid fa-cart-shopping'
            button.appendChild(iconCart);
            let textAdd=document.createTextNode('add to cart');
            button.appendChild(textAdd);
            let prudactCategory=document.createElement('h3');
            prudactCategory.textContent=request[i].category;
            div.appendChild(prudactCategory);
            let prudactName=document.createElement('p');
            prudactName.textContent=request[i].name;
            div.appendChild(prudactName);
            let prudactCost=document.createElement('span');
            let costText=request[i].price;
            let prudactCostText=document.createTextNode(`$${costText}`)
            prudactCost.appendChild(prudactCostText)
            div.appendChild(prudactCost);
            button.onclick=function handleClick(){
                prudactImage.classList.add('focus')
                button.className = 'd-none';
                let parentElementIncart=document.querySelector('.parent');
                parentElementIncart.classList.remove("d-none");
                let newButton=document.createElement('button');
                newButton.className='newButton';
                div.appendChild(newButton)
                // Create plus button
                let spanAdd=document.createElement('span');
                spanAdd.className='spanAdd';
                newButton.appendChild(spanAdd);
                let spanPlus=document.createElement('i');
                spanPlus.className="fa-solid fa-circle-plus";
                spanAdd.appendChild(spanPlus);
                // Created plus button
                // Create number of prudacts
                let numberOfPrudactsInTheCart =document.createElement('span');
                numberOfPrudactsInTheCart.textContent=1;
                newButton.appendChild(numberOfPrudactsInTheCart);
                numberOfPrudactsInTheCart.className='number';
                // Created number of products 
                // Create minus button
                let spanMinus=document.createElement('span');
                spanMinus.className='increment';
                newButton.appendChild(spanMinus);
                let spanIncrement=document.createElement('i');
                spanIncrement.className='fa-solid fa-circle-minus';
                spanMinus.appendChild(spanIncrement);
                // Created minus button
                document.querySelector('.cart svg').classList.add('d-none')
                document.querySelector('.cart p').classList.add('d-none');
                let divInCartArea=document.createElement('div');
                ordersArea.appendChild(divInCartArea);
                let prudactTitleInCart=document.createElement('h4');
                prudactTitleInCart.textContent=prudactName.textContent;
                divInCartArea.appendChild(prudactTitleInCart);
                let numberOfPrudacts=document.createElement('p');
                numberPrudacts = numberOfPrudactsInTheCart.textContent;
                numberOfPrudactsinMyCart.textContent=numberOfPrudactsInTheCart.textContent
                numberPrudacts+=numberOfPrudactsinMyCart;
                numberOfPrudacts.textContent=`${numberOfPrudactsInTheCart.textContent}`;
                divInCartArea.appendChild(numberOfPrudacts);
                let priceInCart=document.createElement('span');
                priceInCart.textContent=`@&${prudactCost.textContent}`;
                divInCartArea.appendChild(priceInCart);
                let totalPriceInCart=document.createElement('p');
                let totalPriceAll=request[i].price * numberOfPrudacts.textContent;
                totalPriceInCart.textContent=totalPriceAll;
                divInCartArea.appendChild(totalPriceInCart);
                let spanXMark=document.createElement('span');
                divInCartArea.appendChild(spanXMark);
                let xMark=document.createElement('i');
                xMark.className='fa-regular fa-circle-xmark';
                spanXMark.appendChild(xMark);
                let totalPrice=document.querySelector(".total-cost");
                    totalCartPrice += request[i].price; // Add the price of the current product
                    totalPrice.textContent = totalCartPrice; // Update the displayed total price
                numberOfPrudactsinMyCart.textContent=numberOfPrudactsinMyCart.textContent ;
                if (ordersArea.childElementCount >4){
                    ordersArea.classList.add('scroll');
                }
                buttonConfirm.onclick=()=>{
                    let div=document.querySelector('.all');
                    div.classList.add('all-2');
                    document.body.classList.add('ov-hidden');
                    let endDiv=document.createElement('div');
                    endDiv.classList.add('div');
                    document.body.appendChild(endDiv);
                    let goodCheck=document.createElement('i');
                    goodCheck.className='fa-regular fa-circle-check';
                    endDiv.appendChild(goodCheck);
                    let orderConfirmed=document.createElement('h1');
                    orderConfirmed.textContent='order confirmed';
                    endDiv.appendChild(orderConfirmed);
                    let text=document.createElement('p');
                    text.textContent="happy hope you enjoy food!";
                    endDiv.appendChild(text);
                    let ordersDiv=document.createElement('div');
                    ordersDiv.classList.add('div-2');
                    endDiv.appendChild(ordersDiv);
                    let divIn=document.createElement('div');
                    divIn.classList.add('the-div');
                    endDiv.appendChild(divIn);
                    let imgPrudact=document.createElement('img');
                    imgPrudact.src=prudactImage.src;
                    divIn.appendChild(imgPrudact);
                    let prudactname=document.createElement('h4');
                    prudactname.textContent=prudactCategory.textContent;
                    divIn.appendChild(prudactname);
                    let numberofprudacts=document.createElement('p');
                    numberofprudacts.textContent=numberOfPrudacts.textContent;
                    divIn.appendChild(numberofprudacts)
                    let total=document.createElement('p');
                    total.textContent="order total: ";
                    let prudactcost=document.createElement('span');
                    prudactcost.textContent=prudactCost.textContent;
                    divIn.appendChild(prudactcost);
                    let totalprice=document.createElement('h5');
                    totalprice.textContent=totalPriceInCart.textContent;
                    divIn.appendChild(totalprice);
                    endDiv.appendChild(total);
                    let spanInTotal=document.createElement('span');
                    spanInTotal.textContent=totalPrice.textContent;
                    total.appendChild(spanInTotal);
                    let buttonStartANewOrder=document.createElement('button');
                    buttonStartANewOrder.textContent="start new order";
                    endDiv.appendChild(buttonStartANewOrder);
                    buttonStartANewOrder.onclick=()=>{
                        window.location.reload();
                    }
                    }
                // Handle delete the order from cart
                spanXMark.onclick=function handleDeleteItems(){
                    let productTotal = request[i].price * numberOfPrudacts.textContent;
                    totalCartPrice -= productTotal; // Subtract the product's total price
                    totalPrice.textContent = totalCartPrice; // Update the displayed total price
                    divInCartArea.remove();
                    newButton.classList.add('d-none');
                    button.classList.remove('d-none');
                }
                
                // Handle plus 
                spanAdd.onclick=function handlePlusClick() {
                    numberOfPrudactsInTheCart.textContent++;
                    numberOfPrudactsinMyCart.textContent++;
                    numberOfPrudacts.textContent = numberOfPrudactsInTheCart.textContent;
                    totalPriceInCart.textContent= request[i].price * numberOfPrudacts.textContent;
                    numberOfPrudactsinMyCart.textContent=numberOfPrudactsinMyCart.textContent;
                        numberPrudacts=numberOfPrudactsInTheCart.textContent;
                        totalCartPrice += request[i].price; // Add the price of one more unit
                        totalPrice.textContent = totalCartPrice; // Update the displayed total price
                }
                // Handle increment
                spanMinus.onclick=function handlePlusClick() {
                    if (numberOfPrudactsInTheCart.textContent ==1){
                        newButton.classList.add('events-none');
                        newButton.classList .add('d-none');
                        button.classList.remove('d-none')
                        divInCartArea.remove();
                    }
                    else{
                        numberOfPrudactsInTheCart.textContent--;
                        numberOfPrudacts.textContent--;
                        
                        totalCartPrice -= request[i].price; // Subtract the price of one unit
                        totalPrice.textContent = totalCartPrice; // Update the displayed total price
                    }
                }
            }
        }
    }
}