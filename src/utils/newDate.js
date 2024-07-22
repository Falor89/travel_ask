const createNewDate = () => {
    let newDate = new Date();
    newDate.setSeconds(0);
    newDate.setMilliseconds(0);

    return newDate.toLocaleDateString('ru-RU') + ' ' + newDate.toLocaleTimeString('ru-RU');
}
export default createNewDate;