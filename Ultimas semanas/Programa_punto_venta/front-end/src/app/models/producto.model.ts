export class ProductoModel{

    public _id:number =0;
    public titulo:string ='';
    public descripcion:string ='';
    public imagen: any;
    public precio_compra:  number=0;
    public precio_venta: number=0;
    public stock:string ='';
    public idcategoria:string ='';


}


export class Producto{
  constructor(
      public _id:string,
      public titulo : string,
      public descripcion: string,
      public imagen:any,
      public precio_venta:number,
      public precio_compra :number,
      public stock:number,
      public idcategoria:string
  ){

  }
}



