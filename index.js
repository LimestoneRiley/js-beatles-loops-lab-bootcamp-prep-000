// add solution here
function theBeatlesPlay (musicians, instruments){
  var BeatlesArray = [];
  var i;
  for (i = 0; i < musicians.length; i++){
    BeatlesArray[i] = musicians[i] + " plays " + instruments[i];
  }
  return (BeatlesArray);
}
