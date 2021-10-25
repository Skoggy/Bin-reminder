const d = new Date();
const milliSecondsInADay = 86400000

Date.prototype.getWeek = function () {
    const oneJan = new Date(this.getFullYear(), 0, 1);
    const today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
    const dayOfYear = ((today - oneJan + milliSecondsInADay) / milliSecondsInADay);
    return Math.ceil(dayOfYear / 7)
}
const currentWeekNumber = d.getWeek();
console.log(currentWeekNumber)


module.exports = { currentWeekNumber }