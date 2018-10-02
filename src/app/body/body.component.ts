import { Component, OnInit } from '@angular/core';
import { Form } from '../form/form';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  nim = ''
  nama = ''
  kelas = ''
  mahasiswa: Form[] = []
  mhs
  constructor() { }

  ngOnInit() {
  }

  tambahMhs() {
    this.mhs = new Form(this.nim, this.nama, this.kelas)
    this.mahasiswa.push(this.mhs)
    this.nim = ''
    this.nama = ''
    this.kelas = ''
  }


}
