const dataFormatter = function (time){
    console.log(new Date(time).toLocaleDateString('en-GB'));
 return new Date(time).toLocaleDateString()
}



export default {dataFormatter}