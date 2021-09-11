import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, ViewChild} from '@angular/core';
import { MatTreeFlattener,MatTreeFlatDataSource} from '@angular/material/tree';
import { HttpClient } from '@angular/common/http';
import {JsonReadService} from '../json-read.service';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}


/**
 * @title Tree with flat nodes
 */
 @Component({
  selector: 'app-flat-tree',
  templateUrl: './flat-tree.component.html',
  styleUrls: ['./flat-tree.component.css']
})
export class FlatTreeComponent {
  TREE_DATA: any;
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }
  
  
  


  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
   JsonReadService: any;

  constructor(private http: HttpClient,private jsonRead:JsonReadService) {
    //this.dataSource.data = this.TREE_DATA;

    this.showConfig();
  }

  

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  showConfig() {
    this.jsonRead.getJson()
      .subscribe((data) => {
          this.dataSource.data=data;
          console.log(data);
      });
  }
  
}
