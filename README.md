# react-redux
## React Routing

-   React is a SPA library
-   You can still have routing to emulate multiple pages
-   There is no in-built react router
    -   You have to use some 3rd party library
-   react-router is the one we used
-   Within a BrowserRouter tag you can have a Switch where you define Routes
    -   A user typing in that route in the URL will cause that component to render



```JavaScript

<Router>
    <Switch>
      <Route path='/create'>
        <CreateTaskPage></CreateTaskPage>
      </Route>

      <Route path='/view'>
        <TaskViewPage></TaskViewPage>
      </Route>
    </Switch>
</Router>
```

## Redux

-   **Flux** is a _design pattern_ developed by facebook
    ![Flux](https://miro.medium.com/max/1140/0*rovyUqYeojiAPHrX.png)

1. The **view** (react components people interact with) generates **actions**
2. These actions are sent to a **dispatcher**
3. Dispatcher updates the **store**
4. The store passes updated information to the view

-   Data flows in one direction

    -   The data flow is circular but the same direction

-   **Redux**
-   Redux is a _software_ that has a similar approach to flux but slightly different
    ![Redux](https://miro.medium.com/max/919/1*EdiFUfbTNmk_IxFDNqokqg.png)

1. The view generates some sort of **action**
2. This action sends a **dispatch mesage** to a **reducer function**
3. This reducer function interacts with a **store** to update the data within the store
4. Other components recieve information from that store

```JavaScript
// 1. Dispatch Messages
const dispatch = useDispatch();// hook that will allow a component to dispatch
    function addTask(){
        dispatch({type:"add", task:task})// message to send
    }

    return(<div>
        <button onClick={addTask}>Add Task</button>

    </div>)

// 2. Message sare revieved by the reducer function
    const reducer:Reducer<TaskState,any> = (taskState:TaskState = {tasks:[]}, message) =>{

    if(message.type === 'add'){
        const newTaskState:TaskState = {tasks:[...taskState.tasks,message.task]} // duplicating an array
        return newTaskState;
    }
    return taskState
}

// 3. Updates in the state that have selected from the store
const storeTasks:Task[] = useSelector((state:TaskState)=>state.tasks); // takes a
    const taskRows = storeTasks.map(t=>
    <tr><td>{t.name}</td>
    <td>{t.priority}</td>
    <td>{t.isComplete ? "Yes":"No"}</td>
    </tr>)

    return(<table>
        <thead><th>TaskName</th><th>Priority</th><th>Complete</th></thead>
        <tbody>
            {taskRows}
        </tbody>
    </table>)
}

```

# Redux Toolkit

-   Redux in its' bare form is quite simple and easy to understand, but adds a lot of boilerplate code which feels unnecessary and overcomplicates things
-   The Redux team came together to introduce the toolkit to help reduce this abundance of excess code
-   It's a Simple, Opinionated, Powerful and Effect (or SOPE) state management library
    -   Write more effecient code
    -   speed up development process
    -   Automatically apply the best practices
-   Solves 3 Major issues
    1. Configuring a redux store is too complicated
    2. Have to add a lot of packages to build a large scale app
    3. Too much boilerplate code which makes it cumbersome to write efficient and clean code

```bash
#Installing Redux toolkit
npm i @reduxjs/toolkit
```