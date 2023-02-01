/*******************************************************************************
 * @author Mochamad Yudi Sobari
 * @github https://github.com/mochamadyudi
 * @email yuyuid.id12@gmail.com
 * @contact +6285718851007
 ******************************************************************************/

export default class Helpers{
    static getNameInitial(text){
        let initials = text.match(/\b\w/g) || [];
        return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    }

    static numberFormat(number, replaceTo = ','){
        return parseFloat(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g,replaceTo)
    }
}