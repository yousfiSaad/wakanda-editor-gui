import ColorPicker from './Components/ColorPicker';
import HtmlAttributeInput from './Components/HtmlAttributeInput';
import FontSizePicker from './Components/FontSizePicker';
import FlexboxgridManager from './Components/FlexboxgridManager';
// import ResponsiveClassPicker from './Components/ResponsiveClassPicker';
import BoxManager from './Components/BoxManager';
import ClassPicker from './Components/ClassPicker';
import BorderManager from './Components/BorderManager';
import AlignmentManager from './Components/AlignmentManager';

class Styling {

  constructor({ containerId, documentEditor, panelContainer }){
    this.documentEditor = documentEditor || IDE.GUID.documentEditor;
    this._container = document.createElement('ul');
    (panelContainer || document.getElementById(containerId)).appendChild(this._container);
    this._portViews = [];
    this.initStyleList();
    // this.stylesheetManager = this.documentEditor.stylesheetManager;
  }

  get container(){
    return this._container;
  }

  set portViews(portViews){
    this._portViews = portViews;
    console.log('from Styling Plugin: portViews added ', portViews);
  }

  initStyleList() {

    let _this = this;

    // let responsiveClassPicker = new ResponsiveClassPicker({
    //   documentEditor: this.documentEditor
    // });
    // responsiveClassPicker.appendToElement(this._container);
    // responsiveClassPicker.onValueChange(({newValue, oldValue}) => {
    //   this.documentEditor.addRemoveClasses({
    //     classesToAdd: [newValue],
    //     classesToRemove: [oldValue]
    //   });
    // });

    let idInput = new HtmlAttributeInput({
      documentEditor: this.documentEditor,
      attributeName: 'id',
      placeholder: 'ID'
    });
    idInput.appendToElement(this._container);
    idInput.onValueChange((value) => {
      this.documentEditor.changeElementAttribute({
        attribute: 'id',
        value: value
      });
    });

    this.colorPicker = new ColorPicker({
      documentEditor: this.documentEditor,
      id:'colorPicker',
      placeholder: 'Text color',
      attributeName: 'color'
    });
    this.colorPicker.appendToElement(this._container);
    this.colorPicker.onColorChange((colorHexFormat) => {
      this.documentEditor.changeSelectedElementStyleAttribute({
        attribute: 'color',
        value: '#' + colorHexFormat
      });
    });

    this.bgColorPicker = new ColorPicker({
      documentEditor: this.documentEditor,
      id:'bgColorPicker',
      placeholder: 'Background color',
      attributeName: 'background-color'
    });
    this.bgColorPicker.appendToElement(this._container);
    this.bgColorPicker.onColorChange((colorHexFormat) => {
      this.documentEditor.changeSelectedElementStyleAttribute({
        attribute: 'background-color',
        value: '#' + colorHexFormat
      });
    });

    this.fontSizePicker = new FontSizePicker({
      documentEditor: this.documentEditor
    });
    this.fontSizePicker.appendToElement(this._container);
    this.fontSizePicker.onValueChange((size) => {
      this.documentEditor.changeSelectedElementStyleAttribute({
        attribute: 'font-size',
        value: size
      });
    });

    // TODO: review this
    // let flexboxgridManager = new FlexboxgridManager({
    //   documentEditor: this.documentEditor
    // });

    let boxManager = new BoxManager({
      documentEditor: this.documentEditor
    });
    boxManager.appendToElement(this._container);
    let classPicker = new ClassPicker({
      documentEditor: this.documentEditor
    });
    classPicker.appendToElement(this._container);
    classPicker.onClassInputValueChange(({value}) => {
      this.documentEditor.addClass({className: value});
    });

    let borderManager = new BorderManager({
      documentEditor: this.documentEditor
    });
    borderManager.appendToElement(this._container);
    let alignmentManager = new AlignmentManager({
      documentEditor: this.documentEditor
    });
    alignmentManager.appendToElement(this._container);
    alignmentManager.onHorizontalValueChange((value) => {
      this.documentEditor.changeSelectedElementStyleAttribute({
        attribute: 'text-align',
        value
      });
    });

    // let saveButton = document.createElement('button');
    // saveButton.textContent = 'Save style';
    // saveButton.addEventListener('click', () => {
    //   console.log("CSS dump\n", _this.stylesheetManager.toString());
    // });
    // this._container.appendChild(saveButton);
  }
}

export default Styling;
