import {Injectable} from "@angular/core";
import {menuData} from "../models/menudata";


@Injectable({
  providedIn: 'root'
})
export class MenuService
{

      getMenuData()
      {
        return menuData;
      }


}
