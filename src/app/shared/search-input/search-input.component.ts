import { Component, OnInit, Input } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchData = [];

  @Input() elemID: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.elemID)
    if (this.elemID != undefined){
      setTimeout(() => {
        this.getInputSearch(this.elemID);
      }, 0);
    }

  }

  getInputSearch(value): void{
    $('#' + value).autocomplete({
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
      select: (event, ui) => {
        $('#' + value).val(ui.item.label);
        return false;
      }
    });
    $('#' + value).data('ui-autocomplete')._renderItem = (ul, item) => {
      return $('<li/>', { 'data-value': item.label }).append($('<a/>', { href: '#' })
        .append($('<img/>', { src: item.icon, alt: item.label })).append(item.label))
        .appendTo(ul);
    };
  }



}


