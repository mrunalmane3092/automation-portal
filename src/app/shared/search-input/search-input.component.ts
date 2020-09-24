import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchData = [];


  constructor() { }

  ngOnInit(): void {

    this.searchData = [{ title: 'Title 1', img: '/assets/images/organization_42x42.png'},
                       { title: 'Title 2', img: '/assets/images/organization_42x42.png'}];


    $('#search').autocomplete({
      source: [
        {
          value: 'aaa',
          label: 'aaa',
          desc: 'aaa',
          icon: 'assets/images/organization_42x42.png'
        },
        {
          value: 'bbb',
          label: 'bbb',
          desc: 'bbb',
          icon: 'assets/images/organization_42x42.png'
        },
        {
          value: 'ccc',
          label: 'ccc',
          desc: 'ccc',
          icon: 'assets/images/organization_42x42.png'
        }
      ],
      minLength: 0,
      select:  (event, ui)  => {
        $('#search').val(ui.item.label);
        return false;
      }
    });
    $('#search').data('ui-autocomplete')._renderItem =  (ul, item) => {
      return $('<li/>', { 'data-value': item.label }).append($('<a/>', { href: '#' })
        .append($('<img/>', { src: item.icon, alt: item.label })).append(item.label))
        .appendTo(ul);
    };
  }

}


