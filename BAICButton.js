import xapi from 'xapi';

const button1 = 'contentAndPeople'
const button2 = 'contentOnly'

xapi.Event.UserInterface.Extensions.Widget.Action.on(async (event) => {
  console.log(event)
  //
  if (event.WidgetId === button1) { //Changes configs if button 1 is pressed
    xapi.Config.Video.Output.Connector[1].MonitorRole.set('First')
    xapi.Config.Video.Output.Connector[3].MonitorRole.set('First')
    // const mode = await xapi.Config.Video.Output.Connector[1].MonitorRole.get()
    // console.log(mode)
  } else if (event.WidgetId === button2) { //Changes configs if button 2 is pressed
    xapi.Config.Video.Output.Connector[1].MonitorRole.set('PresentationOnly')
    xapi.Config.Video.Output.Connector[3].MonitorRole.set('PresentationOnly')
    // const mode = await xapi.Config.Video.Output.Connector[1].MonitorRole.get()
    // console.log(mode)
  }
})