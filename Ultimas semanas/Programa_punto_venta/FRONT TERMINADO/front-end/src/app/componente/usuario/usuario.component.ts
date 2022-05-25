import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { environment } from 'src/environments/environment';
import { FormBuilder,FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  formValue !: FormGroup;
  datosUsuarios!:any;
  public filtro: any;
  public filtroText:any;
  public identity: any;
  public base_url = environment.url;
  personaModel:User= new User()

  constructor(
    private usuarioService: UsuarioService,private formbuilder:FormBuilder, private router : Router,
  ) {  this.identity = usuarioService.obtenerIdentidad();}

  ngOnInit(): void {
    this.validar()
    this.listar()
    this.agregar();

  }

  validar(){
    if(this.identity === 'ADMIN'){
      this.usuarioService.obtenerUsuarios().subscribe(
        response =>{
          console.log(response);
            this.datosUsuarios = response.usuarios;
        },
        error=>{

        }
      );
    }else{
      this.router.navigate(['dashboard']);
    }
  }

  listar(){
    this.usuarioService.obtenerUsuarios()
    .subscribe(res=>{
      this.datosUsuarios=res
      console.log(this.datosUsuarios)
    })


  }

  agregar(){
    this.formValue= this.formbuilder.group({
      nombres: [''],
      apellidos: [''],
      correo: [''],
      rol: [''],
      contrasena: ['']
    })
  }

  editar(row:any){
    this.personaModel._id= row._id
    this.formValue.controls['nombres'].setValue(row.nombres);
    this.formValue.controls['apellidos'].setValue(row.apellidos);
    this.formValue.controls['correo'].setValue(row.correo);
    this.formValue.controls['rol'].setValue(row.rol);
    this.formValue.controls['contrasena'].setValue(row.contrasena);

  }

  search(searchForm:any){
    this.usuarioService.obtenerUsuarioParametro(searchForm.value.filtro)
    .subscribe(res=>{
      this.datosUsuarios=res
      console.log(this.datosUsuarios)
    })
    if(this.filtroText==""){
      this.listar();

    }

  }


  eliminarUsuario(row: any){
    this.usuarioService.deleteUsurio(row._id)
    .subscribe(res=>{
      alert("Usuario eliminado");
      this.listar();
    })

  }

  actualizar(){
    this.personaModel.nombres= this.formValue.value.nombres;
    this.personaModel.apellidos= this.formValue.value.apellidos;
    this.personaModel.correo= this.formValue.value.correo;
    this.personaModel.rol= this.formValue.value.rol;
    this.personaModel.contrasena= this.formValue.value.contrasena;
    this.usuarioService.actualizarUsuario(this.personaModel,this.personaModel._id)
    .subscribe(res=>{
      alert("Persona actualizada");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.listar();
    })
  }

}
