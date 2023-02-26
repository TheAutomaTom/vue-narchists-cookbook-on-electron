import electron, { MenuItemConstructorOptions } from "electron";

  const menuTemplate = [
    {
      label: "demo",
      submenu: [
        { 
          label: "Sub-Menu 1", 
          click: function(){
            console.log(`Clicked Sub-menu 1!`)
          }
        },
        {type: `separator`},
        { 
          label: "sub-menu 2", 
        },
        { 
          label: "sub-menu 3", 
        }
      ]

    },
    {
      label: `Edit`,
      submenu: [
        {role:`undo`},      
        {role:`redo`},      
        {role:`separator`},      
        {role:`cut`},      
        {role:`copy`},      
        {role:`paste`},      
        {role:`pasteAndMatchStyle`},
        {role:`delete`},      
        {role:`selectAll`},
      ]      
    },    
    {
      label: `word`, 
      submenu:[
      {
        label: "About the author", 
        click: function(){
          electron.shell.openExternal(`http://www.SurrealityCheck.org`)
        }
      }
    ] }
  ] as MenuItemConstructorOptions[];
export { menuTemplate };