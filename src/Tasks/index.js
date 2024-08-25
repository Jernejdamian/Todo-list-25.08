import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasks">
        {
            tasks.map((task) =>
                <li className={`tasks__item ${task.done && hideDoneTasks ? "tasks__item--hidden" : ""}`}>
                    <button className="tasks__buttons tasks__buttons--done js-tasks__buttons--done">{task.done ? "✓" : ""}</button>
                    <span>{task.content}</span>
                    <button className="tasks__buttons tasks__buttons--remove js-tasks__buttons--remove">🗑</button>
                </li>)
        }
    </ul>
);

export default Tasks;