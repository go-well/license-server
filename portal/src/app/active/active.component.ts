import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RequestService} from "../request.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  code!: any

  sn!: any
  cpu!: any
  uuid!: any
  mac!: any

  info: any = {terms: []}
  basicForm: FormGroup = new FormGroup({});
  active?: any

  constructor(private route: ActivatedRoute, private rs: RequestService, private fb: FormBuilder) {
    this.code = route.snapshot.paramMap.get("code")
    this.sn = route.snapshot.queryParamMap.get("sn")
    this.cpu = route.snapshot.queryParamMap.get("cpu")
    this.uuid = route.snapshot.queryParamMap.get("uuid")
    this.mac = route.snapshot.queryParamMap.get("mac")
    console.log(this)
  }

  ngOnInit(): void {
    this.buildForm()
    this.load()
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      product_id: [0, [Validators.required]],
      term_id: [0, [Validators.required]],
      user: ['', [Validators.required]],
      email: ['', [Validators.required]],
      cellphone: ['', [Validators.required]],
      organization: ['', []],
      sn: [this.sn, []],
      cpu: [this.cpu, []],
      mac: [this.mac, []],
      uuid: [this.uuid, []],
    });
  }

  load() {
    this.rs.get("active/" + this.code).subscribe(res => {
      this.info = res.data;
      this.basicForm.patchValue({
        product_id: res.data.id,
      })
    })
  }

  submit() {
    let data = this.basicForm.value;
    this.rs.post("active", data).subscribe(res => {
      this.active = res.data;
      const msg = {
        type: "active",
        data: res.data.license
      }
      window.parent?.postMessage(JSON.stringify(msg), "*")
    })
  }

}
