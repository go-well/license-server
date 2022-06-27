import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  id: any;
  submitting = false;


  basicForm: FormGroup = new FormGroup({});
  data: any = {
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    if (this.id) this.load();
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      code: [this.data.code, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      public_key: [this.data.public_key, []],
      private_key: [this.data.private_key, []],
      sn: [this.data.sn, []],
      cpu: [this.data.cpu, []],
      mac: [this.data.mac, []],
      uuid: [this.data.uuid, []],
      disabled: [this.data.disabled, []],
    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('product/' + this.id).subscribe(res => {
      this.data = res.data;
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'product/' + this.id : 'product/create';
    this.rs.post(uri, this.basicForm.value).subscribe(res => {
      this.message.success("提交成功");
      this.router.navigate(['/admin/product/detail/' + res.data.id]);
    }).add(() => {
      this.submitting = false;
    })
  }

  change() {
    //console.log('change', e)
    this.data = this.basicForm.value;
  }
}
