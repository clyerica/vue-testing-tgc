# q04-03

In the project, there is a component named `TrafficLight.vue`. Within it, there is a `<div>` with background colour 'white' and a black border. An instance of the TrafficLight has already been created for you in the App component.

In the App component, there are three buttons. The buttons are labelled as "Go", "Wait" and "Stop". There is a data property named status.

Complete the following tasks:

1. Add a prop named signal to the TrafficLight component
2. When the status data property in `App.vue` is a certain value, the background colour of the `TrafficLight` component will change. Consult the table below:


<table>
    <thead>
        <tr>
            <th>Value of status data property</th>
            <th>Background Colour of TrafficLight component</th>
         </tr>
    </thead>
    <tr>
        <td>"go"</td>
        <td>green</td>
    </tr>
    <tr>
        <td>"wait"</td>
        <td>yellow</td>
    </tr>
    <tr>
        <td>"stop"</td>
        <td>red</td>
    </tr>
</table>


