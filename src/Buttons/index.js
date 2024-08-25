const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttons">
        <>
            <button
                class="js-toggleHideDoneButtons buttons__button">
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                class="js-markAllDoneButtons buttons__button"
                disabled={tasks.every(({done}) => done)}>Ukończ wszystkie</button>
        </>
    </div>
);

export default Buttons;