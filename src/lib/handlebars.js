const helpers = {}

//El producto esta disponible o No
helpers.disponible=(activo) => { 
    if(activo>0){
    return activo > 0 ? 'disponible':'1' 
}
else{
    return activo == 0 ? 'No disponible':'0' 
}
}


helpers.disponibleBox=(activo) => { 
    if(activo>0){
    return activo > 0 ? 'badge badge-success':'1' 
}
else{
    return activo == 0 ? 'badge badge-warning':'0' 
}
}

module.exports = helpers