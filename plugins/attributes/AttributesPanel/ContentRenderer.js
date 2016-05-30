import helpers from './helpers';

class ContentRenderer{
  constructor({container}){
    this._container = container;
    this._input = this.initInput();
  }
  initInput(){
    let {input, label} = helpers.createInputWithLabel({ labelContent: 'Text content' });
    this._container.appendChild(label);
    input.onchange = ()=>{
      if(this.onChange){
        this.onChange(input.value);
      }
    };

    return input;
  }

  set onChange(callBack){
    this._onChange = callBack;
  }

  get onChange(){
    if(this._onChange){
      return this._onChange;
    }else{
      return null;
    }
  }

  set content(content){
    this._input.value = content;
  }

  get content(){
    if(this._input.value){
      return this._input.value;
    }else{
      return null;
    }
  }

}

export default ContentRenderer;