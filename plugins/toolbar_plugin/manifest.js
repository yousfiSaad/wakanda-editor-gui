export default {
  "toolbar": [
		{
	    name: "save",
	    type: "button",
	    action: "save"
	  },
		{
	    type: "separator"
	  },
		{
	    name: "prevEdit",
	    type: "button",
	    action: "prevEdit"
	  }
	],
  dependencies: {
    coreModules : [
      'GUID',
      'toolbar'
    ],
    plugins:[

    ]
  }
}
