/***********************************************************************************
 * 
 * Given an integer array bills where bills[i] is the bill the ith customer pays,
 * return true if you can provide every customer with the correct change,
 * or false otherwise.
 * 
***********************************************************************************/

const lemonadeChange = bills => {
    let five = 0, ten = 0
    for (let bill of bills) {
        if (bill === 5) {
            five += 1
        } else if (bill === 10) {
            if (five === 0) return false
            five -= 1
            ten += 1
        } else if (bill === 20) {
            if (five !== 0 && ten !== 0) {
                five -= 1
                ten -= 1
            } else if (ten === 0 && five >= 3) {
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
}
