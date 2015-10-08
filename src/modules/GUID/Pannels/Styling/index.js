import ColorPicker from './Components/ColorPicker';
import HtmlAttributeInput from './Components/HtmlAttributeInput';
import FontSizePicker from './Components/FontSizePicker';
import FlexgridManager from './Components/FlexgridManager';

class Styling {

  constructor({
    containerId, documentEditor
  }){
    this.documentEditor = documentEditor || IDE.GUID.documentEditor;
    this.container = document.createElement('ul');
    document.getElementById(containerId).appendChild(this.container);

    this.initStyleList();
    // this.stylesheetManager = this.documentEditor.stylesheetManager;
  }

  initStyleList() {

    let _this = this;

    let idInput = new HtmlAttributeInput({
      documentEditor: this.documentEditor,
      attributeName: 'id',
      placeholder: 'ID'
    });
    idInput.appendToElement(this.container);
    idInput.onValueChange((value) => {
      this.documentEditor.changeSelectedElementAttribute({
        attribute: 'id',
        value: value
      });
    });

    this.colorPicker = new ColorPicker({
      documentEditor: this.documentEditor,
      id:'colorPicker',
      placeholder: 'Text color'
    });
    this.colorPicker.appendToElement(this.container);
    this.colorPicker.onColorChange((colorHexFormat) => {
      this.documentEditor.changeSelectedElementStyleAttribute({
        attribute: 'color',
        value: '#' + colorHexFormat
      });
    });

    this.fontSizePicker = new FontSizePicker({
      documentEditor: this.documentEditor
    });
    this.fontSizePicker.appendToElement(this.container);
    this.fontSizePicker.onValueChange((size) => {
      this.documentEditor.changeSelectedElementStyleAttribute({
        attribute: 'font-size',
        value: size
      });
    });

    let flexgridManager = new FlexgridManager({
      documentEditor: this.documentEditor
    });

    // let saveButton = document.createElement('button');
    // saveButton.textContent = 'Save style';
    // saveButton.addEventListener('click', () => {
    //   console.log("CSS dump\n", _this.stylesheetManager.toString());
    // });
    // this.container.appendChild(saveButton);
  }
}

export default Styling;