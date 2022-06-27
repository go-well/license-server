import {Component, Input, OnInit} from '@angular/core';
import {NzTableQueryParams} from "ng-zorro-antd/table";
import {Router} from "@angular/router";
import {RequestService} from "../../request.service";
import {parseTableQuery} from "../table";

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent implements OnInit {
  datum: any[] = [];

  loading = false;
  total = 1;
  pageSize = 20;
  pageIndex = 1;

  params: any = {filter: {}};

  @Input() product = 0

  constructor(private router: Router, private rs: RequestService) { }

  ngOnInit(): void {
  }

  search(keyword: string) {
    this.pageIndex = 1;
    this.params.skip = 0;
    if (keyword)
      this.params.keyword = {name: keyword};
    else
      delete this.params.keyword;
    this.load();
  }

  onQuery(params: NzTableQueryParams) {
    parseTableQuery(params, this.params);
    this.load();
  }

  load(): void {
    this.loading = true;
    if (this.product)
    this.params.filter.product_id = this.product;
    this.rs.post('term/list', this.params).subscribe(res => {
      console.log('res', res);
      this.datum = res.data;
      this.total = res.total;
    }).add(() => {
      this.loading = false;
    });
  }

  create(): void {
    this.router.navigate(["admin/term/create"], { queryParams: { product: this.product } });
  }

  open(data: any): void {
    this.router.navigate(['/admin/term/detail/' + data.id]);
  }

  remove(data: any, i: number) {
    this.rs.get(`term/${data.id}/delete`).subscribe(res=>{
      this.datum.splice(i, 1);
    });
  }
}
