export class Menu {
  private _label: string;
  private _icon: string;
  private _routerLink: string;
  private _items: Item[];

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }


  constructor(plabel: string, picon: string, prouter: string, pitems: Item[]) {

    this._label = plabel;
    this._icon = picon;
    this._items = pitems;
    this._routerLink = prouter;
  }
  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }
  get items(): Item[] {
    return this._items;
  }

  set items(value: Item[]) {
    this._items = value;
  }
  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }




}




export class Item {
  private _label: string;
  private _icon: string;
  private _routerLink: string;

  get routerLink(): string {
    return this._routerLink;
  }

  set routerLink(value: string) {
    this._routerLink = value;
  }


  constructor(plabel:string, picon:string, prouter: string) {
    this._label = plabel;
    this._icon = picon;
    this._routerLink = prouter;
  }


  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }


  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }





}



