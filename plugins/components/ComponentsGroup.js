// NOTE: maybe the stratategy will be shared between all components in the same group
class ComponentGroup {
  constructor({groupName, documentEditor}) {
    this._documentEditor = documentEditor;

    this._div = document.createElement('div');
    let title = document.createElement('h4');
    title.textContent = groupName;
    this._div.appendChild(title);
    let list = document.createElement('ul');
    this._div.appendChild(list);
  }

  get container(){
    return this._div;
  }

  addComponents({components}) {
    for (let c of components) {
      let div = document.createElement('div');
      div.innerHTML = c.name;

      // NOTE: css in js temporary
      div.style.cursor = 'pointer';
      let docEditor = this._documentEditor;
      div.onclick = () => {
          docEditor.appendElement({
            element: c.createElement()
          });
      };

      // NOTE: tmp
      div.getComponent = () => {
        return c;
      };

      this.container.appendChild(div);
    }
  }

}

export default ComponentGroup;