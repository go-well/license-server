import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {NzMessageService} from "ng-zorro-antd/message";

@Component({
  selector: 'app-term-edit',
  templateUrl: './term-edit.component.html',
  styleUrls: ['./term-edit.component.scss']
})
export class TermEditComponent implements OnInit {
  id: any;
  submitting = false;


  basicForm: FormGroup = new FormGroup({});
  data: any = {
    year: 1, month:0, day:0, price: 0
  }

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private rs: RequestService, private message: NzMessageService) {
    this.id = route.snapshot.paramMap.get('id');
    if (this.id) {
      this.load();
    } else {
      // @ts-ignore
      this.data.product_id = parseInt(route.snapshot.queryParamMap.get("product"))
    }
    this.buildForm();
  }

  buildForm(): void {
    this.basicForm = this.fb.group({
      product_id: [this.data.product_id, [Validators.required]],
      name: [this.data.name, [Validators.required]],
      Description: [this.data.Description, []],
      year: [this.data.year, []],
      month: [this.data.month, []],
      day: [this.data.day, []],
      price: [this.data.price, []],
    });
  }

  ngOnInit(): void {
  }


  load(): void {
    this.rs.get('term/' + this.id).subscribe(res => {
      this.data = res.data;
      this.buildForm();
    })
  }

  submit(): void {
    this.submitting = true
    const uri = this.id ? 'term/' + this.id : 'term/create';
    this.rs.post(uri, this.basicForm.value).subscribe(res => {
      this.message.success("提交成功");
      this.router.navigate(['/admin/term/detail/' + res.data.id]);
    }).add(() => {
      this.submitting = false;
    })
  }

  change() {
    //console.log('change', e)
    this.data = this.basicForm.value;
  }
}
