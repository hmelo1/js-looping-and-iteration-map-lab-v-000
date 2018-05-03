// Code your solution in this file.
function lowerCaseDrivers(drivers){
    return drivers.map(function (string) {return string.toLowerCase();});
}

function nameToAttributes(names){
  let new_names = names.map(function (name, index){
    return name + name[index+1]
  })
  return new_names
}
