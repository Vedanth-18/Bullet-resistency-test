function touching(parameter1, parameter2){
    if((parameter1.x-parameter2.x<(parameter1.width/2)+(parameter2.width/2)) 
    && ((parameter2.x-parameter1.x)<((parameter1.width/2)+(parameter2.width/2))
    )) {
    return true;
    }
    else{
        return false;
    }
}
function touching2(parameter1, parameter2) {
if((((parameter1.y-parameter2.y)<((parameter1.height/2) + (parameter2.height/2)))
&& ((parameter2.y-parameter1.y<((parameter1.height/2)+ (parameter2.height/2)))))) {
return true;
 }
 else {
     return false;
 }
} 
