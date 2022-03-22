
function calIMC() {

    let a = parseFloat(document.getElementById('peso').value);
    let b = parseFloat(document.getElementById('altura').value);


   let IMC =  (a/(b*1.5)) 
  console.log(IMC)
   
  if (IMC < 18.5)
{ console.log(` Su IMC=${IMC}, es inferior a 18.5, está dentro de los valores correspondientes a “delgadez o bajo peso.`);
Swal.fire({
       
    text: ` Su IMC=${IMC}, es inferior a 18.5, está dentro de los valores correspondientes a “delgadez o bajo peso.`,
    imageUrl: 'https://1.bp.blogspot.com/-7ou-Q9zlK6o/U9_-yTkJoII/AAAAAAAADyM/eFqqxJG8S58/s1600/descarga+%25284%2529.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  })
  document.getElementById('peso').value="";
  document.getElementById('altura').value="";


}

else if( IMC>18.5 && IMC<24.9) {
    console.log( `Su IMC=${IMC}, está dentro de los valores "normales" o de peso saludable`);
    Swal.fire({
        title: 'IMC',
        text: `Su IMC=${IMC}, está dentro de los valores "normales" o de peso saludable`,
        imageUrl: 'https://i.pinimg.com/564x/68/eb/a1/68eba12fe6883aaf2952b4b8b87f8026.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
      })
   
      document.getElementById('peso').value="";
      document.getElementById('altura').value="";

} else if(IMC>25 && IMC<29.9){
     console.log(`Su IMC=${IMC},  está dentro de los valores correspondientes a "sobrepeso".`);
     Swal.fire({
        title: 'IMC',
        text: `Su IMC=${IMC},  está dentro de los valores correspondientes a "sobrepeso".`,
        imageUrl: 'https://www.pngfind.com/pngs/m/573-5735640_pensando-png-homero-simpson-pensando-png-transparent-png.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      document.getElementById('peso').value="";
      document.getElementById('altura').value="";
       
} else{
    console.log(`Su IMC=${IMC}, es 30.0 o superior, está dentro de los valores de "obesidad" `)
    Swal.fire({
        title: 'IMC',
        text:`Su IMC=${IMC}, es 30.0 o superior, está dentro de los valores de "obesidad" ` ,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRno6KzZ5OTjYqzVB5BlVwbGy4__dCfYNmFrg&usqp=CAU',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
   
      document.getElementById('peso').value="";
      document.getElementById('altura').value="";
    
}

}

