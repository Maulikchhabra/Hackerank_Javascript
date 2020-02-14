function getDayName(dateString) {
    let dayName;
    var date=new Date(dateString);
    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    // Write your code here
    dayName = days[date.getDay()];
    return dayName;
}
