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

    this.tableData = [{ name: 'Tiger Nixon', salary: '$205,500', link: '/portal'},
      { name: 'Garrett Winters', salary: '$385,750', link: '/portal' },
      { name: 'Ashton Cox', salary: '$86,000', link: '/portal' },
      { name: 'Cedric Kelly', salary: '$433,060', link: '/portal' },
      { name: 'Airi Satou', salary: '$162,700', link: '/portal' },
      { name: 'Brielle Williamson', salary: '$372,000', link: '/portal' },
      { name: 'Herrod Chandler', salary: '$137,500', link: '/portal' },
      { name: 'Rhona Davidson', salary: '$327,900', link: '/portal' },
      { name: 'Colleen Hurst', salary: '$205,500', link: '/portal' },
      { name: 'Sonya Frost', salary: '$103,600', link: '/portal' },
      { name: 'Jena Gaines', salary: '$90,560', link: '/portal' },
      { name: 'Quinn Flynn', salary: '$342,000', link: '/portal' },
      { name: 'Charde Marshall', salary: '$470,600', link: '/portal' },
      { name: 'Haley Kennedy', salary: '$725,000', link: '/portal' },
      { name: 'Tatyana Fitzpatrick', salary: '$198,500', link: '/portal' },
      { name: 'Michael Silva', salary: '$385,750', link: '/portal' },
      { name: 'Paul Byrd', salary: '$313,500', link: '/portal' },
      { name: 'Gloria Little', salary: '$237,500', link: '/portal' },
      { name: 'Bradley Greer', salary: '$132,000', link: '/portal' },
      { name: 'Dai Rios', salary: '$217,500', link: '/portal' },
      { name: 'Jenette Caldwell', salary: '$345,000', link: '/portal' },
      { name: 'Yuri Berry', salary: '$675,000', link: '/portal' },
      { name: 'Caesar Vance', salary: '$92,575', link: '/portal' },
      { name: 'Doris Wilder', salary: '$1,200,000', link: '/portal' },
      { name: 'Angelica Ramos', salary: '$85,600', link: '/portal' },
      { name: 'Gavin Joyce', salary: '$106,450', link: '/portal' },
      { name: 'Jennifer Chang', salary: '$206,850', link: '/portal' },
      { name: 'Brenden Wagner', salary: '$850,000', link: '/portal' },
      { name: 'Fiona Green', salary: '$163,000', link: '/portal' }];

    $(document).ready(() => {
      $('#example').DataTable({
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']]
      });
    });
  }



}
