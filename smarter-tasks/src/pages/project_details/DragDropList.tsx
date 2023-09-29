import React from "react";
import { AvailableColumns } from "../../context/task/types";
import { useParams } from "react-router-dom";
import { useTasksDispatch } from "../../context/task/context";
import { ProjectData } from "../../context/task/types";
import Column from "./Column";
import { DragDropContext, OnDragEndResponder } from "react-beautiful-dnd";
import { reorderTasks, updateTask } from "../../context/task/actions";
const Container = (props: React.PropsWithChildren) => {
  return <div className="flex">{props.children}</div>;
};

const DragDropList = (props: { data: ProjectData }) => {
  const { ProjectID } = useParams();
  const taskDispatch = useTasksDispatch();

  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    // Get source list
    const startKey = source.droppableId as AvailableColumns;
    // Get destination list
    const finishKey = destination.droppableId as AvailableColumns;

    // Get source list to modify
    const start = props.data.columns[startKey];
    // Get destination list to modify
    const finish = props.data.columns[finishKey];

    if (start === finish) {
      const newTaskIDs = Array.from(start.taskIDs);
      // Remove the dragged item from source list
      newTaskIDs.splice(source.index, 1);
      // Insert the item to destination list
      newTaskIDs.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIDs: newTaskIDs,
      };
      const newState = {
        ...props.data,
        columns: {
          ...props.data.columns,
          [newColumn.id]: newColumn,
        },
      };
      reorderTasks(taskDispatch, newState);
      return;
    }

    const newTaskIDs = Array.from(start.taskIDs);
    // Remove the dragged item from source list
    newTaskIDs.splice(source.index, 1);
    // Insert the item to destination list
    newTaskIDs.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...start,
      taskIDs: newTaskIDs,
    };
    const newState = {
      ...props.data,
      columns: {
        ...props.data.columns,
        [newColumn.id]: newColumn,
      },
    };

    const startTaskIds = Array.from(start.taskIDs);
    const UpdatedItems = startTaskIds.splice(source.index, 1);
    reorderTasks(taskDispatch, newState);
    const UpdatedTask = props.data.tasks[UpdatedItems[0]];
    updateTask(taskDispatch, ProjectID ?? "", UpdatedTask);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {props.data.columnOrder.map((colID) => {
          const column = props.data.columns[colID];
          const tasks = column.taskIDs.map(
            (taskID) => props.data.tasks[taskID],
          );
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </Container>
    </DragDropContext>
  );
};

export default DragDropList;
