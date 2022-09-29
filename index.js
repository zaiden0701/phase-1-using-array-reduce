const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = batteryBatches.reduce(
//     (previousValue, currentValue) => previousValue + currentValue.batteryBatches[0],0,
// ) 
// console.log(totalBatteries)

const totalBatteries = batteryBatches.reduce(
    (previousValue, currentValue) => previousValue + currentValue)