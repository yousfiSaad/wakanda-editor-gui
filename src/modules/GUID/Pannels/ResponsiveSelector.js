import ResponsiveDevices from './ResponsiveDevices';

class ResponsiveSelector {
  constructor({documentEditor, containerId}) {

    this.documentEditor = documentEditor;
    this.container = document.getElementById(containerId);

    this.buttons = new Map();
    this.iconBackgrounds = new Map();

    this._initHtmlElement();
  }

  _initHtmlElement() {

    var last;
    for (let device of ResponsiveDevices.devices) {
      let li = document.createElement('li');
      let b = document.createElement('a');
      b.setAttribute('role', 'button');

      for (let active of [true, false]) {
        let activeStr = active ? 'on' : 'off';
        this.iconBackgrounds.set(device.name + '_' + activeStr, this._iconBackground({
          deviceName: device.name,
          active: active
        }));
      }

      b.addEventListener('click', () => {
        this._toggleButton({button: b});
        this._valueChange({
          width: device.width,
          minWidth: device.minWidth,
          deviceName: device.name
        });
      });

      li.appendChild(b);
      this.buttons.set(b, {
        on: () => {
          b.style.background = this.iconBackgrounds.get(device.name + '_on');
        },
        off: () => {
          b.style.background = this.iconBackgrounds.get(device.name + '_off');
        }
      });
      this.container.appendChild(li);
      last = b;
    }
    this._toggleButton({button: last});
    this._broadcastChange({deviceName: 'lg'});
  }


  _iconBackground({deviceName, active}) {
    let iconUrl = 'url(\'./images/mediaqueries/' + deviceName + '_' + (active ? 'on' : 'off') + '.png\') center no-repeat';
    let bgColor = active ? '#FBB500' : '';

    return iconUrl + ' ' + bgColor;
  }

  _toggleButton({button}) {
    this.buttons.forEach((obj, b) => {
      if (b !== button) {
        obj.off();
      }
      else {
        obj.on();
      }
    });
  }

  _broadcastChange({deviceName}) {
    this.documentEditor.events.emit('GUID.responsive.change', {
      deviceName
    });
  }

  _valueChange({width, minWidth, deviceName}) {
    this.documentEditor.changeDocumentSize({width: width, minWidth: minWidth});
    this._broadcastChange({deviceName});
  }
}

export default ResponsiveSelector;
