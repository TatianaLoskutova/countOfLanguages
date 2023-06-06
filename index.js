function countLanguages(list) {
    let result = {}
    for (let i = 0; i < list.length ; i++) {
        if (result[list[i].language] === undefined) {
            result[list[i].language] = 1
        } else {
            result[list[i].language]++
        }
    }
    return result
}