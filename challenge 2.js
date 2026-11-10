
let goal = 5000;
let month = 1;
let saving =100;
let total = 0;

while( total<goal){
    total += saving;
if ( saving >= 500){
        console.log('Month$[month]:saved KES$[saving],total KES $[total]-Big month!');
} else {
    console.log( 'Month$[month]:saved KES$[saving],[total]');
}    
 // safety net -bonus
if( month > 24){
    console.log ("Stopped for safety - past month 24");
  break;
}   

  month++;
  saving+=50;
}    
    console.log('Goal reached in month$[month] with KES $[total]!');
