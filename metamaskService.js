let userWallet = document.getElementById('userWallet')

async function login(){
    let accounts = await ethereum.request({ method: 'eth_requestAccounts'})
    userWallet.innerHTML = accounts[0]
}