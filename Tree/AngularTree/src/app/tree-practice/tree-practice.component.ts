import { TreeService } from '../tree.service';
import { Component } from '@angular/core';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from '@circlon/angular-tree-component';

@Component({
  selector: 'app-tree-practice',
  templateUrl: './tree-practice.component.html',
  styleUrls: ['./tree-practice.component.css'],
  
})
export class TreePracticeComponent {
  
  nodes:any;
text:string="";
  
  options: ITreeOptions = {
    actionMapping:{
      mouse: {
        contextMenu:  (tree:any, node:any, $event:any) => {
          $event.preventDefault();
          alert(`context menu for ${node.data.name}`);
        },
        dblClick:  (tree:any, node:any, $event:any) => {
          if (node.hasChildren) {
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
          }
        },
        click:  (tree:any, node:any, $event:any)=> {
          this.text=`${node.data.text}`;
         
          $event.shiftKey
            ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
            : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
        },
       
      },
      keys: {
        [KEYS.ENTER]:  (tree:any, node:any, $event:any) => alert(`This is ${node.data.name}`)
      }

    }
  };

  constructor(private treeService:TreeService) { 
    this.showConfig();

  }
  

  showConfig() {
    this.treeService.getJson()
      .subscribe((data) =>  {
          this.nodes=data;
          console.log(this.nodes);
      });
  }
}
