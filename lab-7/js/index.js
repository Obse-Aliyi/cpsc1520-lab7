 async function appInt(){
    const res = await fetch('https://661c9956e7b95ad7fa6a9e92.mockapi.io/albums');
    const payload = res.json();
    console.log(payload)
 }
 appInt()