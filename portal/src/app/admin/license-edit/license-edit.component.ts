import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-license-edit',
  templateUrl: './license-edit.component.html',
  styleUrls: ['./license-edit.component.scss']
})
export class LicenseEditComponent implements OnInit {
  id: any;
  submitting = false;


  basicForm: FormGroup = new FormGroup({});
  data: any = {
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    if (this.id) {
      this.load();
    } else {
      // @ts-ignore
      this.data.product_id = parseInt(route.snapshot.queryParamMap.get("product"))
      // @ts-ignore
      this.data.term_id = parseInt(route.snapshot.queryParamMap.get("term"))
    }
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      product_id: [this.data.product_id, [Validators.required]],
      term_id: [this.data.term_id, [Validators.required]],
      user: [this.data.user, [Validators.required]],
      email: [this.data.email, [Validators.required]],
      cellphone: [this.data.cellphone, []],
      organization: [this.data.organization, []],
      sn: [this.data.sn, []],
      cpu: [this.data.cpu, []],
      mac: [this.data.mac, []],
      uuid: [this.data.uuid, []],
    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('license/' + this.id).subscribe(res => {
      this.data = res.data;
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'license/' + this.id : 'license/create';
    this.rs.post(uri, this.basicForm.value).subscribe(res => {
      this.message.success("提交成功");
      this.router.navigate(['/admin/license/detail/' + res.data.id]);
    }).add(() => {
      this.submitting = false;
    })
  }

  change() {
    //console.log('change', e)
    this.data = this.basicForm.value;
  }
}
