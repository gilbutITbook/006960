var n = 20;
for(var a = 1; a <= n; a++) {
   for(var b = 1; b <= n; b++) {
      for(var c = 1; c <= n; c++) {
         if( a*a + b*b == c*c ) {
            console.log(a + "^2 + " + b + "^2 = " + c + "^2");
         }
      }
   }
}
