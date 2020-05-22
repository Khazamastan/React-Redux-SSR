export default function getTimeIntervals(interval = 30, start= 0) {
  
  var x = interval; //minutes interval
  var times = []; // time array
  var tt = start + (30 - start%30); // start time
  var ap = ["AM", "PM"]; // AM-PM

  //loop to increment the time and push results in array
  for (var i = 0; tt < 24 * 60; i++) {
    var hh = Math.floor(tt / 60); // getting hours of day in 0-24 format
    var mm = tt % 60; // getting minutes of the hour in 0-55 format
    times[i] = {
        value: tt,
        label: ("0" + (hh % 12)).slice(-2) + ":" + ("0" + mm).slice(-2) + ap[Math.floor(hh / 12)]
    } // pushing data in array in [00:00 - 12:00 AM/PM format]
    tt = tt + x;
  }

  return times;
}
