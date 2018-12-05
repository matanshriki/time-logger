const tick = ()=>{
    console.log('tock')
    setTimeout(tick, 1000);
}

setTimeout(tick, 1000);