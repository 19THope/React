import React from "react";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList";

function App() {
    /**
     * Tu auras à mettre en place la logique
     * de chaque composant. Normalement tu
     * n'auras pas besoin d'autres composants
     * pour ce genre d'application. En gros ce
     * qu'il faut faire c'est une app qui permet
     * d'ajouter des tâches, d'en supprimer et de
     * modifier(faite ou non faite, un checkbox).
     * Enfin tu vas ajouter un select (dropdown)
     * qui permet d'afficher les taches faites,
     * non faites et toute les taches à la fois.
     */
    return (
        <div className="App">
            <Form />
            <TodoList />
        </div>
    );
}

export default App;
