function isLeapYear(year) {
   if( (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)) ) {
      return true;
   }
   return false;
}
console.log("1900: "+isLeapYear(1900));
console.log("2000: "+isLeapYear(2000));
console.log("2001: "+isLeapYear(2001));
console.log("2002: "+isLeapYear(2002));
console.log("2003: "+isLeapYear(2003));
console.log("2004: "+isLeapYear(2004));
