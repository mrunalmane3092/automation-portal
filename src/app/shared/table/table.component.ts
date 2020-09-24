import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  tableData;
  constructor() { }

  ngOnInit(): void {

    this.tableData = [{ name: 'Tiger Nixon', salary: '$205,500', link: '/about'},
      { name: 'Garrett Winters', salary: '$385,750', link: '/about' },
      { name: 'Ashton Cox', salary: '$86,000', link: '/about' },
      { name: 'Cedric Kelly', salary: '$433,060', link: '/about' },
      { name: 'Airi Satou', salary: '$162,700', link: '/about' },
      { name: 'Brielle Williamson', salary: '$372,000', link: '/about' },
      { name: 'Herrod Chandler', salary: '$137,500', link: '/about' },
      { name: 'Rhona Davidson', salary: '$327,900', link: '/about' },
      { name: 'Colleen Hurst', salary: '$205,500', link: '/about' },
      { name: 'Sonya Frost', salary: '$103,600', link: '/about' },
      { name: 'Jena Gaines', salary: '$90,560', link: '/about' },
      { name: 'Quinn Flynn', salary: '$342,000', link: '/about' },
      { name: 'Charde Marshall', salary: '$470,600', link: '/about' },
      { name: 'Haley Kennedy', salary: '$725,000', link: '/about' },
      { name: 'Tatyana Fitzpatrick', salary: '$198,500', link: '/about' },
      { name: 'Michael Silva', salary: '$385,750', link: '/about' },
      { name: 'Paul Byrd', salary: '$313,500', link: '/about' },
      { name: 'Gloria Little', salary: '$237,500', link: '/about' },
      { name: 'Bradley Greer', salary: '$132,000', link: '/about' },
      { name: 'Dai Rios', salary: '$217,500', link: '/about' },
      { name: 'Jenette Caldwell', salary: '$345,000', link: '/about' },
      { name: 'Yuri Berry', salary: '$675,000', link: '/about' },
      { name: 'Caesar Vance', salary: '$92,575', link: '/about' },
      { name: 'Doris Wilder', salary: '$1,200,000', link: '/about' },
      { name: 'Angelica Ramos', salary: '$85,600', link: '/about' },
      { name: 'Gavin Joyce', salary: '$106,450', link: '/about' },
      { name: 'Jennifer Chang', salary: '$206,850', link: '/about' },
      { name: 'Brenden Wagner', salary: '$850,000', link: '/about' },
      { name: 'Fiona Green', salary: '$163,000', link: '/about' }];

    $(document).ready(() => {
      $('#example').DataTable({
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']]
      });
    });
  }



}
