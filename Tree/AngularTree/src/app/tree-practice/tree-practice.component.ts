

import { Component } from '@angular/core';
import { TreeModule } from '@circlon/angular-tree-component';
import { TreeNode, TreeModel, TREE_ACTIONS, KEYS, IActionMapping, ITreeOptions } from '@circlon/angular-tree-component';

const getChildren = () => new Promise((resolve) => {
  setTimeout(() => resolve([
    { id: 5, name: 'child2.1', children: [] },
    { id: 6, name: 'child2.2', children: [
      { id: 7, name: 'grandchild2.2.1' }
    ] }
  ]), 2000);
});

const actionMapping: IActionMapping = {
  mouse: {
    contextMenu: (tree, node, $event) => {
      $event.preventDefault();
      alert(`context menu for ${node.data.name}`);
    },
    dblClick: (tree, node, $event) => {
      if (node.hasChildren) {
        TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
      }
    },
    click: (tree, node, $event) => {
      $event.shiftKey
        ? TREE_ACTIONS.TOGGLE_ACTIVE_MULTI(tree, node, $event)
        : TREE_ACTIONS.TOGGLE_ACTIVE(tree, node, $event);
    },
    mouseOver: (tree, node, $event) => {
      $event.preventDefault();
      console.log(`mouseOver ${node.data.name}`);
    },
    mouseOut: (tree, node, $event) => {
      $event.preventDefault();
      console.log(`mouseOut ${node.data.name}`);
    }
  },
  keys: {
    [KEYS.ENTER]: (tree, node, $event) => alert(`This is ${node.data.name}`)
  }
};

@Component({
  selector: 'app-tree-practice',
  templateUrl: './tree-practice.component.html',
  styleUrls: ['./tree-practice.component.css']
})
export class TreePracticeComponent {
  nodes = [
    {
      name: 'root1',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'root2',
      children: [
        { name: 'child2.1', children: [] },
        { name: 'child2.2', children: [
          {name: 'grandchild2.2.1'}
        ] }
      ]
    },
    { name: 'root3' },
    { name: 'root4', children: [] },
    { name: 'root5', children: null }
  ];

  

  options: ITreeOptions = {
    actionMapping
  };

  // addNode(tree: any) {
  //   this.nodes[0].children.push({
  //     name: 'a new child'
  //   });
  //   tree.treeModel.update();
  // }

  activateSubSub(tree: any) {
    // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
    tree.treeModel.getNodeById(1001)
      .setActiveAndVisible();
  }

  activeNodes(treeModel: any) {
    console.log(treeModel.activeNodes);
  }
}
