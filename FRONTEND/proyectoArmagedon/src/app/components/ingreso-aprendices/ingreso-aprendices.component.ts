import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AprendizService } from './../../services/aprendiz.service';
@Component({
  selector: 'app-ingreso-aprendices',
  templateUrl: './ingreso-aprendices.component.html',
  styleUrls: ['./ingreso-aprendices.component.css']
})
export class IngresoAprendicesComponent implements OnInit {

  listarAprendices:any[] =[]


  form:FormGroup;
  id:number | undefined;
  constructor(private fb:FormBuilder,private toastr: ToastrService, private _aprendizService: AprendizService) { 
    this.form = this.fb.group({
      documento:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      nombres:['',Validators.required],
      apellidos:['',Validators.required],
      email:['',Validators.required],
      celular:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      programa:['',Validators.required],
      jornada:['',Validators.required]
    })
  }
 



  ngOnInit(): void {
    this.obtenerAprendices();
  }
  obtenerAprendices(){
  this._aprendizService.getListAprendices().subscribe(data=>{
    console.log(data)
    this.listarAprendices = data


  },error=>{
    console.log()
  })
  }

  agregarAprendiz(){
    const aprendiz:any={
      documento: this.form.get('documento')?.value,
      nombres : this.form.get('nombres')?.value,
      apellidos: this.form.get('apellidos')?.value,
      email:this.form.get('email')?.value,
      celular:this.form.get('celular')?.value,
      programa:this.form.get('programa')?.value,
      jornada:this.form.get('jornada')?.value


    }

    if(this.id==undefined){
      this._aprendizService.saveAprendiz(aprendiz).subscribe(data=>{
        this.toastr.success('Aprendiz Registrado Correctamente','Aprendiz Registrado!');
        this.obtenerAprendices();
        this.form.reset();


      },error=>{
        this.toastr.error('Uppsi Error Capa 8', 'Error!');

      })



    }else{
      aprendiz.id = this.id;
      this._aprendizService.updateAprendiz(this.id,aprendiz).subscribe(data => {
        this.form.reset();
        this.id = undefined;
        this.toastr.info('Aprendiz Actualizado Correctamente', 'Aprendiz Actualizado!');
        this.obtenerAprendices();
      },error=>{
        this.toastr.error('Uppsi Error Capa 8', 'Error!');


      })



    }


  }

  elimininarAprendiz(id:number){
    this._aprendizService.deleteAprendiz(id).subscribe(data=>{
      this.toastr.error('Aprendiz Eliminado Correctamente', 'Aprendiz Eliminado!');
      this.obtenerAprendices();
    },error=>{
      console.log(error)
    })


  }
  editarAprendiz(aprendiz:any){
    this.id = aprendiz.id;

    this.form.patchValue({

      documento: aprendiz.documento,
      nombres :  aprendiz.nombres,
      apellidos:  aprendiz.apellidos,
      email: aprendiz.email,
      celular: aprendiz.celular,
      programa: aprendiz.programa,
      jornada: aprendiz.jornada,

    })


  }




}
