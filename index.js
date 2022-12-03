


document.getElementById('deposit-buttonclick').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-inputBlence');
    const depositText = depositInput.value;
    const depositTAka = parseFloat(depositText);
    // console.log(depositTAka);




    const depositTotal = document.getElementById('deposit-blance');
    const deposiAlltText = depositTotal.innerText;
    const depositAmmout = parseFloat(deposiAlltText);
    const newDeposiTotal = depositAmmout + depositTAka;
    depositTotal.innerText = newDeposiTotal;


    // update blance

    const blanceTotle = document.getElementById('blance-totle');
    const bleancTotleText = blanceTotle.innerText;
    const blanceAmmout = parseFloat(bleancTotleText);
    const newBlenceTotal = blanceAmmout + depositTAka;
    depositTotal.innerText = newBlenceTotal;
    // console.log(depositTotal);




    depositInput.value = '';
})


// withdraw


document.getElementById('withdraw-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositText = depositInput.value;
    const depositInputTAka = parseFloat(depositText);

    const withdrawTotal = document.getElementById('withdraw-blance');
    const withdrawTotalText = withdrawTotal.innerText;
    const newwithdrawTotal = withdrawTotalText + depositInputTAka;
    withdrawTotal.innerText = newwithdrawTotal;




    // update blance

    const blanceTotle = document.getElementById('blance-totle');
    const bleancTotleText = blanceTotle.innerText;
    const blanceAmmout = parseFloat(bleancTotleText);
    const newBlenceTotal = blanceAmmout - depositTAka;
    depositTotal.innerText = newBlenceTotal;


    withdrawInput.value = '';

})











